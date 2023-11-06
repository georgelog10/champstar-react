import React, {useEffect, useRef} from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Champion from '../../../assets/champion.json';
import Lottie from 'lottie-react';

const Hero = () => {
  return (
    <section className='hero-section'>
        <div className='hero-text'>
            <h1>Studenți în competiție, excelență cu pasiune!</h1>
            <p>Cu ChampStar, te poți înscrie la o gamă variată de concursuri studențești și oferi studenției tale un premiu de neuitat!</p>
            <Link to='/' className='hero-button'>Înscrie-te acum! <FontAwesomeIcon icon={faArrowRight}/></Link>
        </div>
        <div className='hero-image'>
            <Lottie loop={true} animationData={Champion} />
        </div>
    </section>
  )
}

export default Hero