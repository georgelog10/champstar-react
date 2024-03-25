import React from 'react'
import DashboardNav from '../components/Dashboard/DashboardNav/DashboardNav'
import DashboardFilter from '../components/Dashboard/DashboardFilter/DashboardFilter'
import DashboardCards from '../components/Dashboard/DashboardCards/DashboardCards'
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Dashboard = () => {
  const [value, setValue] = React.useState(0);

  return (
    <>
      <DashboardNav />
      <section id='dashboard'>
        <DashboardFilter />
        <DashboardCards />
      </section>
      <section id="mobile-app-bar">
      <Box sx={{ width: '100vw' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction icon={<HomeIcon />} />
        <BottomNavigationAction icon={<AccountCircleIcon />} />
      </BottomNavigation>
    </Box>
    </section>
    </>
  )
}

export default Dashboard