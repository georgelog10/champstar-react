import React from 'react'
import './DashboardSidebar.css'
import Logo from '../../../assets/logo-removebg-preview.png'
import DashboardIcon from '../../../assets/icons/dashboard-square-edit-stroke-rounded.svg'
import ContestListIcon from '../../../assets/icons/task-01-stroke-rounded.svg'
import BookmarkIcon from '../../../assets/icons/bookmark-03-stroke-rounded.svg'
import NotificationsIcon from '../../../assets/icons/notification-02-stroke-rounded.svg'
import ChatIcon from '../../../assets/icons/bubble-chat-stroke-rounded.svg'
import SettingsIcon from '../../../assets/icons/settings-02-stroke-rounded.svg'
import ProfilePicture from '../../../assets/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg'
import { Link } from 'react-router-dom'

const DashboardSidebar = () => {
  return (
    <div id="dashboard-sidebar" className='w-25 p-4 rounded-4 shadow position-relative bg-white'>
        <div className='pb-4 px-3 border-bottom border-3'>
            <img src={Logo} alt='Logo' className='dashboard-logo' width={60}/>
        </div>
        <div className='pt-4 d-flex flex-column gap-2 dashboard-menu'>
            <Link className={`d-flex align-items-center gap-2 px-3 py-2`}>
                <img src={DashboardIcon} alt='Dashboard Icon'/>
                Dashboard
            </Link>
            <Link className={`d-flex align-items-center gap-2 px-3 py-2 active`}>
                <img src={ContestListIcon} alt='Dashboard Icon'/>
                Concursuri
            </Link>
            <Link className={`d-flex align-items-center gap-2 px-3 py-2`}>
                <img src={BookmarkIcon} alt='Dashboard Icon'/>
                Concursurile mele
            </Link>
            <Link className={`d-flex align-items-center gap-2 px-3 py-2`}>
                <img src={NotificationsIcon} alt='Dashboard Icon'/>
                Notificări
            </Link>
            <Link className={`d-flex align-items-center gap-2 px-3 py-2`}>
                <img src={ChatIcon} alt='Dashboard Icon'/>
                Chat
            </Link>
            <Link className={`d-flex align-items-center gap-2 px-3 py-2`}>
                <img src={SettingsIcon} alt='Dashboard Icon'/>
                Setări
            </Link>
        </div>
        <div className='position-absolute w-100 d-flex flex-column justify-content-center dashboard-profile'>
            <img src={ProfilePicture} alt='Profile Image' width={60}/>
            <h6>User name</h6>
            <p className='text-secondary mb-0'>Email</p>
        </div>
    </div>
  )
}

export default DashboardSidebar