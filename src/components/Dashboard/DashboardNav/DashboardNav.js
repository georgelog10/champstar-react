import React, { useState, useEffect } from 'react'
import './DashboardNav.css'
import SearchIcon from '@mui/icons-material/Search'
import Logo from '../../../assets/logo-removebg-preview.png'
import ProfilePicture from '../../../assets/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg'
import firebase from 'firebase/app';
import { auth } from '../../../config/fire';
import { styled, alpha } from '@mui/material/styles';
import { TextField, Button, Menu, MenuItem, InputBase, Modal, Box, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faGear, faUser, faAngleDown } from '@fortawesome/free-solid-svg-icons'

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const DashboardNav = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [user, setUser] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };
  
  const handleModalClose = () => {
    setModalOpen(false);
  };

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

  const MobileSearch = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const MobileSearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const MobileStyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if (authUser) {
            setUser(authUser);
        } else {
            setUser(null);
            // navigate("/login")
        }
    });
    return () => {
        unsubscribe();
    };
}, []);

  return (
    <section className='d-flex justify-content-between px-4 py-3 dashboard-navbar'>
      <div className='container-lg d-flex align-items-center'>
        <div className='d-flex align-items-center gap-4 w-50 nav-column-1'>
            <Link to='/'><img src={Logo} alt='Logo' className='logo' width={60}/></Link>
            <Search className='m-0 text-white search-bar'>
              <SearchIconWrapper>
              <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Căutare..." inputProps={{ 'aria-label': 'search' }} />
            </Search>
        </div>
        <div className='d-flex justify-content-end align-items-center gap-2 text-white w-50 nav-column-2'>
            <Link className='text-white profile'><img src={ProfilePicture} alt='Profile Picture' className='rounded-circle mr-4 profile-image' width={30}/> User</Link>
            <Button id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}><FontAwesomeIcon icon={faAngleDown} /></Button>
            <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{'aria-labelledby': 'basic-button',}}>
              <MenuItem onClick={handleModalOpen} className='menu-item'><FontAwesomeIcon icon={faGear} className='menu-icon'/> Setări</MenuItem>
              <MenuItem onClick={handleClose} className='menu-item'><FontAwesomeIcon icon={faArrowRightFromBracket} className='menu-icon'/> Deconectare</MenuItem>
            </Menu>
            <MobileSearch className='mobile-search'>
            <MobileSearchIconWrapper>
              <SearchIcon />
            </MobileSearchIconWrapper>
            <MobileStyledInputBase placeholder="Căutare…" inputProps={{ 'aria-label': 'search' }} />
          </MobileSearch>
        </div>
        </div>

        <Modal
          open={modalOpen}
          onClose={handleModalClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box sx={modalStyle}>
            <Typography id="modal-title" variant="h6" component="h2">
              Settings
            </Typography>
            <Typography id="modal-description" sx={{ mt: 2 }}>
              {/* Add your modal content here */}
              Here are the settings you can configure.
            </Typography>
            <Button onClick={handleModalClose}>Close</Button>
          </Box>
        </Modal>
    </section>
  )
}

export default DashboardNav