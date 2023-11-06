import React from 'react'
import './DashboardFilter.css'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material';


const DashboardFilter = () => {
  const [sortBy, setSortBy] = React.useState('');

  const handleChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <section id='filters-section'>
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
    </section>
  )
}

export default DashboardFilter