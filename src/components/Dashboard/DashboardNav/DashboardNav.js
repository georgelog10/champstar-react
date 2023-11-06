import React from 'react'
import './DashboardNav.css'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../../../assets/logo-removebg-preview.png'
import ProfilePicture from '../../../assets/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg'
import { TextField } from '@mui/material'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown, faArrowRightFromBracket, faGear, faUser } from '@fortawesome/free-solid-svg-icons'

const DashboardNav = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <section className='dashboard-navbar'>
        <div className='nav-column-1'>
            <Link to='/'><img src={Logo} alt='Logo' className='logo'/></Link>
            <div className='search'>
                <TextField id="outlined-basic" variant="outlined" fullWidth label="Căutare..."/>
            </div>
        </div>
        <div className='nav-column-2'>
            <Link className='profile'><img src={ProfilePicture} alt='Profile Picture' className='profile-image'/> User</Link>
            <Button id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}><FontAwesomeIcon icon={faSortDown} /></Button>
            <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{'aria-labelledby': 'basic-button',}}>
              <MenuItem onClick={handleClose} className='menu-item'><FontAwesomeIcon icon={faGear} className='menu-icon'/> Setări</MenuItem>
              <MenuItem onClick={handleClose} className='menu-item'><FontAwesomeIcon icon={faArrowRightFromBracket} className='menu-icon'/> Deconectare</MenuItem>
            </Menu>
        </div>
    </section>
  )
}

export default DashboardNav