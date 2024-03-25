import React, { useState, useEffect } from 'react'
import './LastPost.css'
import PostImage from '../../../../assets/mohamed-nohassi--0xMiYQmk8g-unsplash.jpg'
import {db} from '../../../../config/fire';
import { collection, getDocs } from 'firebase/firestore';
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faClock, faUser } from '@fortawesome/free-regular-svg-icons'

const LastPost = () => {
  const [lastPost, setLastPost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'blogs'));
        //get all the last item
        const lastPost = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))[0];
        setLastPost(lastPost);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  console.log(lastPost);

  return (
    <section class='d-flex align-items-center px-0 last-post-section'>
      <div className='d-flex flex-column flex-lg-row gap-5 align-items-center container'>
        <div className='order-1 order-lg-0 text-white w-100 w-lg-50 text-center text-lg-start last-post-details'>
            <h1 className='fw-bold display-4'>{lastPost.name}</h1>
            <p><FontAwesomeIcon icon={faUser}/> {lastPost.author} | <FontAwesomeIcon icon={faClock}/> Data</p>
            <p className='post-description pb-3'>{lastPost.short_desc}</p>
            <Link to={`/blog/${lastPost.friendly_url}`} className='border border-2 border-white text-white rounded-2 bg-transparent py-2 px-3 fw-bolder read-more-button'>Citește mai mult <FontAwesomeIcon icon={faArrowRight}/></Link>
        </div>
        <div className='order-0 order-lg-1 w-100 w-lg-50 last-post-image'>
            <Image src={PostImage} className='rounded-4 w-100'/>
        </div>
        </div>
    </section>
  )
}

export default LastPost