import React, {useState} from 'react';
import Logo from '../../assets/logo-removebg-preview.png'
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBars, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <section className='p-3 py-xl-3 px-xl-0 bg-dark bg-opacity-10 z-1 navbar'>
      <div className='container-lg'>
        <div className='d-flex align-items-center gap-4 nav-menu'>
            <Link to='/'><img src={Logo} alt='Logo' className='logo' width={60}/></Link>
            <Link to='/' className='d-none d-lg-block text-uppercase text-white fw-bold desktopMenuItem'>Acasă</Link>
            <Link to='/despre-noi'className='d-none d-lg-block text-uppercase text-white fw-bold desktopMenuItem'>Despre noi</Link>
            <Link to='/blog' className='d-none d-lg-block text-uppercase text-white fw-bold desktopMenuItem'>Noutăți</Link>
            <Link to='/contact' className='d-none d-lg-block text-uppercase text-white fw-bold desktopMenuItem'>Contact</Link>
        </div>
        <div className='d-none d-lg-flex align-items-center gap-5 nav-buttons'>
            <Link to='/login' className='border-0 text-white fw-bold loginBtn'><FontAwesomeIcon icon={faUser} /> Conectare</Link>
            <Link to='/register' className='border-0 text-white fw-bold rounded-3 registerBtn'>Înregistrare</Link>
        </div>
        <button className="border-0 text-white menu-button" onClick={toggleMenu}><FontAwesomeIcon icon={faBars} /></button>
        <div className={`position-fixed bg-white h-100 d-flex flex-column justify-content-between mobile-menu ${isOpen ? 'open' : ''}`}>
            <button className="border-0 text-end close-button" onClick={closeMenu}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <ul className="d-flex flex-column p-0 mb-0 text-center menu-items">
              <li className='list-unstyled'><Link to='/' className='fw-bolder text-dark text-uppercase mobileMenuItem'>Acasă</Link></li>
              <li className='list-unstyled'><Link to='/despre-noi' className='fw-bolder text-dark text-uppercase mobileMenuItem'>Despre noi</Link></li>
              <li className='list-unstyled'><Link to='/blog' className='fw-bolder text-dark text-uppercase mobileMenuItem'>Noutăți</Link></li>
              <li className='list-unstyled'><Link to='/contact' className='fw-bolder text-dark text-uppercase mobileMenuItem'>Contact</Link></li>
            </ul>
            <ul className="d-flex flex-column p-0 mb-0 text-center sign-buttons">
              <li className='list-unstyled mb-2'><Link to='/login' className='text-dark fw-bolder mobileMenuItem'><FontAwesomeIcon icon={faUser} /> Conectare</Link></li>
              <li className='list-unstyled mb-4'><Link to='/register' className='text-white fw-bolder rounded-3 mobileMenuItem registerBtn'>Înregistrare</Link></li>
            </ul>
        </div>
      </div>
    </section>
  )
}

export default Navbar