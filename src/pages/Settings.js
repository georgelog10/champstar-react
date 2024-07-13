import React, { useState } from 'react'
import DashboardNav from '../components/Dashboard/DashboardNav/DashboardNav'
import ProfileSettings from './settings/ProfileSettings';
import AccountSettings from './settings/AccountSettings';
import AppeareanceSettings from './settings/AppeareanceSettings';
import NotificationSettings from './settings/NotificationSettings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

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
      <div className="settings-page">
        <div className='container-lg d-flex gap-5'>
            <nav className='shadow-lg w-25 rounded'>
                <div className='d-flex justify-content-between align-items-center'>
                    <h4 className='fw-bolder'>Settings</h4>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
                <Link onClick={() => setCurrentSection('Profile')}>Profile</Link>
                <Link onClick={() => setCurrentSection('Account')}>Account</Link>
                <Link onClick={() => setCurrentSection('Appearance')}>Appearance</Link>
                <Link onClick={() => setCurrentSection('Notifications')}>Notifications</Link>
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