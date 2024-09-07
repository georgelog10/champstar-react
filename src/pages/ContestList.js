import React from "react";
import DashboardSidebar from "../components/Dashboard/DashboardSidebar/DashboardSidebar";
import DashboardTopBar from "../components/Dashboard/DashboardTopBar/DashboardTopBar";
import DashboardCards from "../components/Dashboard/DashboardCards/DashboardCards";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
// import HomeIcon from '@mui/icons-material/Home';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from "../assets/icons/dashboard-square-edit-stroke-rounded.svg";
import ContestsIcon from "../assets/icons/task-01-stroke-rounded.svg";
import MyContestsIcon from "../assets/icons/bookmark-03-stroke-rounded.svg";
import NotificationsIcon from "../assets/icons/notification-02-stroke-rounded.svg";
import ChatIcon from "../assets/icons/bubble-chat-stroke-rounded.svg";
import SettingsIcon from "../assets/icons/settings-02-stroke-rounded.svg";

const Dashboard = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <section id="contests">
        <div className="container-lg d-flex gap-5 py-4">
          <DashboardSidebar />
          <div className="w-100 w-lg-75 dashboard-content">
            <DashboardTopBar />
            <DashboardCards />
          </div>
        </div>
      </section>
      <section id="mobile-app-bar">
        <Box sx={{ width: "100vw" }}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction icon={<img src={DashboardIcon} alt="dashboard" style={{ width: 24, height: 24 }} />} />
            <BottomNavigationAction icon={<img src={ContestsIcon} alt="contests" style={{ width: 24, height: 24 }} />} />
            <BottomNavigationAction icon={<img src={MyContestsIcon} alt="my-contests" style={{ width: 24, height: 24 }} />} />
            <BottomNavigationAction icon={<img src={NotificationsIcon} alt="notifications" style={{ width: 24, height: 24 }} />} />
            <BottomNavigationAction icon={<img src={ChatIcon} alt="chat" style={{ width: 24, height: 24 }} />} />
            <BottomNavigationAction icon={<img src={SettingsIcon} alt="settings" style={{ width: 24, height: 24 }} />} />
          </BottomNavigation>
        </Box>
      </section>
    </>
  );
};

export default Dashboard;
