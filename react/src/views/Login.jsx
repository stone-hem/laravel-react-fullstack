import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  const onSubmit=()=>{

  }
  return (
  
        <form action="" onSubmit={onSubmit}>
          <h1 className='title'>
            Access your Account
          </h1>
          <input type="email"  placeholder='email'/>
          <input type="password"  placeholder='password'/>
          <button className='btn btn-block'>Login</button>
          <p className='message'>
            Not Registered?<Link to="/register"> Create Account</Link>
          </p>
        </form>
     
  )
}

export default Login