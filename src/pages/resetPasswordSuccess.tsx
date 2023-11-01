import { Box, Button, Container, Grid, Typography } from '@mui/material';

import Footer from '../components/Footer';
import TopBar from '../components/TopAppBar';

function backToLogin() {
  window.location.replace('/SignIn');
}

function ResetPasswordSuccess() {
  return (
    <>
      <TopBar title="Register to Estructura" />
      <Container sx={{ marginBottom: 5 }}>
        <Grid
          alignItems="center"
          container
          justifyContent="center"
          marginTop={5}
          style={{ minHeight: '70vh' }}
        >
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center">
              <img
                alt="Verify via email"
                src="ResetLinkSent.png"
                style={{ height: 'auto', maxWidth: '100%' }}
              />
            </Box>
            <Box display="flex" justifyContent="center" marginTop={2}>
              <Button
                color="primary"
                onClick={backToLogin}
                style={{ marginRight: '10px' }}
                variant="contained"
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

export default ResetPasswordSuccess;
