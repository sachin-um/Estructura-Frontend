import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
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
}) {
  const [userSelection, setUserSelection] = useState('');
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

  const selectedValues = Object.keys(checkboxState).filter(
    (key) => checkboxState[key],
  );
  const handleNext = () => {
    handlePageChange('Location');
    nextPage();
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
                What type of a residence building do you require?
              </Typography>
            </Box>
          </Box>
          <Divider />
          <Box
            alignItems="center"
            bgcolor="#f2f2f2"
            maxWidth="400px"
            p={2}
            position="absolute"
            textAlign="center"
            top="36%"
            width="80%"
            zIndex="1"
            borderRadius="10px"
          >
            <Box>
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
            </Box>
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

export default ConstructionResidence;
