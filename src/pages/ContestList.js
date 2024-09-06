import React from "react";
import DashboardSidebar from "../components/Dashboard/DashboardSidebar/DashboardSidebar";
import DashboardTopBar from "../components/Dashboard/DashboardTopBar/DashboardTopBar";
import DashboardCards from "../components/Dashboard/DashboardCards/DashboardCards";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
// import HomeIcon from '@mui/icons-material/Home';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from "../assets/icons/dashboard-square-edit-stroke-rounded.svg";

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
          <div className="w-75 dashboard-content">
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
            <BottomNavigationAction icon={<DashboardIcon />} />
          </BottomNavigation>
        </Box>
      </section>
    </>
  );
};

export default Dashboard;
