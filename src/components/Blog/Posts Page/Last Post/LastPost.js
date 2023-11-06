import React from 'react'
import './LastPost.css'
import PostImage from '../../../../assets/mohamed-nohassi--0xMiYQmk8g-unsplash.jpg'
import { Button, Image } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faClock, faUser } from '@fortawesome/free-regular-svg-icons'

const LastPost = () => {
  return (
    <section id='last-post-section'>
        <div className='last-post-details'>
            <h1 className='post-title'>Post Title</h1>
            <p><FontAwesomeIcon icon={faUser}/> Autor | <FontAwesomeIcon icon={faClock}/> Data</p>
            <p className='post-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget mauris pharetra et ultrices neque ornare.</p>
            <Button className='read-more-button'>Citește mai mult <FontAwesomeIcon icon={faArrowRight}/></Button>
        </div>
        <div className='last-post-image'>
            <Image src={PostImage}/>
        </div>
    </section>
  )
}

export default LastPost