import LocationOnIcon from '@mui/icons-material/LocationOn';
import SortIcon from '@mui/icons-material/Sort';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const districts = [
  'Ampara',
  'Anuradhapura',
  'Badulla',
  'Batticaloa',
  'Colombo',
  'Galle',
  'Gampaha',
  'Hambantota',
  'Jaffna',
  'Kaluthara',
  'Kandy',
  'Kegalle',
  'Kilinochchi',
  'Kurunegala',
  'Mannar',
  'Matale',
  'Matara',
  'Monaragala',
  'Mullaitivu',
  'Nuwara Eliya',
  'Polonnaruwa',
  'Puttalam',
  'Ratnapura',
  'Trincomalee',
  'Vavuniya',
];

const RentingSidebar = ({
  locationOption,
  selectedDistricts,
  setLocationOption,
  setSelectedDistricts,
  setSortingOption,
  sortingOption,
}) => {
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

  return (
    <div
      style={{
        borderRight: '1px solid #e0e0e0',
        boxSizing: 'border-box',
        padding: '1rem',
        width: '25%',
      }}
    >
      <p style={{ color: 'grey', fontSize: 15, marginBottom: '1.5rem' }}>
        <LocationOnIcon
          style={{
            color: 'green',
            fontSize: '1rem',
            marginRight: '5px',
            verticalAlign: 'middle',
          }}
        />
        Filter by Location :
      </p>
      <Box sx={{ marginRight: '15px', minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="location-option-label">Location Option</InputLabel>
          <Select
            id="location-option-select"
            label="Location Option"
            labelId="location-option-label"
            onChange={handleLocationOptionChange}
            value={locationOption}
          >
            <MenuItem value="islandwide">Islandwide</MenuItem>
            <MenuItem value="multiple-districts">Multiple Districts</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {locationOption === 'multiple-districts' && (
        <>
          <p style={{ color: 'grey', fontSize: 15, marginBottom: '0.5rem' }}>
            Districts:
          </p>
          <Box sx={{ marginRight: '15px', minWidth: 120 }}>
            <FormControl fullWidth>
              <Select
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((district) => (
                      <Chip key={district} label={district} />
                    ))}
                  </Box>
                )}
                id="district-select"
                labelId="district-select-label"
                multiple
                onChange={handleDistrictSelection}
                value={selectedDistricts}
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

      <p
        style={{
          color: 'grey',
          fontSize: 15,
          marginBottom: '1.5rem',
          marginTop: '2.5rem',
        }}
      >
        <SortIcon
          style={{
            color: 'green',
            fontSize: '1rem',
            marginRight: '5px',
            verticalAlign: 'middle',
          }}
        />
        Sort by :
      </p>
      <Box sx={{ marginRight: '15px', minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="sorting-option-label">Sorting Option</InputLabel>
          <Select
            onChange={(e, c) => {
              console.log(e);
              // setSortingOption(c.props.value);
              setSortingOption(e.target.value);
              console.log(sortingOption);
            }} //
            id="sorting-option-select"
            label="Sorting Option"
            labelId="sorting-option-label"
            value={sortingOption} // Use the selected sorting option state
          >
            <MenuItem value={'Date: Newest on Top'}>
              Date: Newest on Top
            </MenuItem>
            <MenuItem value={'Date: Oldest on Top'}>
              Date: Oldest on Top
            </MenuItem>
            <MenuItem value={'Price: High to Low'}>Price: High to Low</MenuItem>
            <MenuItem value={'Price: Low to High'}>Price: Low to High</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default RentingSidebar;
