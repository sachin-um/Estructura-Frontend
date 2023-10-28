import { Box, Container, Grid, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

import '../../src/assets/font.css';
import Footer from '../components/Footer';
import TopBar from '../components/TopAppBar';

function Verify() {
  const userEmail = useParams<{ email: string }>().email ?? 'user@example.com'; // Replace with dynamic email value

  return (
    <>
      <TopBar title="Register to Estructura" />

      <Container sx={{ marginBottom: 45 }}>
        <Grid
          alignItems="center"
          container
          justifyContent="center"
          marginTop={5}
          style={{ height: '70vh' }}
        >
          <Grid item xs={12}>
            <Typography align="center" fontFamily="Poppins" variant="h4">
              Verify your email
            </Typography>
            <Typography
              align="center"
              fontFamily="Poppins"
              gutterBottom
              marginTop={2}
              variant="body1"
            >
              You will need to verify your email to complete registration.
            </Typography>
            <Box display="flex" justifyContent="center">
              <img
                alt="Verify via email"
                src="verify-via-email-without-text.png"
                style={{ height: 'auto', maxWidth: '100%' }}
              />
            </Box>
            <Typography
              align="center"
              color={'grey'}
              fontFamily="Poppins"
              gutterBottom
              variant="body1"
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
