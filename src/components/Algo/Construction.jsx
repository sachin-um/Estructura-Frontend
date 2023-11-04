import {
  Box,
  Button,
  Checkbox,
  Divider,
  Stack,
  FormControl,
  FormControlLabel,
  FormHelperText,
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

function Construction({
  formData,
  handlePageChange,
  nextPage,
  previousPage,
  updateFormData,
  currentQuestion,
  totalQuestions,
}) {
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('');
  const [userSelection, setUserSelection] = useState('');

  const handleNext = (event) => {
    event.preventDefault();
    if (userSelection !== '') {
      handlePageChange(userSelection);
      updateFormData({ secondChoice: [userSelection] });
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
                What type of a construction job do you require?
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
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  style={{ margin: '30px' }}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    control={<Radio />}
                    label="Residence Buildings"
                    value="Residence Buildings"
                  />
                  <Divider />
                  <FormControlLabel
                    control={<Radio />}
                    label="Commercial Buildings"
                    value="Commercial Buildings"
                  />
                  <Divider />
                  <FormControlLabel
                    control={<Radio />}
                    label="Industrial Buildings"
                    value="Industrial Buildings"
                  />
                  <Divider />
                  <FormControlLabel
                    control={<Radio />}
                    label="Recreational Buildings"
                    value="Recreational Buildings"
                  />
                </RadioGroup>
                <FormHelperText sx={customHelperTextStyles}>
                  {helperText}
                </FormHelperText>
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

export default Construction;
