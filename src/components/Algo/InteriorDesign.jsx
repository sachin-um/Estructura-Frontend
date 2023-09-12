import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
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

function InteriorDesign({
  formData,
  handlePageChange,
  nextPage,
  previousPage,
  updateFormData,
}) {
  const [userSelection, setUserSelection] = useState('');
  const [checkboxState, setCheckboxState] = useState({
    SpacePlanning: false,
    FurnitureAndFurnishings: false,
    ColorSchemeAndPaintSelection: false,
    LightingDesign: false,
    FlooringAndWallTreatments: false,
    AccessoriesAndDecorativeElements: false,
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
                What type of a Interior Design do you require?
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
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  style={{ margin: '10px' }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="Space Planning"
                        checked={checkboxState.SpacePlanning}
                        onChange={handleCheckboxChange}
                        name="SpacePlanning"
                      />
                    }
                    label="Space Planning"
                  />
                  <Divider />
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="Furniture and Furnishings"
                        checked={checkboxState.FurnitureAndFurnishings}
                        onChange={handleCheckboxChange}
                        name="FurnitureAndFurnishings"
                      />
                    }
                    label="Furniture and Furnishings"
                  />
                  <Divider />
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="Color scheme and Paint Selection"
                        checked={checkboxState.ColorSchemeAndPaintSelection}
                        onChange={handleCheckboxChange}
                        name="ColorSchemeAndPaintSelection"
                      />
                    }
                    label="Color scheme and Paint Selection"
                  />
                  <Divider />
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="Lighting Design"
                        checked={checkboxState.LightingDesign}
                        onChange={handleCheckboxChange}
                        name="LightingDesign"
                      />
                    }
                    label="Lighting Design"
                  />
                  <Divider />
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="Flooring and Wall Treatments"
                        checked={checkboxState.FlooringAndWallTreatments}
                        onChange={handleCheckboxChange}
                        name="FlooringAndWallTreatments"
                      />
                    }
                    label="Flooring and Wall Treatments"
                  />
                  <Divider />
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="Accessories and Decorative Elements"
                        checked={checkboxState.AccessoriesAndDecorativeElements}
                        onChange={handleCheckboxChange}
                        name="AccessoriesAndDecorativeElements"
                      />
                    }
                    label="Accessories and Decorative Elements"
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

export default InteriorDesign;
