import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
// import { Link } from "react-router-dom" ;

function HomebuilderPage({
  formData,
  handleDropdownChange,
  nextPage,
  previousPage,
  pageImage,
}) {
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
        <Grid container justifyContent="center" spacing={4}>
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
                backgroundImage: `url(${pageImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "20px",
                height: "100%",
                display: "flex",
                alignItems: "flex-end",
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
                backgroundColor: "#ffffff",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                borderRadius: "20px",
                padding: "1rem 2rem 3rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "2rem",
                marginBottom: "2rem",
                minHeight:"85vh"
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

                  <Grid style={{ justifyContent: "center" }}>
                                                <Typography textAlign="left" width={1} margin={1}>
                                                What are your qualifications?
                                                </Typography>
                                                <Grid style={{ justifyContent: "center" }}>
                                                <TextField sx={{ m: 1, minWidth: 400, maxWidth: 500}}
                                                    label="Please separate each one with commas."
                                                    id="filled-multiline-static"
                                                    multiline
                                                    rows={5}
                                                    variant="filled"

                                                />
                                                </Grid>
                                            </Grid>


                    }

                    {/* { <Grid style={{display:"flex",justifyContent:"center",margin:10}}>
                  <Button sx={{ width: 1/3,  borderRadius:2 }}type='submit' color="primary" variant="contained" size='large'  href=''>Next</Button>
                  </Grid> } */}
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
                      sx={{ borderRadius: 2, margin: 1, width: 1 / 3 }}
                      type="submit"
                      variant="contained"
                    >
                      Previous
                    </Button>
                    <Button
                      color="primary"
                      onClick={handleNext}
                      size="large"
                      sx={{ borderRadius: 2, margin: 1, width: 1 / 3 }}
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

export default HomebuilderPage;
