import React, { useState } from 'react'
import './PostsFilters.css'
import { Box, InputLabel, MenuItem, FormControl, Select, FormGroup, FormControlLabel, Checkbox, Typography, TextField } from '@mui/material';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faFilter, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const PostsFilters = () => {
    const [sortBy, setSortBy] = React.useState('');
    const [isOpen, setIsOpen] = useState('');

    const handleChange = (event) => {
      setSortBy(event.target.value);
    };

    const toggleFilter = () => {
      setIsOpen(!isOpen);
    };
  
    const closeMenu = () => {
      setIsOpen(false);
    };

  return (
    <section id='posts-filters-section'>
        <div className='mobile-filters'>
          
        </div>
        <div className='search-bar'>
          <TextField id="outlined-basic" variant="outlined" fullWidth label="Căutare..."/>
        </div>
        <Button variant="primary" className="mobile-filter-button" onClick={toggleFilter}><FontAwesomeIcon icon={faFilter}/> Filtrează</Button>
        <div className='sort-by-filter'>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Ordonează</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortBy}
          label="Ordonează"
          onChange={handleChange}
        >
          <MenuItem value={10}>Cele mai noi</MenuItem>
          <MenuItem value={20}>Cele mai vechi</MenuItem>
        </Select>
      </FormControl>
    </Box>
        </div>
        <div className='blog-category-filter'>
            <Typography variant='h5'>Categorie</Typography>
            <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Label" />
                <FormControlLabel control={<Checkbox />} label="Label" />
                <FormControlLabel control={<Checkbox />} label="Label" />
                <FormControlLabel control={<Checkbox />} label="Label" />
                <FormControlLabel control={<Checkbox />} label="Label" />
            </FormGroup>
        </div>

        <div className={`mobile-filters ${isOpen ? 'open' : ''}`}>
            <button className="close-button" onClick={closeMenu}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <div className='sort-by-filter'>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Ordonează</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortBy}
          label="Ordonează"
          onChange={handleChange}
        >
          <MenuItem value={10}>Cele mai noi</MenuItem>
          <MenuItem value={20}>Cele mai vechi</MenuItem>
        </Select>
      </FormControl>
    </Box>
        </div>
        <div className='blog-category-filter'>
            <Typography variant='h5'>Categorie</Typography>
            <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Label" />
                <FormControlLabel control={<Checkbox />} label="Label" />
                <FormControlLabel control={<Checkbox />} label="Label" />
                <FormControlLabel control={<Checkbox />} label="Label" />
                <FormControlLabel control={<Checkbox />} label="Label" />
            </FormGroup>
        </div>
        </div>
    </section>
  )
}

export default PostsFilters