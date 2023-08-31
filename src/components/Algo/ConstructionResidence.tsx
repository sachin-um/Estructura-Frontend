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
import React from 'react';

// import { Link } from "react-router-dom" ;
import TopAppBar from '../../components/TopAppBar';

function ConstructionResidence() {
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
          >
            <Box>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                style={{ margin: '2px' }}
              >
                <FormControlLabel
                  control={<Checkbox />}
                  label="All in one"
                  value="All in one"
                />
                <Divider />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Kitchen and Dining"
                  value="Kitchen and Dining"
                />
                <Divider />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Bedroom"
                  value="Bedroom"
                />
                <Divider />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Living Room"
                  value="Living Room"
                />
                <Divider />
                <FormControlLabel
                  control={<Checkbox />}
                  label=" Office"
                  value="Office"
                />
                <Divider />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Garage"
                  value="Garage"
                />
                <Divider />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Bathroom"
                  value="Bathroom"
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
            >
              Previous
            </Button>
            <Button
              color="primary"
              size="large"
              sx={{ borderRadius: 2, margin: 3, width: 1 / 2 }}
              type="submit"
              variant="contained"
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
