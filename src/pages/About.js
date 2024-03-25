import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/footer'
import TitleBar from '../components/About Us Page/Title Bar/TitleBar'
import AboutUsContent from '../components/About Us Page/Page Content/AboutUsContent'
import Newsletter from '../components/Homepage/Newsletter/newsletter'

const About = () => {
  return (
    <>
      <Navbar />
      <TitleBar />
      <AboutUsContent/>
      <Newsletter/>
      <Footer />
    </>
  )
}

export default About