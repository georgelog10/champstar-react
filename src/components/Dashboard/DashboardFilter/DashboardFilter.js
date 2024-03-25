import React, {useState} from 'react'
import './DashboardFilter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import { Typography, Checkbox, FormControlLabel, FormGroup, Select, FormControl, MenuItem, InputLabel, Box } from '@mui/material';


const DashboardFilter = () => {
  const [sortBy, setSortBy] = useState('');
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
    <section id='filters-section'>
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
        <div className='county-filter'>
            <Typography variant='h5'>Județ</Typography>
            <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Label" />
                <FormControlLabel control={<Checkbox />} label="Label" />
                <FormControlLabel control={<Checkbox />} label="Label" />
                <FormControlLabel control={<Checkbox />} label="Label" />
                <FormControlLabel control={<Checkbox />} label="Label" />
            </FormGroup>
        </div>
        <div className='domain-filter'>
            <Typography variant='h5'>Domeniu</Typography>
            <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Label" />
                <FormControlLabel control={<Checkbox />} label="Label" />
                <FormControlLabel control={<Checkbox />} label="Label" />
                <FormControlLabel control={<Checkbox />} label="Label" />
                <FormControlLabel control={<Checkbox />} label="Label" />
            </FormGroup>
        </div>
        <div className='participants-number-filter'>
            <Typography variant='h5'>Număr de participanți</Typography>
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
            <div className='mobile-sort-by-filter'>
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
        <div className='mobile-county-filter'>
            <Typography variant='h5'>Județ</Typography>
            <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Label" />
                <FormControlLabel control={<Checkbox />} label="Label" />
                <FormControlLabel control={<Checkbox />} label="Label" />
                <FormControlLabel control={<Checkbox />} label="Label" />
                <FormControlLabel control={<Checkbox />} label="Label" />
            </FormGroup>
        </div>
        <div className='mobile-domain-filter'>
            <Typography variant='h5'>Domeniu</Typography>
            <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Label" />
                <FormControlLabel control={<Checkbox />} label="Label" />
                <FormControlLabel control={<Checkbox />} label="Label" />
                <FormControlLabel control={<Checkbox />} label="Label" />
                <FormControlLabel control={<Checkbox />} label="Label" />
            </FormGroup>
        </div>
        <div className='mobile-participants-number-filter'>
            <Typography variant='h5'>Număr de participanți</Typography>
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

export default DashboardFilter