import React, {useState} from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBars, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/logo-removebg-preview.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <section className='navbar'>
        <div className='nav-menu'>
            <Link to='/'><img src={Logo} alt='Logo' className='logo'/></Link>
            <Link to='/' className='desktopMenuItem'>Acasă</Link>
            <Link to='/despre-noi'className='desktopMenuItem'>Despre noi</Link>
            <Link to='/blog' className='desktopMenuItem'>Noutăți</Link>
            <Link to='/contact' className='desktopMenuItem'>Contact</Link>
        </div>
        <div className='nav-buttons'>
            <Link to='/login' className='loginBtn'><FontAwesomeIcon icon={faUser} /> Conectare</Link>
            <Link to='/register' className='registerBtn'>Înregistrare</Link>
        </div>
        <button className="menu-button" onClick={toggleMenu}><FontAwesomeIcon icon={faBars} /></button>
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
            <button className="close-button" onClick={closeMenu}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <ul className="menu-items">
              <li><Link to='/' className='mobileMenuItem'>Acasă</Link></li>
              <li><Link to='/despre-noi' className='mobileMenuItem'>Despre noi</Link></li>
              <li><Link to='/blog' className='mobileMenuItem'>Noutăți</Link></li>
              <li><Link to='/contact' className='mobileMenuItem'>Contact</Link></li>
            </ul>
            <ul className="sign-buttons">
              <li><Link to='/login' className='mobileMenuItem loginBtn'><FontAwesomeIcon icon={faUser} /> Conectare</Link></li>
              <li><Link to='/register' className='mobileMenuItem registerBtn'>Înregistrare</Link></li>
            </ul>
        </div>
    </section>
  )
}

export default Navbar