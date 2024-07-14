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

  return (
    <div>
      <div>
        <label>
          Imagine de profil:
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
          <button onClick={() => document.getElementById("fileInput").click()}>
            Change Profile Image
          </button>
        </label>
      </div>
    </div>
  );
};

export default ProfileSettings;
