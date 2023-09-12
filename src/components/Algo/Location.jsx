import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Stack,
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
        <Grid
          style={{
            backgroundImage: 'url("/AlgoBG.jpg")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            objectFit: 'cover',
            display: 'flex',
            justifyContent: 'center',
            width: '60%',
            marginTop: '3%',
            borderRadius: '20px',
            minHeight: '600px',
          }}
        >
          <Stack gap={2} alignItems="center" width="90%">
            <Box
              alignItems="center"
              p={2}
              textAlign="center"
              top="5%"
              width="80%"
            >
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
            <Divider />
            <Box
              alignItems="center"
              bgcolor="#f2f0f0"
              maxWidth="400px"
              p={2}
              textAlign="center"
              width="80%"
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
          </Stack>
        </Grid>
      }
    </>
  );
}

export default Location;
