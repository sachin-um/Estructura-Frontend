import {
  Box,
  Button,
  Checkbox,
  Stack,
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

function CurrentStatus({
  formData,
  handlePageChange,
  nextPage,
  previousPage,
  updateFormData,
}) {
  const [userSelection, setUserSelection] = useState('');

  const handleNext = () => {
    handlePageChange('Price');
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
                What is the current status of your project?
              </Typography>
            </Box>
            <Divider />
            <Box alignItems="center" bgcolor="#f2f2f2" p={2} textAlign="center">
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                onChange={handleChange}
              >
                <Grid container spacing={2} padding={3}>
                  <Grid xs={12} md={3}>
                    <FormControlLabel
                      control={<Radio size="small" />}
                      labelPlacement="bottom"
                      label="Just exploring an idea"
                      value="Just exploring an idea"
                    />
                  </Grid>
                  <Grid xs={12} md={3}>
                    <FormControlLabel
                      control={<Radio size="small" />}
                      labelPlacement="bottom"
                      label="Planning and Budgeting"
                      value="Planning and Budgeting"
                    />
                  </Grid>
                  <Grid xs={12} md={3}>
                    <FormControlLabel
                      control={<Radio size="small" />}
                      labelPlacement="bottom"
                      label="Ready to hire"
                      value="Ready to hire"
                    />
                  </Grid>
                  <Grid xs={12} md={3}>
                    <FormControlLabel
                      control={<Radio size="small" />}
                      labelPlacement="bottom"
                      label="Project already in progress"
                      value="Project already in progress"
                    />
                  </Grid>
                </Grid>
              </RadioGroup>
            </Box>
            <Grid
              style={{
                width: '60%',
                marginTop: '6%',
                marginBottom: '6%',
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

export default CurrentStatus;
