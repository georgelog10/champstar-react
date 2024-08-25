import React from 'react'
import DashboardNav from '../components/Dashboard/DashboardNav/DashboardNav'
import DashboardFilter from '../components/Dashboard/DashboardFilter/DashboardFilter'
import DashboardCards from '../components/Dashboard/DashboardCards/DashboardCards'
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardSidebar from '../components/Dashboard/DashboardSidebar/DashboardSidebar';

const Dashboard = () => {
  const [value, setValue] = React.useState(0);

  return (
    <>
      {/* <DashboardNav /> */}
      <section id='dashboard'>
        <div className='container-lg d-flex gap-5'>
          <DashboardSidebar/>
          <div className='dashboard-content'>
            <DashboardCards/>
          </div>
        </div>
      </section>
      {/* <section id="mobile-app-bar">
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
    </section> */}
  </>
  )
}

export default Dashboard