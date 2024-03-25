import React from 'react'
import './aboutus.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import AboutUsImage from '../../../assets/about.jpg'

const AboutUs = () => {
  return (
    <section className='py-4 about-us-section'>
      <div className="container">
        <div className='d-flex align-items-center rounded-5 gap-5 p-5 about-us'>
            <div className="text-white w-100 w-lg-50 d-flex flex-column gap-3 about-us-text">
                <h1 className='fs-1 fw-bolder'>Despre ChampStar</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <Link to='/' className='border border-3 border-white p-2 rounded-3 text-white fw-bolder text-center about-us-button'>Află mai multe <FontAwesomeIcon icon={faArrowRight}/></Link>
            </div>
            <div className='w-100 w-lg-50 about-us-image'>
                <img src={AboutUsImage} alt='About Us' className='w-100 rounded-4'/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs