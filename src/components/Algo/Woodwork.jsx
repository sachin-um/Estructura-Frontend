import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  List,
  Stack,
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

function Woodwork({
  formData,
  handlePageChange,
  nextPage,
  previousPage,
  updateFormData,
  currentQuestion,
  totalQuestions,
}) {
  const [checkboxState, setCheckboxState] = useState({
    Carpentry: false,
    Cabinetry: false,
    WoodTurning: false,
    WoodCarving: false,
    RestorationAndRepair: false,
    WoodFlooring: false,
    WoodFinishing: false,
  });
  const [userSelection, setUserSelection] = useState('');
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
      updateFormData({ secondChoice: [userSelection] });
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
                What type of a woodwork do you require?
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
                    style={{ margin: '10px' }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          value="Carpentry"
                          checked={checkboxState.Carpentry}
                          onChange={handleCheckboxChange}
                          name="Carpentry"
                        />
                      }
                      label="Carpentry"
                    />
                    <Divider />
                    <FormControlLabel
                      control={
                        <Checkbox
                          value="Cabinetry"
                          checked={checkboxState.Cabinetry}
                          onChange={handleCheckboxChange}
                          name="Cabinetry"
                        />
                      }
                      label="Cabinetry"
                    />
                    <Divider />
                    <FormControlLabel
                      control={
                        <Checkbox
                          value="Wood Turning"
                          checked={checkboxState.WoodTurning}
                          onChange={handleCheckboxChange}
                          name="WoodTurning"
                        />
                      }
                      label="Wood Turning"
                    />
                    <Divider />
                    <FormControlLabel
                      control={
                        <Checkbox
                          value="Wood Carving"
                          checked={checkboxState.WoodCarving}
                          onChange={handleCheckboxChange}
                          name="WoodCarving"
                        />
                      }
                      label="Wood Carving"
                    />
                    <Divider />
                    <FormControlLabel
                      control={
                        <Checkbox
                          value="Restoration and Repair"
                          checked={checkboxState.RestorationAndRepair}
                          onChange={handleCheckboxChange}
                          name="RestorationAndRepair"
                        />
                      }
                      label="Restoration and Repair"
                    />
                    <Divider />
                    <FormControlLabel
                      control={
                        <Checkbox
                          value="Wood Flooring"
                          checked={checkboxState.WoodFlooring}
                          onChange={handleCheckboxChange}
                          name="WoodFlooring"
                        />
                      }
                      label="Wood Flooring"
                    />
                    <Divider />
                    <FormControlLabel
                      control={
                        <Checkbox
                          value="Wood Finishing"
                          checked={checkboxState.WoodFinishing}
                          onChange={handleCheckboxChange}
                          name="WoodFinishing"
                        />
                      }
                      label="Wood Finishing"
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

export default Woodwork;
