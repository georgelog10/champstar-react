import React from 'react'
import './contests.css'
import SeverinBumbaru from '../../../assets/SeverinBumbaruLogofinal1.3.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Contests = () => {
  return (
    <section className='d-flex align-items-center py-4 contests-section'>
      <div className='d-flex flex-column flex-lg-row align-items-center gap-5 container'>
        <div className='row w-100 w-lg-50 gap-4 contests-images'>
          <div className='col'>
            <img src={SeverinBumbaru} alt='Severin Bumbaru' className='contest-image' width={220}></img>
          </div>
          <div className='col'>
            <img src={SeverinBumbaru} alt='Severin Bumbaru' className='contest-image' width={220}></img>
          </div>
          <div className='col'>
            <img src={SeverinBumbaru} alt='Severin Bumbaru' className='contest-image' width={220}></img>
          </div>
          <div className='col'>
            <img src={SeverinBumbaru} alt='Severin Bumbaru' className='contest-image' width={220}></img>
          </div>
        </div>
        <div className='text-center text-lg-end w-100 w-lg-50 d-flex flex-column gap-3 contests-text'>
            <h1 className='fs-1 fw-bolder'>Lorem ipsum</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Link to='/' className='border-0 text-white fw-bolder text-center p-3 align-self-center align-self-lg-end rounded-3 contests-button'>Află mai multe <FontAwesomeIcon icon={faArrowRight}/></Link>
        </div>
      </div>
    </section>
  )
}

export default Contests