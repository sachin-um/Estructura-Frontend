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

function ConstructionResidence({
  formData,
  handlePageChange,
  nextPage,
  previousPage,
  updateFormData,
  currentQuestion,
  totalQuestions,
}) {
  const [checkboxState, setCheckboxState] = useState({
    AllInOne: false,
    KitchenAndDining: false,
    Bedroom: false,
    LivingRoom: false,
    KitchenAndDining: false,
    Office: false,
    Garage: false,
    Bathroom: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxState({
      ...checkboxState,
      [name]: checked,
    });
  };
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('');
  const selectedValues = Object.keys(checkboxState).filter(
    (key) => checkboxState[key],
  );
  const handleNext = (event) => {
    event.preventDefault();
    if (selectedValues.length !== 0) {
      handlePageChange('Location');
      updateFormData({ thirdChoice: [userSelection] });
      nextPage();
    } else {
      setHelperText('Please select an option.');
      setError(true);
    }
  };
  const customHelperTextStyles = {
    color: 'red',
    fontSize: '14px',
    textAlign: 'center',
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
                What type of a residence building do you require?
              </Typography>
              <Typography
                fontSize="0.8rem"
                fontWeight="500px"
                fontFamily="poppins"
              >
                Question {currentQuestion} out of {totalQuestions}
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
                    style={{ margin: '2px' }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          value="All in one"
                          checked={checkboxState.AllInOne}
                          onChange={handleCheckboxChange}
                          name="AllInOne"
                        />
                      }
                      label="All in one"
                    />
                    <Divider />
                    <FormControlLabel
                      control={
                        <Checkbox
                          value="Kitchen and Dining"
                          checked={checkboxState.KitchenAndDining}
                          onChange={handleCheckboxChange}
                          name="KitchenAndDining"
                        />
                      }
                      label="Kitchen and Dining"
                    />
                    <Divider />
                    <FormControlLabel
                      control={
                        <Checkbox
                          value="Bedroom"
                          checked={checkboxState.Bedroom}
                          onChange={handleCheckboxChange}
                          name="Bedroom"
                        />
                      }
                      label="Bedroom"
                    />
                    <Divider />
                    <FormControlLabel
                      control={
                        <Checkbox
                          value="Living Room"
                          checked={checkboxState.LivingRoom}
                          onChange={handleCheckboxChange}
                          name="LivingRoom"
                        />
                      }
                      label="Living Room"
                    />
                    <Divider />
                    <FormControlLabel
                      control={
                        <Checkbox
                          value="Office"
                          checked={checkboxState.Office}
                          onChange={handleCheckboxChange}
                          name="Office"
                        />
                      }
                      label=" Office"
                    />
                    <Divider />
                    <FormControlLabel
                      control={
                        <Checkbox
                          value="Garage"
                          checked={checkboxState.Garage}
                          onChange={handleCheckboxChange}
                          name="Garage"
                        />
                      }
                      label="Garage"
                    />
                    <Divider />
                    <FormControlLabel
                      control={
                        <Checkbox
                          value="Bathroom"
                          checked={checkboxState.Bathroom}
                          onChange={handleCheckboxChange}
                          name="Bathroom"
                        />
                      }
                      label="Bathroom"
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

export default ConstructionResidence;
