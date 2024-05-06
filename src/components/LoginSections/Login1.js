import React from 'react';
import LoginImage from '../../assets/chris-ried-ieic5Tq8YMk-unsplash.jpg';
import './Login1.css'

const Login1 = () => {
  return (
    <section className='login-section-photo'>
      <img src={LoginImage} alt='Login Photo' className='vh-100 object-fit-cover'/>
    </section>
  )
}

export default Login1;