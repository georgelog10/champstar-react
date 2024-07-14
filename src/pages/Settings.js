import React, { useState } from "react";
import DashboardNav from "../components/Dashboard/DashboardNav/DashboardNav";
import ProfileSettings from "./settings/ProfileSettings";
import AccountSettings from "./settings/AccountSettings";
import AppeareanceSettings from "./settings/AppeareanceSettings";
import NotificationSettings from "./settings/NotificationSettings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faGear,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faBell, faUser } from "@fortawesome/free-regular-svg-icons";
import SettingsProfile from "../assets/icons/user-stroke-rounded.svg";

const UserIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="#000000"
    fill="none"
  >
    <path
      d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"
      stroke="currentColor"
      stroke-width="1.5"
    />
  </svg>
);

const Settings = () => {
  const [currentSection, setCurrentSection] = useState("Profile");

  const [profile, setProfile] = useState({
    username: "",
    email: "",
  });

  const [account, setAccount] = useState({
    password: "",
    confirmPassword: "",
  });

  const [appearance, setAppearance] = useState({
    theme: "light",
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
      case "Profile":
        return (
          <ProfileSettings
            profile={profile}
            handleProfileChange={handleProfileChange}
          />
        );
      case "Account":
        return (
          <AccountSettings
            account={account}
            handleAccountChange={handleAccountChange}
          />
        );
      case "Appearance":
        return (
          <AppeareanceSettings
            appearance={appearance}
            handleAppearanceChange={handleAppearanceChange}
          />
        );
      case "Notifications":
        return (
          <NotificationSettings
            notifications={notifications}
            handleNotificationChange={handleNotificationChange}
          />
        );
      default:
        return (
          <ProfileSettings
            profile={profile}
            handleProfileChange={handleProfileChange}
          />
        );
    }
  };

  return (
    <>
      <DashboardNav />
      <div className="pt-4 settings-page">
        <div className="container-lg d-flex gap-5">
          <nav className="shadow-lg w-25 rounded-4 p-4">
            <div className="d-flex justify-content-between align-items-center border-bottom pb-3">
              <h4 className="fw-bolder mb-0">Settings</h4>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <div className="d-flex flex-column gap-3 pt-3">
              <Link
                className={currentSection === "Profile" ? "active" : ""}
                onClick={() => setCurrentSection("Profile")}
              >
                {/* <FontAwesomeIcon icon={faUser} className="mr-2" /> */}
                <UserIcon />
                Profile
              </Link>
              <Link
                className={currentSection === "Account" ? "active" : ""}
                onClick={() => setCurrentSection("Account")}
              >
                <FontAwesomeIcon icon={faGear} />
                Account
              </Link>
              <Link
                className={currentSection === "Appearance" ? "active" : ""}
                onClick={() => setCurrentSection("Appearance")}
              >
                <FontAwesomeIcon icon={faPalette} />
                Appearance
              </Link>
              <Link
                className={currentSection === "Notifications" ? "active" : ""}
                onClick={() => setCurrentSection("Notifications")}
              >
                <FontAwesomeIcon icon={faBell} />
                Notifications
              </Link>
            </div>
          </nav>
          <form
            className="w-75"
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Profile:", profile);
              console.log("Account:", account);
              console.log("Appearance:", appearance);
              console.log("Notifications:", notifications);
            }}
          >
            {renderSection()}
          </form>
        </div>
      </div>
    </>
  );
};

export default Settings;
