import React, {useState} from 'react'
import Login1 from '../components/LoginSections/Login1'
import Login2 from '../components/LoginSections/Login2'

const Login = () => {
  return (
    <div className='login-sections'>
        <Login1 />
        <Login2 />
    </div>
  )
}

export default Login;