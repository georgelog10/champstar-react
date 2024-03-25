import React, {useState, useEffect} from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <section className='d-flex justify-content-center py-3 px-0 footer-section'>
      <div className='d-flex flex-column flex-lg-row gap-4 justify-content-between container'>
        <div className='d-flex justify-content-center align-items-center'>
            <p className='text-white fw-bold mb-0'>&copy; {currentYear} ChampStar. Toate drepturile rezervate.</p>
        </div>
        <div className='d-flex justify-content-center align-items-center gap-4 social-icons'>
            <Link className='text-white social-link'><FontAwesomeIcon icon={faFacebook}/></Link>
            <Link className='text-white social-link'><FontAwesomeIcon icon={faXTwitter}/></Link>
            <Link className='text-white social-link'><FontAwesomeIcon icon={faInstagram}/></Link>
        </div>
      </div>
    </section>
  )
}

export default Footer