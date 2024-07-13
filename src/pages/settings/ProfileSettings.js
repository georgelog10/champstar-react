import React from 'react'

const ProfileSettings = () => {
  return (
    <div>
            <h2>Profile</h2>
            <div>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={profile.username}
                        onChange={handleProfileChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={profile.email}
                        onChange={handleProfileChange}
                    />
                </label>
            </div>
        </div>
  )
}

export default ProfileSettings