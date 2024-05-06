import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/footer'
import { db } from '../config/fire'
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useParams } from "react-router-dom";
import { Typography, Avatar } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUser } from '@fortawesome/free-regular-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, LinkedinShareButton, PinterestShareButton } from 'react-share';
import { FacebookIcon, TwitterIcon, WhatsappIcon, LinkedinIcon, PinterestIcon } from 'react-share';
import { Row, Card, Col, CardTitle, CardText, Button } from 'react-bootstrap'

const BlogPost = () => {
  const params = useParams()
  const [post, setPost] = useState({})
  const postSlug = params.slug;

  useEffect(()=>{
    const postsRef = collection(db, "blogs");
    const q = query(postsRef, where("friendly_url", "==", postSlug)
    );
    
    (async () => {
        const response = await getDocs(q)
        if(!response.empty){
            setPost(response.docs[0].data())
        }else{
          alert('No Post Found')
        }
    })();
  },[])

  return (
    <>
        <Navbar />
        <section className='d-flex flex-column-reverse post-hero'>
          <div className='container'>
            <div className='py-0 text-white mb-5 hero-details'>
                <Typography variant='p'><FontAwesomeIcon icon={faClock}/> July 12, 2023</Typography>
                <Typography variant='h2' className='fw-bolder post-title'>{post.name}</Typography>
                <Typography variant='p'>{post.short_desc}</Typography>
            </div>
            </div>
        </section>
        <section className='py-5 post-sections'>
          <div className='d-flex flex-column flex-lg-row gap-5 container'>
            <div className='d-flex flex-column gap-2 rounded-3 p-3 shadow h-50 share-section'>
              <Typography variant='p' className='text-uppercase fw-bolder share-text'>Distribuie</Typography>
              <div className='d-flex flex-column gap-3 share-buttons'>
              <FacebookShareButton url={window.location.href}>
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <TwitterShareButton url={window.location.href}>
                <TwitterIcon size={32} round />
              </TwitterShareButton>
              <WhatsappShareButton url={window.location.href}>
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
              <LinkedinShareButton url={window.location.href}>
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>
              <PinterestShareButton url={window.location.href}>
                <PinterestIcon size={32} round />
              </PinterestShareButton>
              </div>
            </div>
            <div className='post-article'>
              <Typography variant='p'>{post.content}</Typography>
            </div>
            <div className='d-flex flex-column align-items-center shadow py-3 px-5 rounded-3 h-50 post-author'>
              <Avatar sx={{ width: 70, height: 70, marginBottom: '10px' }}>H</Avatar>
              <Typography variant='h4' sx={{ fontFamily: 'Onest', fontWeight: 500 }}>{post.author}</Typography>
              <Typography variant='p'>{post.author_function}</Typography>
            </div>
            </div>
        </section>
        <section className='d-flex align-items-center py-5 blog-newsletter'>
          <div className='d-flex flex-column flex-lg-row justify-content-between gap-5 gap-lg-0 align-items-center container'>
            <div className='col-6 text-white newsletter-text'>
              <Typography variant='h4' sx={{fontFamily: 'Onest', fontWeight: 600}}>Abonează-te la newsletter!</Typography>
              <Typography variant='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
            </div>
            <div className='col-5 newsletter-form'>
            <form action='' className='d-flex flex-column gap-3'>
                    <input type='email' name='email' className='border-0 bg-white rounded-3 py-2 px-3 email' placeholder='Email' required/>
                    <input type='submit' className='border-0 py-2 px-3 rounded-3 text-white fw-bolder newsletter-submit' value='Abonează-te'/>
                </form>
            </div>
            </div>
        </section>
        <section className='py-5 related-articles'>
          <div className='container'>
            <Typography variant='h4' sx={{fontFamily: 'Onest', fontWeight: 600, marginBottom: '30px'}}>Articole înrudite</Typography>
            <Row xs={1} md={3} className="g-4 cards-row">
            {Array.from({ length: 3 }).map((_, idx) => (
                <Col key={idx}>
            <Card className='position-relative border-0 shadow '>
                <Card.Body className='position-absolute w-100 p-4'>
                    <div className='d-flex justify-content-between post-card-meta'>
                      <CardText className='text-uppercase mb-2 post-card-category'>Categorie</CardText>
                      <CardText className='text-uppercase mb-2 post-card-author'><FontAwesomeIcon icon={faUser}/> Autor</CardText>
                    </div>
                    <CardTitle className='post-card-title'>Title</CardTitle>
                    <Button variant="primary" className='sign-up-button'>Citește articolul <FontAwesomeIcon icon={faArrowRight}/></Button>
                </Card.Body>
            </Card>
            </Col>
            ))}
        </Row>
        </div>
        </section>
        <Footer />
    </>
  )
}

export default BlogPost