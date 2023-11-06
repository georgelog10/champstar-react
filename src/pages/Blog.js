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
      <div className='posts-section'>
        <PostsFilters/>
        <PostCards/>
      </div>
      <Footer/>
    </>
  )
}

export default Blog