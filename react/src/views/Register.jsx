import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  const onSubmit=(ev)=>{
    ev.preventDefault()
  }
  return (
  
      <form action="" onSubmit={onSubmit}>
      <h1 className='title'>
            Register for Free 
          </h1>
        <input type="email"  placeholder='email'/>
        <input type="text"  placeholder='full name'/>
        <input type="password"  placeholder='password'/>
        <input type="password"  placeholder='password confirmation'/>
        <button className='btn btn-block'>Register</button>
        <p className='message'>
          Already Registered?<Link to="/login"> Login</Link>
        </p>
      </form>
   
  )
}

export default Register