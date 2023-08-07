import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { MultiSelect } from 'react-multi-select-component';
// import { Link } from "react-router-dom" ;

function ServiceProviderPage4({
  formData,
  nextPage,

  pageImage,
  previousPage,
  updateFormData,
}) {
  const [selected, setSelected] = useState([]);
  const options = [
    { label: 'Ampara', value: 'ampara' },
    { label: 'Anuradhapura', value: 'anuradhapura' },
    { label: 'Badulla', value: 'badulla' },
    { label: 'Batticaloa', value: 'batticaloa' },
    { label: 'Colombo', value: 'colombo' },
    { label: 'Galle', value: 'galle' },
    { label: 'Gampaha', value: 'gampaha' },
    { label: 'Hambantota', value: 'hambantota' },
    { label: 'Jaffna', value: 'jaffna' },
    { label: 'Kalutara', value: 'kalutara' },
    { label: 'Kandy', value: 'kandy' },
    { label: 'Kegalle', value: 'kegalle' },
    { label: 'Kilinochchi', value: 'kilinochchi' },
    { label: 'Kurunegala', value: 'kurunegala' },
    { label: 'Mannar', value: 'mannar' },
    { label: 'Matale', value: 'matale' },
    { label: 'Matara', value: 'matara' },
    { label: 'Monaragala', value: 'monaragala' },
    { label: 'Mullaitivu', value: 'mullaitivu' },
    { label: 'Nuwara Eliya', value: 'nuwaraeliya' },
    { label: 'Polonnaruwa', value: 'polonnaruwa' },
    { label: 'Puttalam', value: 'puttalam' },
    { label: 'Ratnapura', value: 'ratnapura' },
    { label: 'Trincomalee', value: 'trincomalee' },
    { label: 'Vavuniya', value: 'vavuniya' },
  ];
  const HandleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(formData.get('email'), formData.get('password'));
  };

  const handleNext = () => {
    nextPage();
  };
  const handlePrevious = () => {
    previousPage();
  };
  // TODO: Change Layout
  return (
    <>
      <Container
        style={{
          alignItems: 'center',
          backgroundColor: '#f7f8f1',
          display: 'flex',
        }}
        maxWidth={false}
      >
        <Grid
          container
          justifyContent="center"
          spacing={4}
          style={{ minHeight: '80vh' }}
        >
          <Grid
            style={{
              marginTop: '2rem',
              paddingBottom: '2rem',
              paddingTop: '2rem',
            }}
            item
            md={7}
            xs={12}
          >
            <Grid
              style={{
                alignItems: 'flex-end',
                backgroundImage: `url(${pageImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                borderRadius: '20px',
                display: 'flex',
                height: '100%',
              }}
              container
            >
              <Grid
                style={{
                  marginBottom: '2rem',
                  paddingLeft: '4rem',
                  paddingRight: '1rem',
                }}
                item
                xs={12}
              >
                <Typography
                  style={{
                    color: '#ffffff',
                    fontSize: '1.5rem',
                    lineHeight: '1',
                    marginTop: 'auto',
                    paddingBottom: '1rem',
                    textAlign: 'left',
                  }}
                  variant="h4"
                >
                  Unleash your home’s potential
                </Typography>
                <Typography
                  style={{
                    color: '#ffffff',
                    fontSize: '1.5rem',
                    lineHeight: '1',
                    textAlign: 'left',
                  }}
                  variant="h4"
                >
                  with everything at your fingertips
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={5} xs={12}>
            <Grid
              style={{
                alignItems: 'center',
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginBottom: '2rem',
                marginTop: '2rem',
                minHeight: '80vh',
                padding: '1rem 2rem 3rem',
              }}
              container
            >
              <Grid
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                }}
                item
                xs={12}
              >
                <img alt="Logo" src="/Logo.png" style={{ width: '40%' }} />
              </Grid>
              <Grid item style={{ marginTop: '1rem' }} xs={12}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    margin: '10px',
                  }}
                  component="form"
                  onSubmit={HandleSubmit}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '30px',
                      margin: '10px',
                    }}
                    component="form"
                    onSubmit={HandleSubmit}
                  >
                    {
                      <Grid style={{ justifyContent: 'center' }}>
                        <Typography textAlign="center">
                          Where are you based?
                        </Typography>
                        <Grid
                          style={{ justifyContent: 'center' }}
                          sx={{ margin: 1, width: 1 }}
                        >
                          <FormControl
                            sx={{
                              border: 1,
                              borderColor: 'primary',
                              borderRadius: '5px',
                              m: 1,
                              maxWidth: 300,
                              minWidth: 320,
                            }}
                          >
                            <MultiSelect
                              overrideStrings={{
                                search: 'Search districts..',
                                selectAll: 'Islandwide',
                                selectSomeItems: 'Select Districts',
                              }}
                              isCreatable={false}
                              labelledBy={'Select'}
                              onChange={setSelected}
                              options={options}
                              value={selected}
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    }
                  </Box>
                </Box>

                {
                  <Grid
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      margin: 10,
                    }}
                  >
                    <Button
                      color="primary"
                      onClick={handlePrevious}
                      size="large"
                      sx={{ borderRadius: 2, margin: 1, width: 1 / 2 }}
                      type="submit"
                      variant="contained"
                    >
                      Previous
                    </Button>
                    <Button
                      color="primary"
                      onClick={handleNext}
                      size="large"
                      sx={{ borderRadius: 2, margin: 1, width: 1 / 2 }}
                      type="submit"
                      variant="contained"
                    >
                      Next
                    </Button>
                  </Grid>
                }
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default ServiceProviderPage4;
