import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'

function DefaultLayout() {
    const {user,token}=useStateContext()
    if (!token) {
        return <Navigate to="/login"/>
    }
  return (
    <div>DefaultLayout
        <Outlet/>
    </div>
  )
}

export default DefaultLayout