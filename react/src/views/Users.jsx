import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axiosClient from '../axios-client'
import { useStateContext } from '../contexts/ContextProvider'



function Users() {
  const [users, setUsers]=useState([])
const [loading, setLoading]=useState(false)
const {setNotification}=useStateContext()

useEffect(()=>{
  getUsers();
},[])

const onDelete=(u)=>{
  if (!window.confirm("Are you sure?")) {
    return
  }
  axiosClient.delete(`/users/${u.id}`)
  .then(()=>{
    setNotification("User deleted successfully")
    getUsers()
  })
}

const getUsers=()=>{
  setLoading(true)
  axiosClient.get('/users')
  .then(({data})=>{
    setLoading(false)
    // console.log(data)
    setUsers(data.data)
  })
  .catch(()=>{
    setLoading(false)
  })
}
  return (
    <div>
      <div style={{ display:'flex', justifyContent:'space-between',alignItems:'center' }}>
        <h1>Users</h1>
        <Link to="/users/new" className='btn-add'>Add new</Link>
      </div>
      <div className="card animated fadeInDown">
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>email</th>
              <th>create date</th>
              <th>Actions</th>
            </tr>
          </thead>
         {loading &&  <tbody>
            <tr>
              <td colSpan={5} className='text-center'>loading..</td>
            </tr>
          </tbody>
         }
         {!loading && 
         <tbody>
            {users.map(u =>(
              <tr>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.created_at}</td>
                <td>
                  <Link className='btn-edit' to={"/users/"+u.id}>Update</Link>
                  &nbsp;
                  <button onClick={ev =>onDelete(u)} className="btn-delete">delete</button>
                </td>
              </tr>
            ))}
          </tbody>
}
        </table>
      </div>
    </div>
  )
}

export default Users