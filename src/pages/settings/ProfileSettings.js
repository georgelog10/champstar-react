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
          <div className="d-flex align-items-center gap-4">
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
      <div className="mb-3">
        <label for="profile_name" className="form-label">Nume profil</label>
        <input
            type="text"
            name="profile_name"
            id="profile_name"
            className="form-control border border-2 border-dark-subtle p-2 rounded-2"
            value={profile.profile_name}
            onChange={handleProfileChange}
          />
      </div>
      <div className="mb-3">
        <label for="email" className="form-label">Adresă de email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control border border-2 border-dark-subtle p-2 rounded-2"
            value={profile.email}
            onChange={handleProfileChange}
          />
      </div>
      <div>
        <label for="birthdate" className="form-label">Data nașterii</label>
          <input
            type="date"
            name="birthdate"
            id="birthdate"
            className="form-control border border-2 border-dark-subtle p-2 rounded-2"
            value={profile.birthdate}
            onChange={handleProfileChange}
          />
      </div>
      <div>
        <label>
          Gen
          <select>
            <option value="male">Barbat</option>
            <option value="female">Femeie</option>
          </select>
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
