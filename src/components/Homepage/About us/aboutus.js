import React from 'react'
import './aboutus.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import AboutUsImage from '../../../assets/annie-spratt-QckxruozjRg-unsplash.jpg'

const AboutUs = () => {
  return (
    <section id='about-us-section'>
        <div className='about-us'>
            <div className="about-us-text">
                <h1>Despre ChampStar</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <Link to='/' className='about-us-button'>Află mai multe <FontAwesomeIcon icon={faArrowRight}/></Link>
            </div>
            <div className='about-us-image'>
                <img src={AboutUsImage} alt='About Us'/>
            </div>
        </div>
    </section>
  )
}

export default AboutUs