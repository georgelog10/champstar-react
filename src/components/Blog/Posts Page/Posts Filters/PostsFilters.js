import React, { useState, useEffect } from 'react'
import './PostsFilters.css'
import { db } from '../../../../config/fire'
import { getDocs, collection } from 'firebase/firestore';
import { Box, InputLabel, MenuItem, FormControl, Select, FormGroup, FormControlLabel, Checkbox, Typography, TextField } from '@mui/material';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faFilter, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const PostsFilters = () => {
  //get all the blog categories for filter from firestore
    const [categories, setCategories] = useState([]);
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

    useEffect(() => {
      const fetchData = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, 'blogs'));
          let cats = [];
          querySnapshot.forEach((doc) => {
            if (!cats.includes(doc.data().category)) {
              cats.push(doc.data().category);
            }
          });
          setCategories(cats.sort());
          } catch (e) {
            console.log("Error!", e);
          }
      };
      fetchData();
    }, []);

    console.log(categories);

  return (
    <section class='col-lg-3 posts-filters-section'>
        <div className='pb-3 search-bar'>
          <TextField id="outlined-basic" variant="outlined" fullWidth label="Căutare..."/>
        </div>
        <Button variant="primary" className="p-2 mobile-filter-button" onClick={toggleFilter}><FontAwesomeIcon icon={faFilter}/> Filtrează</Button>
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
        <div className='p-3 rounded-2 shadow blog-category-filter'>
            <Typography variant='h5' className='fw-bolder mb-2'>Categorie</Typography>
            {/* fetch the categories in these checkboxes */}
            {/* {categories && categories.map((cat, i)=>(
                <Checkbox key={i} label={cat}/>
            ))} */}
            <FormGroup>
              {categories && categories.map((cat, i)=>(
                <FormControlLabel control={<Checkbox />} label={cat} />
              ))}
            </FormGroup>
        </div>

        <div className={`position-fixed bg-white h-100 z-1 d-flex flex-column mobile-filters ${isOpen ? 'open' : ''}`}>
            <button className="mb-3 d-flex justify-content-end border-0 close-button" onClick={closeMenu}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <div className='d-block sort-by-filter'>
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
        <div className='d-block blog-category-filter'>
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