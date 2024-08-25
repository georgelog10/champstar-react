import React from 'react'
import Logo from '../../../assets/logo-removebg-preview.png'
import DashboardIcon from '../../../assets/icons/dashboard-square-edit-stroke-rounded.svg'
import { Link } from 'react-router-dom'

const DashboardSidebar = () => {
  return (
    <div id="dashboard-sidebar" className='w-25 p-4 shadow-lg rounded-4'>
        <div className='pb-4 border-bottom border-3'>
            <img src={Logo} alt='Logo' className='dashboard-logo' width={60}/>
        </div>
        <div className='pt-4 dashboard-menu'>
            <Link className={`d-flex align-items-center gap-1`}>
                <img src={DashboardIcon} alt='Dashboard Icon'/>
                Dashboard
            </Link>
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