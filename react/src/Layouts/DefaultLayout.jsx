import React, { useEffect } from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'
import axiosClient from '../axios-client'
import { useStateContext } from '../contexts/ContextProvider'

function DefaultLayout() {
    const {token,user, notification,setUser,setToken}=useStateContext()
    if (!token) {
        return <Navigate to="/login"/>
    }
    const onLogout=(ev)=>{
      ev.preventDefault()
      axiosClient.post('/logout')
      .then(()=>{
        setUser({})
        setToken(null)
      })
    }
    useEffect(()=>{
      axiosClient.get('/user')
      .then(({data})=>{
        setUser(data)
      })
    },[])
  return (
    <div id='defaultLayout'>
      <aside>
        <Link to="/home">Home</Link>
        <Link to="/users">Users</Link>
      </aside>
      <div className="content">
        <header>
          <div>
            header
          </div>
          <div>
            {user.name}  {user.email}
            <a href='#' onClick={onLogout} className='btn-logout'>Logout</a>
          </div>
        </header>
        <main>
        <Outlet/>
        </main>
        {notification && <div className="notification">
          {notification}
          </div>}
      </div>
        
    </div>
  )
}

export default DefaultLayout