import React from 'react'
import './ContactForm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';

const ContactForm = () => {
  return (
    <section class='mb-0 mx-auto px-3 px-lg-0 d-flex justify-content-between align-items-center contact-form-section'>
      <div className='d-flex flex-column flex-lg-row justify-content-between align-items-center container'>
      <div className='text-white mb-4 mb-lg-0 contact-container-1'>
        <FontAwesomeIcon icon={faEnvelopeOpen} className='display-4 mb-4'/>
        <h1 className='fw-bolder fs-1'>Contactează-ne</h1>
        <p className='h5 fw-normal'>Ai o întrebare pe care dorești să o adresezi? <br/> Nu ezita și hai să ne auzim!</p>
      </div>
      <div className="p-5 rounded-3 bg-white shadow contact-container-2">
        <form action='' className='contact-form'>
          <div className='d-flex flex-column flex-lg-row gap-0 gap-lg-4 form-row-1'>
            <div className='w-100 w-lg-50 col'>
              <input type='text' name='name' placeholder='Nume*' className='w-100 mb-3 border border-2 border-dark-subtle p-2 rounded-2' required />
            </div>
            <div className='w-100 w-lg-50 col'>
              <input type='email' name='email' placeholder='Email*' className='w-100 mb-3 border border-2 border-dark-subtle p-2 rounded-2' required />
            </div>
          </div>
          <div className='form-row'>
            <input type='text' name='subject' placeholder='Subiect*' className='w-100 mb-3 border border-2 border-dark-subtle p-2 rounded-2' required />
          </div>
          <div className='form-row'>
            <textarea name='message' rows='6' placeholder='Mesajul tău*' className='w-100 mb-3 border border-2 border-dark-subtle p-2 rounded-2' required />
          </div>
          <label>
              <input type="checkbox" /> Sunt de acord cu procesarea datelor mele
          </label>
          <input type='submit' value='Trimite' className='w-100 border-0 py-2 rounded-3 text-white fw-bold mt-3 contact-submit'/>
        </form>
      </div>
      </div>
    </section>
  )
}

export default ContactForm