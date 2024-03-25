import React from 'react'
import './newsletter.css'

const Newsletter = () => {
  return (
    <section className='py-4 newsletter-section'>
        <div className="container">
        <div className='d-flex flex-column flex-lg-row align-items-center rounded-5 p-5 gap-5 newsletter'>
            <div className='w-100 w-lg-50 d-flex flex-column gap-3 text-white newsletter-text'>
                <h1 className='fs-1 fw-bolder'>Abonează-te la newsletter!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className='w-100 w-lg-50 newsletter-form'>
                <form action='' className='d-flex flex-column gap-3'>
                    <input type='email' name='email' className='border-0 bg-white rounded-3 py-2 px-3 email' placeholder='Email' required/>
                    <input type='submit' className='border-0 py-2 px-3 rounded-3 text-white fw-bolder newsletter-submit' value='Abonează-te'/>
                </form>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Newsletter