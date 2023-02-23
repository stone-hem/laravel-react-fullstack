import React, { useEffect, useState } from 'react'
import axiosClient from '../axios-client'

const [users, setUsers]=useState({})
const [loading, setLoading]=useState(false)

useEffect(()=>{
  getUsers();
},[])

const getUsers=()=>{
  setLoading(true)
  axiosClient.get('/users')
  .then(({data})=>{
    setLoading(false)
    console.log(data)
  })
  .catch(()=>{
    setLoading(false)
  })
}

function Users() {
  return (
    <div>Users</div>
  )
}

export default Users