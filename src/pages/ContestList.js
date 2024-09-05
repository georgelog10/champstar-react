import React from 'react'
import DashboardNav from '../components/Dashboard/DashboardNav/DashboardNav'
import DashboardFilter from '../components/Dashboard/DashboardFilter/DashboardFilter'
import DashboardCards from '../components/Dashboard/DashboardCards/DashboardCards'
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
// import HomeIcon from '@mui/icons-material/Home';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DashboardSidebar from '../components/Dashboard/DashboardSidebar/DashboardSidebar';
import DashboardTopBar from '../components/Dashboard/DashboardTopBar/DashboardTopBar';

const Dashboard = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <>
      <section id='contests'>
        <div className='container-lg d-flex gap-5 py-4'>
          <DashboardSidebar/>
          <div className='w-75 dashboard-content'>
            <DashboardTopBar/>
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
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
    </BottomNavigation>
  </>
  )
}

export default Dashboard