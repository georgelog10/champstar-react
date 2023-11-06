import React from 'react'
import './newsletter.css'

const Newsletter = () => {
  return (
    <section id='newsletter-section'>
        <div className='newsletter'>
            <div className='newsletter-text'>
                <h1>Abonează-te la newsletter!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className='newsletter-form'>
                <form action=''>
                    <input type='email' name='email' className='email' placeholder='Email'/>
                    <input type='submit' className='newsletter-submit' value='Abonează-te'/>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Newsletter