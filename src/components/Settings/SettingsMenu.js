import React from 'react'

const SettingsMenu = () => {
  return (
    <div className="settings-page">
            <h1>Settings</h1>
            <nav>
                <ul>
                    <li onClick={() => setCurrentSection('Profile')}>Profile</li>
                    <li onClick={() => setCurrentSection('Account')}>Account</li>
                    <li onClick={() => setCurrentSection('Appearance')}>Appearance</li>
                    <li onClick={() => setCurrentSection('Notifications')}>Notifications</li>
                </ul>
            </nav>
            </div>
  )
}

export default SettingsMenu