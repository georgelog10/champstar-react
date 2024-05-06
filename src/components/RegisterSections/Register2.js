import React, {useState} from 'react'
import './Register2.css'
import Logo from '../../assets/logo-removebg-preview.png'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../config/fire';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faKey, faPhone } from '@fortawesome/free-solid-svg-icons';

const Register2 = () => {
  const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
 
    const onSubmit = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            const user = userCredential.user;
            await updateProfile(user, {
              displayName: name,
              phoneNumber: phone,
            });
            console.log(user);
            // navigate("/login")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
      };

  return (
    <section className='w-100 d-flex flex-column justify-content-center register-form-section'>
        <Link to='/' className='mb-4'><img src={Logo} alt='Logo' className='register-logo' width={80}/></Link>
        <h1 className='h3 fw-bolder mb-0'>Bun venit la ChampStar!</h1>
        <p className='mb-4 text-secondary'>Creează acum un cont la ChampStar și începe să cauți concursul la care dorești să participi.</p>
        <form method='POST' className='d-flex flex-column gap-3'>
            <input type="text" name="name" placeholder='Nume' className='border border-2 border-secondary-subtle bg-transparent rounded-3 py-2 px-3' onChange={(e) => setName(e.target.value)} required />
            <input type="email" placeholder='Email' required className='border border-2 border-secondary-subtle bg-transparent rounded-3 py-2 px-3' onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='Parola' required className='border border-2 border-secondary-subtle bg-transparent rounded-3 py-2 px-3' onChange={(e) => setPassword(e.target.value)} />
            <input type="tel" name="phone" placeholder='Telefon' className='border border-2 border-secondary-subtle bg-transparent rounded-3 py-2 px-3' pattern="07[0-9]{8}" onChange={(e) => setPhone(e.target.value)} required/>
          <button type="submit" onClick={onSubmit} className='border-0 py-2 rounded-3 text-white fw-bold mb-4 register-btn'>Crează cont</button>
        </form>
        <p className='text-center text-dark login-link'>Ai deja un cont? <Link to='/login'>Conectează-te</Link></p>
    </section>
  )
}

export default Register2