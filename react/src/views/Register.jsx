import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import axiosClient from '../axios-client';
import { useStateContext } from '../contexts/ContextProvider';

function Register() {
  const nameRef=useRef();
  const emailRef=useRef();
  const passwordRef=useRef();
  const passwordConfirmationRef=useRef();

  const [errors, setErrors]=useState(null)

  const {setUser, setToken}=useStateContext()

  const onSubmit=(ev)=>{
    ev.preventDefault()
     const payload={
      name:nameRef.current.value,
      email:emailRef.current.value,
      password:passwordRef.current.value,
      password_confirmation:passwordConfirmationRef.current.value,
     }
    //  console.log(payload)
    axiosClient.post('/register', payload)
    .then(({data})=>{
      setUser(data.user)
      setToken(data.token)
    })
    .catch(err=>{
      // console.log(err)
      const response=err.response;
      if (response && response.status===422) {
        //console.log(response.data.errors)
        setErrors(response.data.errors)
      }
    })
  }
  return (
  
      <form action="" onSubmit={onSubmit}>
      <h1 className='title'>
            Register for Free 
          </h1>
          {errors && <div className='alert'>
            {
              Object.keys(errors).map(key=>(
                <p key={key}>{errors[key][0]}</p>
              ))}
          </div>
          }
        <input ref={nameRef} type="email"  placeholder='email'/>
        <input ref={emailRef} type="text"  placeholder='full name'/>
        <input ref={passwordRef} type="password"  placeholder='password'/>
        <input ref={passwordConfirmationRef} type="password"  placeholder='password confirmation'/>
        <button className='btn btn-block'>Register</button>
        <p className='message'>
          Already Registered?<Link to="/login"> Login</Link>
        </p>
      </form>
   
  )
}

export default Register