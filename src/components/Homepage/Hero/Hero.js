import React, {useEffect, useRef} from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Champion from '../../../assets/champion.json';
import Lottie from 'lottie-react';

const Hero = () => {
  return (
    <section className='d-flex flex-column flex-lg-row justify-content-between align-items-center hero-section'>
      <div className='d-flex flex-column flex-lg-row justify-content-between align-items-center container'>
        <div className='order-1 order-lg-0 hero-text'>
            <h1 className='text-white fw-bold mb-3 lh-sm'>Studenți în competiție, excelență cu pasiune!</h1>
            <p className='text-white fw-normal pb-3'>Cu ChampStar, te poți înscrie la o gamă variată de concursuri studențești și oferi studenției tale un premiu de neuitat!</p>
            <Link to='/' className='border-0 text-white fw-bolder hero-button'>Înscrie-te acum! <FontAwesomeIcon icon={faArrowRight}/></Link>
        </div>
        <div className='order-0 order-lg-1 hero-image'>
            <Lottie loop={true} animationData={Champion} />
        </div>
      </div>
    </section>
  )
}

export default Hero