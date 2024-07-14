import React, { useState } from 'react'
import DashboardNav from '../components/Dashboard/DashboardNav/DashboardNav'
import ProfileSettings from './settings/ProfileSettings'
import AccountSettings from './settings/AccountSettings'
import AppeareanceSettings from './settings/AppeareanceSettings'
import NotificationSettings from './settings/NotificationSettings'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import SettingsProfile from '../assets/icons/user-stroke-rounded.svg'
import SettingsAccount from '../assets/icons/settings-02-stroke-rounded.svg'
import SettingsAppeareance from '../assets/icons/paint-board-stroke-rounded.svg'
import SettingsNotifications from '../assets/icons/notification-02-stroke-rounded.svg'

const Settings = () => {
    const [currentSection, setCurrentSection] = useState('Profile');

    const [profile, setProfile] = useState({
        username: '',
        email: '',
    });

    const [account, setAccount] = useState({
        password: '',
        confirmPassword: '',
    });

    const [appearance, setAppearance] = useState({
        theme: 'light',
    });

    const [notifications, setNotifications] = useState({
        emailNotifications: true,
    });

    const handleProfileChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value,
        }));
    };

    const handleAccountChange = (e) => {
        const { name, value } = e.target;
        setAccount((prevAccount) => ({
            ...prevAccount,
            [name]: value,
        }));
    };

    const handleAppearanceChange = (e) => {
        const { name, value } = e.target;
        setAppearance((prevAppearance) => ({
            ...prevAppearance,
            [name]: value,
        }));
    };

    const handleNotificationChange = (e) => {
        const { name, checked } = e.target;
        setNotifications((prevNotifications) => ({
            ...prevNotifications,
            [name]: checked,
        }));
    };

    const renderSection = () => {
        switch (currentSection) {
            case 'Profile':
                return <ProfileSettings profile={profile} handleProfileChange={handleProfileChange} />;
            case 'Account':
                return <AccountSettings account={account} handleAccountChange={handleAccountChange} />;
            case 'Appearance':
                return <AppeareanceSettings appearance={appearance} handleAppearanceChange={handleAppearanceChange} />;
            case 'Notifications':
                return <NotificationSettings notifications={notifications} handleNotificationChange={handleNotificationChange} />;
            default:
                return <ProfileSettings profile={profile} handleProfileChange={handleProfileChange} />;
        }
    };

  return (
    <>
      <DashboardNav />
      <div className="pt-4 settings-page">
        <div className='container-lg d-flex gap-5'>
            <nav className='shadow-lg w-25 rounded-4 p-4'>
                <div className='d-flex justify-content-between align-items-center border-bottom pb-3'>
                    <h4 className='fw-bolder mb-0'>Setări</h4>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
                <div className='d-flex flex-column gap-3 pt-3'>
                <Link className={`d-flex align-items-center gap-1 ${currentSection === 'Profile' ? 'active' : ''}`} onClick={() => setCurrentSection('Profile')}>
                    <img src={SettingsProfile} alt='Profile Icon'/>
                    Profil
                </Link>
                <Link className={`d-flex align-items-center gap-1 ${currentSection === 'Account' ? 'active' : ''}`} onClick={() => setCurrentSection('Account')}>
                    <img src={SettingsAccount} alt='Profile Icon'/>
                    Cont
                </Link>
                <Link className={`d-flex align-items-center gap-1 ${currentSection === 'Appearance' ? 'active' : ''}`} onClick={() => setCurrentSection('Appearance')}>
                    <img src={SettingsAppeareance} alt='Profile Icon'/>
                    Aspect
                </Link>
                <Link className={`d-flex align-items-center gap-1 ${currentSection === 'Notifications' ? 'active' : ''}`} onClick={() => setCurrentSection('Notifications')}>
                    <img src={SettingsNotifications} alt='Profile Icon'/>
                    Notificări
                </Link>
                </div>
            </nav>
            <form className="w-75" onSubmit={(e) => {
                e.preventDefault();
                console.log('Profile:', profile);
                console.log('Account:', account);
                console.log('Appearance:', appearance);
                console.log('Notifications:', notifications);
            }}>
                {renderSection()}
            </form>
        </div>
        </div>
    </>
  )
}

export default Settings