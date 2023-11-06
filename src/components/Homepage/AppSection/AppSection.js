import React from 'react'
import './AppSection.css'
import MobileApp from '../../../assets/MobileApp.png'
import GooglePlay from '../../../assets/Romanian-google-play-badge.png'
import AppStore from '../../../assets/Download_on_the_App_Store_Badge_RO_RGB_blk.png'
import { Link } from 'react-router-dom'

const AppSection = () => {
  return (
    <section className='app-section'>
        <div className='app-image'>
            <img src={MobileApp} alt='Mobile App'></img>
        </div>
        <div className='app-text'>
            <h1>Aplicația ChampStar</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className='download-links'>
              <Link to='https://play.google.com' className='google-play'><img src={GooglePlay} alt='Google Play'/></Link>
              <Link to='https://www.apple.com/app-store/' className='app-store'><img src={AppStore} alt='App Store'/></Link>
            </div>
        </div>
    </section>
  )
}

export default AppSection