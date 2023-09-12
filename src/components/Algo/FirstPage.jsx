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

function FirstPage({}) {
  const [userSelection, setUserSelection] = useState('');

  const handleNext = () => {
    handlePageChange(userSelection);
    nextPage();
  };
  const handleChange = (event) => {
    setUserSelection(event.target.value);
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

              {/* <Typography
                fontSize="1.2rem"
                fontWeight="500px"
                marginBottom="5px"
                marginTop="5px"
              >
                What type of a construction do you require?
              </Typography> */}
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
            top="28%"
            width="80%"
            zIndex="1"
            borderRadius="10px"
          >
            <Box>
              <Typography
                fontFamily="Helvetica Neue"
                fontSize="1rem"
                fontWeight="500px"
                textAlign="center"
                marginBottom="5px"
                marginTop="5px"
              >
                Here you'll be guided through a set of questions designed to
                pinpoint your specific needs. Once you've answered them, we'll
                provide tailored recommendations that perfectly match your
                requirements. Simply tell us what you're looking for, and we'll
                present you with the ideal products and experts.
              </Typography>
            </Box>
            <img
              alt="Home Owner"
              src="/Logo.png"
              style={{ height: '80%', width: '50%' }}
            />
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
              type="submit"
              variant="contained"
              onClick={handleNext}
            >
              Start
            </Button>
          </Grid>
        </Box>
      }
    </>
  );
}

export default FirstPage;
