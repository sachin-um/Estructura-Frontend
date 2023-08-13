import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';

import TopBar from '../components/TopAppBar';
import Footer from '../components/Footer';
import '../../src/assets/font.css';

function Verify() {
  const userEmail = 'user@example.com'; // Replace with dynamic email value

  return (
    <>
      <TopBar title="Register to Estructura" />

      <Container sx={{ marginBottom: 45 }}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{ height: '70vh' }}
          marginTop={5}
        >
          <Grid item xs={12}>
            <Typography variant="h4" align="center" fontFamily="Poppins">
              Verify your email
            </Typography>
            <Typography
              variant="body1"
              align="center"
              gutterBottom
              marginTop={2}
              fontFamily="Poppins"
            >
              You will need to verify your email to complete registration.
            </Typography>
            <Box display="flex" justifyContent="center">
              <img
                src="verify-via-email-without-text.png"
                alt="Verify via email"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </Box>
            <Typography
              variant="body1"
              align="center"
              fontFamily="Poppins"
              color={'grey'}
              gutterBottom
            >
              An email has been sent to {userEmail} with a link to verify your
              account. If you have not received the email after a few minutes,
              please check your spam folder.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </>
  );
}

export default Verify;
