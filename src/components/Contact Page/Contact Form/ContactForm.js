import React from 'react'
import './ContactForm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';

const ContactForm = () => {
  return (
    <section id='contact-form-section'>
      <div className='contact-container-1'>
        <FontAwesomeIcon icon={faEnvelopeOpen} />
        <h1>Contactează-ne</h1>
        <p>Ai o întrebare pe care dorești să o adresezi? <br/> Nu ezita și hai să ne auzim!</p>
      </div>
      <div className="contact-container-2">
        <form action='' className='contact-form'>
          <div className='form-row-1'>
            <div className='col'>
              <input type='text' name='name' placeholder='Nume*' required />
            </div>
            <div className='col'>
              <input type='email' name='email' placeholder='Email*' required />
            </div>
          </div>
          <div className='form-row'>
            <input type='text' name='subject' placeholder='Subiect*' required />
          </div>
          <div className='form-row'>
            <textarea name='message' rows='10' placeholder='Mesajul tău*' required />
          </div>
          <label>
              <input type="checkbox" /> Sunt de acord cu procesarea datelor mele
          </label>
          <input type='submit' value='Trimite' className='contact-submit'/>
        </form>
      </div>
    </section>
  )
}

export default ContactForm