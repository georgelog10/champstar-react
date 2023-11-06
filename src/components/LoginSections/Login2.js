import React, {useState} from 'react'
import './Login2.css'
import axios from 'axios'
import Logo from '../../assets/logo-removebg-preview.png'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Login2 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:8081/login', {email, password})
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }

  return (
    <section className='login-form-section'>
        <Link to='/'><img src={Logo} alt='Logo' className='login-logo'/></Link>
        <h1>Conectează-te la contul tău</h1>
        <p>Bine ai revenit!</p>
        <form onSubmit={handleSubmit}>
          <div className="inputBox">
            <FontAwesomeIcon icon={faEnvelope} />
            <input type="email" placeholder='Email' onChange={e => setEmail(e.target.value)} required />
          </div>
          <div className="inputBox">
            <FontAwesomeIcon icon={faKey} />
            <input type="password" placeholder='Parola' onChange={e => setPassword(e.target.value)} required />
          </div>
          <div className='login-form-options'>
            <FormControlLabel required control={<Checkbox />} label="Ține-mă minte"/>
            <Link to='/resetare-parola'>Ai uitat parola?</Link>
          </div>
          <button type='submit' className='login-btn'>Conectare</button>
        </form>
        <p className='register-link'>Nu ai un cont? <Link to='/register'>Creează un cont</Link></p>
    </section>
  )
}

export default Login2