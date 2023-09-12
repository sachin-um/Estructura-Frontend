import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Radio,
  RadioGroup,
} from '@mui/material';
import React, { useState } from 'react';

// import { Link } from "react-router-dom" ;
import TopAppBar from '../TopAppBar';

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
  'Kalutara',
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

function Location({
  formData,
  handlePageChange,
  nextPage,
  previousPage,
  updateFormData,
}) {
  const [userSelection, setUserSelection] = useState('');

  const handleNext = () => {
    handlePageChange('CurrentStatus');
    nextPage();
  };
  const handleChange = (event) => {
    setUserSelection(event.target.value);
  };
  return (
    <>
      {
        <Box
          height="600px"
          position="relative"
          style={{ display: 'flex', justifyContent: 'center' }}
          width="60%"
        >
          <img
            style={{
              borderRadius: '20px',
              height: '100%',
              margin: '20px',
              objectFit: 'cover',
              opacity: '0.9',
              width: '100%',
            }}
            alt="Banner"
            src="/AlgoBG.jpg"
          />
          <Box
            alignItems="center"
            maxWidth="400px"
            p={2}
            position="absolute"
            textAlign="center"
            top="5%"
            width="80%"
            zIndex="1"
          >
            <Box>
              <Typography
                style={{
                  color: '#435834',
                  fontFamily: 'Helvetica Neue',
                  fontWeight: 'bold',
                  marginBottom: '20px',
                  marginTop: '20px',
                  textAlign: 'center',
                }}
                gutterBottom
                variant="h5"
              >
                Where your needs meet our curated Service Provider Network
              </Typography>

              <Divider style={{ backgroundColor: '#AF7D51', height: '1px' }} />

              <Typography
                fontSize="1.2rem"
                fontWeight="500px"
                marginBottom="5px"
                marginTop="5px"
              >
                Where do you want your professionals to be?
              </Typography>
            </Box>
          </Box>
          <Divider />
          <Box
            alignItems="center"
            bgcolor="#f2f0f0"
            maxWidth="400px"
            p={2}
            position="absolute"
            textAlign="center"
            top="40%"
            width="80%"
            zIndex="1"
            borderRadius="10px"
          >
            <FormControl
              sx={{
                m: 1,
                marginLeft: 'auto',
                minWidth: 120,
                width: '100%',
              }}
              variant="standard"
            >
              <InputLabel color="secondary" id="selectDistrict">
                Select District
              </InputLabel>
              <Select displayEmpty labelId="selectDistrict-label">
                {districts.map((district) => (
                  <MenuItem key={district} value={district}>
                    {district}
                  </MenuItem>
                ))}
              </Select>
              {/* <ErrorMessage name="district">
                {(msg) => (
                  <span
                    style={{
                      color: '#d32f2f',
                      fontSize: '0.75rem',
                      marginLeft: '14px',
                    }}
                  >
                    {msg}
                  </span>
                )}
              </ErrorMessage> */}
            </FormControl>
          </Box>
          <Grid
            style={{
              width: '30%',
            }}
            display="flex"
            justifyContent="center"
            position="absolute"
            top="90%"
            zIndex="1"
          >
            <Button
              color="primary"
              size="large"
              sx={{ borderRadius: 2, margin: 3, width: 1 / 2 }}
              type="button"
              variant="contained"
              onClick={previousPage}
            >
              Previous
            </Button>
            <Button
              color="primary"
              size="large"
              sx={{ borderRadius: 2, margin: 3, width: 1 / 2 }}
              type="submit"
              variant="contained"
              onClick={handleNext}
            >
              Next
            </Button>
          </Grid>
        </Box>
      }
    </>
  );
}

export default Location;
