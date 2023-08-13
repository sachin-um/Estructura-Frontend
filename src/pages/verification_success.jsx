import { Box, Button, Container, Grid, Typography } from '@mui/material';

import TopBar from '../components/TopAppBar';
import Footer from '../components/Footer';

function backToLogin() {
    window.location.replace('/signin');
  }

function VerifySuccess() {
  return (
    <>
      <TopBar title="Register to Estructura" />
      <Container sx={{ marginBottom: 5 }}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{ height: '70vh' }}
          marginTop={5}
        >
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center">
              <img
                src="verified.png"
                alt="Verify via email"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </Box>
            <Box display="flex" justifyContent="center" marginTop={2}>
              <Button
                variant="contained"
                color="primary"
                style={{ marginRight: '10px' }}
                onClick={backToLogin}
              >
                Go Back to Login
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default VerifySuccess;
