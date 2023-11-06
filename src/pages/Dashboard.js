import React from 'react'
import DashboardNav from '../components/Dashboard/DashboardNav/DashboardNav'
import DashboardFilter from '../components/Dashboard/DashboardFilter/DashboardFilter'
import DashboardCards from '../components/Dashboard/DashboardCards/DashboardCards'
import Footer from '../components/Footer/footer'

const Dashboard = () => {
  return (
    <>
      <DashboardNav />
      <section id='dashboard'>
        <DashboardFilter />
        <DashboardCards />
      </section>
      <Footer />
    </>
  )
}

export default Dashboard