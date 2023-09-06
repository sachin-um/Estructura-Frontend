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

function GetStarted({
  formData,
  nextPage,
  previousPage,
  handlePageChange,
  updateFormData,
}) {
  const [userSelection, setUserSelection] = useState('');

  const handleNext = () => {
    handlePageChange(userSelection);
    nextPage();
  };
  const handleChange = (event) => {
    setUserSelection(event.target.value);
  };
  return (
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
        maxWidth="800px"
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
            Tell us what is on your mind
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
        top="33%"
        width="80%"
        zIndex="1"
      >
        <Box>
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
        </Box>
      </Box>
      <Box position="absolute" style={{ margin: 2 }} top="93%" zIndex="1">
        <Button
          color="primary"
          size="large"
          sx={{ borderRadius: 2 }}
          type="submit"
          variant="contained"
          onClick={handleNext}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}

export default GetStarted;
