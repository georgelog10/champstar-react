import React, {useState} from 'react'
import './Login2.css'
import Logo from '../../assets/logo-removebg-preview.png'
import GoogleLogo from '../../assets/Google__G__logo.svg.png'
import { FormControlLabel, Checkbox } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithGooglePopup, auth } from '../../config/fire';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faFacebookF } from '@fortawesome/free-brands-svg-icons';

const Login2 = () => {
  const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            navigate("/dashboard")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
    }

    const logGoogleUser = async () => {
      const response = await signInWithGooglePopup();
      console.log(response);
    }

  return (
    <section className='w-100 d-flex flex-column justify-content-center login-form-section'>
        <Link to='/' className='mb-4'><img src={Logo} alt='Logo' className='login-logo' width={80}/></Link>
        <h1 className='h3 fw-bolder mb-0'>Conectează-te la contul tău</h1>
        <p className='mb-4 text-secondary'>Bine ai revenit!</p>
        <form className='d-flex flex-column gap-3'>
          <input type="email" placeholder='Email' className="border border-2 border-secondary-subtle bg-transparent rounded-3 py-2 px-3 inputBox" onChange={(e)=>setEmail(e.target.value)} required />
          <input type="password" placeholder='Parola' className="border border-2 border-secondary-subtle bg-transparent rounded-3 py-2 px-3 inputBox" onChange={(e)=>setPassword(e.target.value)} required />
          <div className='d-flex justify-content-between align-items-center login-form-options'>
            <FormControlLabel required control={<Checkbox />} label="Ține-mă minte"/>
            <Link to='/resetare-parola' className='text-dark'>Ai uitat parola?</Link>
          </div>
          <button type='submit' onClick={onLogin} className='border-0 py-2 rounded-3 text-white fw-bold mb-4 login-btn'>Conectare</button>
        </form>
        <div className='d-flex gap-2 justify-content-between align-items-center mb-4'>
          <div className='border border-secondary-subtle w-25 separator'></div>
          <p className='text-center mb-0 login-alt-options'>sau conectează-te cu</p>
          <div className='border border-secondary-subtle w-25 separator'></div>
        </div>
        <div className='d-flex justify-content-center gap-4'>
          <button className="py-2 px-2 rounded-3 border border-2 border-secondary-subtle mb-4 d-flex gap-3 justify-content-center text-body-secondary" onClick={logGoogleUser}><img src={GoogleLogo} alt='Google Logo' width={24} height={24}/></button>
          <button className='py-2 px-2 rounded-3 border border-2 mb-4 d-flex gap-3 justify-content-center text-body-secondary facebook-login'><FontAwesomeIcon icon={faFacebookF}/></button>
          <button className='py-2 px-2 rounded-3 border border-2 border-secondary-subtle mb-4 d-flex gap-3 justify-content-center text-body-secondary apple-login'><FontAwesomeIcon icon={faApple}/></button>
        </div>
        <p className='text-center text-dark register-link'>Nu ești membru? <Link to='/register'>Creează un cont</Link></p>
    </section>
  )
}

export default Login2