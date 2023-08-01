import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SortIcon from '@mui/icons-material/Sort';

const Sidebar = ({ handleSortingOptionChange, locationOption, setLocationOption, selectedDistricts, setSelectedDistricts }) => {

  const [sortingOption, setSortingOption] = useState('');

  const handleLocationOptionChange = (event) => {
    setLocationOption(event.target.value);
    setSelectedDistricts([]); // Reset selected districts when changing location option
  };

  const handleDistrictSelection = (event) => {
    setSelectedDistricts(event.target.value);
  };

  const handleSortingOptionChangeLocal = (event) => {
    const sortingValue = event.target.value;
    setSortingOption(sortingValue);
    handleSortingOptionChange(sortingValue); // Pass the selected value to the parent component
  };
  

  const districts = [
    "Ampara",
    "Anuradhapura",
    "Badulla",
    "Batticaloa",
    "Colombo",
    "Galle",
    "Gampaha",
    "Hambantota",
    "Jaffna",
    "Kalutara",
    "Kandy",
    "Kegalle",
    "Kilinochchi",
    "Kurunegala",
    "Mannar",
    "Matale",
    "Matara",
    "Monaragala",
    "Mullaitivu",
    "Nuwara Eliya",
    "Polonnaruwa",
    "Puttalam",
    "Ratnapura",
    "Trincomalee",
    "Vavuniya",
  ];

  return (
    <div
      style={{
        width: '25%',
        padding: '1rem',
        borderRight: '1px solid #e0e0e0',
        boxSizing: 'border-box',
      }}
    >
      <p style={{ marginBottom: '1.5rem', fontSize: 15, color: 'grey' }}>
        <LocationOnIcon style={{ marginRight: '5px', color: 'green', fontSize: '1rem', verticalAlign: 'middle' }} />
        Filter by Location :
      </p>
      <Box sx={{ minWidth: 120, marginRight: '15px' }}>
        <FormControl fullWidth>
          <InputLabel id="location-option-label">Location Option</InputLabel>
          <Select
            labelId="location-option-label"
            id="location-option-select"
            value={locationOption}
            label="Location Option"
            onChange={handleLocationOptionChange}
          >
            <MenuItem value="islandwide">Islandwide</MenuItem>
            <MenuItem value="multiple-districts">Multiple Districts</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {locationOption === 'multiple-districts' && (
        <>
          <p style={{ marginBottom: '0.5rem', fontSize: 15, color: 'grey' }}>Districts:</p>
          <Box sx={{ minWidth: 120, marginRight: '15px' }}>
            <FormControl fullWidth>
              <Select
                labelId="district-select-label"
                id="district-select"
                multiple
                value={selectedDistricts}
                onChange={handleDistrictSelection}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((district) => (
                      <Chip key={district} label={district} />
                    ))}
                  </Box>
                )}
              >
                {districts.map((district) => (
                  <MenuItem key={district} value={district}>
                    {district}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </>
      )}
  
      <p style={{ marginBottom: '1.5rem', marginTop: '2.5rem', fontSize: 15, color: 'grey' }}>
        <SortIcon style={{ marginRight: '5px', color: 'green', fontSize: '1rem', verticalAlign: 'middle' }} />
        Sort by :
      </p>
      <Box sx={{ minWidth: 120, marginRight: '15px' }}>
        <FormControl fullWidth>
          <InputLabel id="sorting-option-label">Sorting Option</InputLabel>
          <Select
            labelId="sorting-option-label"
            id="sorting-option-select"
            value={sortingOption} // Use the selected sorting option state
            label="Sorting Option"
            onChange={handleSortingOptionChangeLocal} // 
          >
            <MenuItem value={10}>Price: Low to High</MenuItem>
            <MenuItem value={20}>Price: High to Low</MenuItem>
            <MenuItem value={30}>Date: Newest on Top</MenuItem>
            <MenuItem value={40}>Date: Oldest on Top</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default Sidebar;
