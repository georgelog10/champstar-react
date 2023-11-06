import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <section className='footer-section'>
        <div className='copyright'>
            <p>&copy; 2023 ChampStar. Toate drepturile rezervate.</p>
        </div>
        <div className='social-icons'>
            <Link className='social-link'><FontAwesomeIcon icon={faFacebook}/></Link>
            <Link className='social-link'><FontAwesomeIcon icon={faXTwitter}/></Link>
            <Link className='social-link'><FontAwesomeIcon icon={faInstagram}/></Link>
        </div>
    </section>
  )
}

export default Footer