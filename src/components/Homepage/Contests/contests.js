import React from 'react'
import './contests.css'
import SeverinBumbaru from '../../../assets/SeverinBumbaruLogofinal1.3.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Contests = () => {
  return (
    <section className='contests-section'>
        <div className='contests-images'>
            <img src={SeverinBumbaru} alt='Severin Bumbaru' className='contest-image'></img>
            <img src={SeverinBumbaru} alt='Severin Bumbaru' className='contest-image'></img>
            <img src={SeverinBumbaru} alt='Severin Bumbaru' className='contest-image'></img>
            <img src={SeverinBumbaru} alt='Severin Bumbaru' className='contest-image'></img>
            <img src={SeverinBumbaru} alt='Severin Bumbaru' className='contest-image'></img>
            <img src={SeverinBumbaru} alt='Severin Bumbaru' className='contest-image'></img>
        </div>
        <div className='contests-text'>
            <h1>Lorem ipsum</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Link to='/' className='contests-button'>Află mai multe <FontAwesomeIcon icon={faArrowRight}/></Link>
        </div>
    </section>
  )
}

export default Contests