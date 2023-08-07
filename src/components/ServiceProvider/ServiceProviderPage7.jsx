import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
// import { Link } from "react-router-dom" ;

function ServiceProviderPage7({
  formData,
  nextPage,

  pageImage,
  previousPage,
  updateFormData,
}) {
  const [profileimage, setprofileimage] = useState('/User/user.png');
  const HandleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(formData.get('email'), formData.get('password'));
  };
  const handleUpload = (e) => {
    setprofileimage(URL.createObjectURL(e.target.files[0]));
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
              <Grid item style={{ marginTop: '1rem', width: '60%' }} xs={12}>
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
                        Upload your profile picture
                      </Typography>
                      <Grid
                        style={{ justifyContent: 'center' }}
                        sx={{ margin: 1, width: 1 }}
                      >
                        <img
                          style={{
                            height: '100%',
                            width: '100%',
                          }}
                          alt="user"
                          src={profileimage}
                        />
                      </Grid>
                      <Grid
                        style={{ justifyContent: 'center' }}
                        sx={{ margin: 1, width: 1 }}
                      >
                        <Button
                          color="secondary"
                          component="label"
                          sx={{ width: 1 }}
                          variant="contained"
                        >
                          Upload Photo
                          <input
                            accept="image/*"
                            hidden
                            multiple
                            onChange={handleUpload}
                            type="file"
                          />
                        </Button>
                      </Grid>
                    </Grid>
                  }

                  {/* { <Grid style={{display:"flex",justifyContent:"center",margin:10}}>
                  <Button sx={{ width: 1/3,  borderRadius:2 }}type='submit' color="primary" variant="contained" size='large'  href=''>Next</Button>
                  </Grid> } */}
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
                      size="large"
                      sx={{ borderRadius: 2, margin: 1, width: 1 / 2 }}
                      type="submit"
                      variant="contained"
                    >
                      Submit
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

export default ServiceProviderPage7;
