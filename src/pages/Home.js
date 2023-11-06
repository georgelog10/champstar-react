import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Homepage/Hero/Hero'
import Footer from '../components/Footer/footer'
import Steps from '../components/Homepage/Steps Section/steps'
import Contests from '../components/Homepage/Contests/contests'
import AboutUs from '../components/Homepage/About us/aboutus'
import Newsletter from '../components/Homepage/Newsletter/newsletter'
import AppSection from '../components/Homepage/AppSection/AppSection'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Steps />
      <Contests />
      <AboutUs />
      <AppSection/>
      <Newsletter />
      <Footer />
    </>
  )
}

export default Home;