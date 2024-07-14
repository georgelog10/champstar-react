import React, { useState } from "react";
import ProfilePicture from "../../assets/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg";

const ProfileSettings = ({ profile, handleProfileChange }) => {
  const [profileImage, setProfileImage] = useState(ProfilePicture);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = () => {
    setProfileImage(ProfilePicture);
  };

  return (
    <div>
      <div>
        <label>
          Imagine de profil
          <div className="d-flex">
            <img
              id="profileImage"
              src={ProfilePicture}
              alt="Profile"
              style={{ width: "150px", height: "150px", display: "block" }}
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
              id="fileInput"
            />
            <button
              onClick={() => document.getElementById("fileInput").click()}
            >
              Change Profile Image
            </button>
            <button onClick={handleDeleteImage}>Delete Profile Image</button>
          </div>
        </label>
      </div>
      <div>
        <label>
          Nume profil
          <input
            type="text"
            name="profile_name"
            value={profile.profile_name}
            onChange={handleProfileChange}
          />
        </label>
      </div>
      <div>
        <label>
          Adresă de email
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleProfileChange}
          />
        </label>
      </div>
      <div>
        <label>
          Despre mine
          <input
            type="textarea"
            name="about_me"
            value={profile.about_me}
            onChange={handleProfileChange}
          />
        </label>
      </div>
    </div>
  );
};

export default ProfileSettings;
