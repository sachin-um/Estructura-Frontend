import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  Stack,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

// import { Link } from "react-router-dom" ;
import TopAppBar from '../TopAppBar';

function GetStarted({
  formData,
  nextPage,
  previousPage,
  handlePageChange,
  updateFormData,
}) {
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('');
  const [userSelection, setUserSelection] = useState('');

  const handleNext = (event) => {
    event.preventDefault();
    if (userSelection !== '') {
      handlePageChange(userSelection);
      nextPage();
    } else {
      setHelperText('Please select an option.');
      setError(true);
    }
  };
  const handleChange = (event) => {
    setUserSelection(event.target.value);
  };
  const customHelperTextStyles = {
    color: 'red',
    fontSize: '14px',
    textAlign: 'center',
  };
  return (
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
      <form onSubmit={handleNext}>
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
              Tell us what is on your mind
            </Typography>
          </Box>
          <Divider />
          <Box
            alignItems="center"
            bgcolor="#f2f2f2"
            maxWidth="400px"
            p={2}
            textAlign="center"
            width="80%"
            borderRadius="10px"
          >
            <Box>
              <FormControl error={error} variant="standard">
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  style={{ margin: '10px' }}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    control={<Radio />}
                    label="Construction"
                    value="Construction"
                  />
                  <Divider />
                  <FormControlLabel
                    control={<Radio />}
                    label="Design Plans"
                    value="Design Plans"
                  />
                  <Divider />
                  <FormControlLabel
                    control={<Radio />}
                    label="Landscaping"
                    value="Landscaping"
                  />
                  <Divider />
                  <FormControlLabel
                    control={<Radio />}
                    label="Remodelling"
                    value="Remodelling"
                  />
                  <Divider />
                  <FormControlLabel
                    control={<Radio />}
                    label="Painting"
                    value="Painting"
                  />
                  <Divider />
                  <FormControlLabel
                    control={<Radio />}
                    label="Interior Designing"
                    value="Interior Designing"
                  />
                  <Divider />
                  <FormControlLabel
                    control={<Radio />}
                    label="Woodwork"
                    value="Woodwork"
                  />
                </RadioGroup>
                <FormHelperText sx={customHelperTextStyles}>
                  {helperText}
                </FormHelperText>
              </FormControl>
            </Box>
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
              sx={{ borderRadius: 2 }}
              type="submit"
              variant="contained"
            >
              Next
            </Button>
          </Grid>
        </Stack>
      </form>
    </Grid>
  );
}

export default GetStarted;
