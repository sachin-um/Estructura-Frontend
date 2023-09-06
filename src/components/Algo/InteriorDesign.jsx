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
import TopAppBar from '../TopAppBar';

function InteriorDesign({
  formData,
  handlePageChange,
  nextPage,
  previousPage,
  updateFormData,
}) {
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
                What type of a Interior Design do you require?
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
            top="38%"
            width="80%"
            zIndex="1"
          >
            <Box>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                style={{ margin: '10px' }}
              >
                <FormControlLabel
                  control={<Checkbox />}
                  label="Space Planning"
                  value="Space Planning"
                />
                <Divider />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Furniture and Furnishings"
                  value="Furniture and Furnishings"
                />
                <Divider />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Color scheme and Paint Selection"
                  value="Color scheme and Paint Selection"
                />
                <Divider />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Lighting Design"
                  value="Lighting Design"
                />
                <Divider />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Flooring and Wall Treatments "
                  value="Flooring and Wall Treatments "
                />
                <Divider />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Accessories and decorative elements"
                  value="Accessories and decorative elements"
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
            >
              Next
            </Button>
          </Grid>
        </Box>
      }
    </>
  );
}

export default InteriorDesign;