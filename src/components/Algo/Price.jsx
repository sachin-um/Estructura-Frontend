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
import { useNavigate } from 'react-router-dom';
// import { Link } from "react-router-dom" ;
import TopAppBar from '../TopAppBar';

function Price({
  formData,
  handlePageChange,
  nextPage,
  previousPage,
  updateFormData,
  currentQuestion,
  totalQuestions,
  handleSubmit,
}) {
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('');
  const [userSelection, setUserSelection] = useState('');

  const navigate = useNavigate();

  const handleNext = (event) => {
    event.preventDefault();
    if (userSelection !== '') {
      updateFormData({ price: userSelection });
      const newData = { ...formData, price: userSelection };
      handleSubmit(newData);
      // navigate('/RecommendationsPage', { replace: true });
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
                What is more important to you?
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
              p={2}
              textAlign="center"
              borderRadius="10px"
            >
              <Box>
                <FormControl error={error} variant="standard">
                  <RadioGroup
                    row
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    style={{
                      margin: '30px',
                    }}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      control={<Radio />}
                      labelPlacement="bottom"
                      label="Minimizing the cost"
                      value="I want to minimize the cost"
                    />

                    <FormControlLabel
                      control={<Radio />}
                      labelPlacement="bottom"
                      label="Low to Mid Price quality"
                      value="Low to Mid Price quality"
                    />

                    <FormControlLabel
                      control={<Radio />}
                      labelPlacement="bottom"
                      label="Mid to High Price quality"
                      value="Mid to High Price quality"
                    />

                    <FormControlLabel
                      control={<Radio />}
                      labelPlacement="bottom"
                      label="Best Results"
                      value="Best Results"
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
                Find
              </Button>
            </Grid>
          </Stack>
        </Grid>
      }
    </>
  );
}

export default Price;
