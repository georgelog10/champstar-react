import React, {useState} from 'react'
import axios from 'axios'
import './Register2.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo-removebg-preview.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Register2 = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:8081/register', {name, email, password, phone})
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }
  return (
    <section className='register-form-section'>
        <Link to='/'><img src={Logo} alt='Logo' className='register-logo'/></Link>
        <h1>Bun venit la ChampStar!</h1>
        <p>Creează acum un cont la ChampStar și începe să cauți concursul la care dorești să participi.</p>
        <form onSubmit={handleSubmit}>
        <div className="inputBox">
            <FontAwesomeIcon icon={faUser} />
            <input type="text" placeholder='Nume' onChange={e => setName(e.target.value)} required />
          </div>
          <div className="inputBox">
            <FontAwesomeIcon icon={faEnvelope} />
            <input type="email" placeholder='Email' onChange={e => setEmail(e.target.value)} required />
          </div>
          <div className="inputBox">
            <FontAwesomeIcon icon={faKey} />
            <input type="password" placeholder='Parola' onChange={e => setPassword(e.target.value)} required />
          </div>
          <div className="inputBox">
            <FontAwesomeIcon icon={faPhone} />
            <input type="phone" placeholder='Telefon' onChange={e => setPhone(e.target.value)} required />
          </div>
          <button type="submit" className='register-btn'>Crează cont</button>
        </form>
        <p className='login-link'>Ai deja un cont? <Link to='/login'>Conectează-te</Link></p>
    </section>
  )
}

export default Register2