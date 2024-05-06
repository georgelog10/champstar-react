import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/footer'
import LastPost from '../components/Blog/Posts Page/Last Post/LastPost'
import PostsFilters from '../components/Blog/Posts Page/Posts Filters/PostsFilters'
import PostCards from '../components/Blog/PostCards/PostCards'

const Blog = () => {
  return (
    <>
      <Navbar/>
      <LastPost/>
      <div className='d-flex py-4 posts-section'>
        <div className='d-flex gap-5 flex-column flex-lg-row container'>
        <PostsFilters/>
        <PostCards/>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Blog