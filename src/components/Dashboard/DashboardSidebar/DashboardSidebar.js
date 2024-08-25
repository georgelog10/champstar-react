import React from 'react'
import Logo from '../../../assets/logo-removebg-preview.png'

const DashboardSidebar = () => {
  return (
    <div id="dashboard-sidebar" className='w-25 p-4 shadow-lg rounded'>
        <div className='dashboard-logo'>
            <img src={Logo} alt='Logo' className='dashboard-logo' width={60}/>
        </div>
        <div className='dashboard-menu'>
            <p>Dashboard</p>
            <p>Concursuri</p>
            <p>Concursurile mele</p>
            <p>Notificari</p>
            <p>Chat</p>
            <p>Setari</p>
        </div>
        <div className='dashboard-profile'>
            <img src=''/>
            <p>User name</p>
            <p>Email</p>
        </div>
    </div>
  )
}

export default DashboardSidebar