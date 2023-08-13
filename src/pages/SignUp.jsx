import { Box, Button, Container, Grid, Typography } from '@mui/material';

import TopBar from '../components/TopAppBar';

function SignUp() {
  return (
    <>
      <TopBar title="Register to Estructura" />
      <Box
        sx={{
          alignItems: 'flex-start',
          backgroundColor: '#f7f8f1',
          display: 'flex',
          justifyContent: 'center',
          minHeight: '85vh',
          paddingTop: '2rem',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={8}>
            <Grid item md={6} sx={{ marginTop: '2rem' }} xs={12}>
              <Box
                sx={{
                  alignItems: 'center',
                  backgroundColor: '#fff',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '500px',
                  justifyContent: 'flex-start',
                  padding: '1rem',
                  textAlign: 'center',
                }}
              >
                <img
                  alt="Home Owner"
                  src="/homeOwner.jpg"
                  style={{ height: '60%', marginBottom: '2rem', width: '100%' }}
                />
                <Typography
                  sx={{ color: '#435834', mb: '0.5rem' }}
                  variant="h4"
                >
                  I am a Homeowner
                </Typography>
                <Typography
                  sx={{ color: '#435834', fontSize: '1.2rem' }}
                  variant="h6"
                >
                  I want to build my dream house
                </Typography>
                <Button
                  color="secondary"
                  href="/SignUp/HomeOwner"
                  sx={{ color: '#fff', mt: '2rem', width: '50%' }}
                  variant="contained"
                >
                  Sign up as a Homeowner
                </Button>
              </Box>
            </Grid>
            <Grid item md={6} sx={{ marginTop: '2rem' }} xs={12}>
              <Box
                sx={{
                  alignItems: 'center',
                  backgroundColor: '#fff',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '500px',
                  justifyContent: 'flex-start',
                  padding: '1rem',
                  textAlign: 'center',
                }}
              >
                <img
                  alt="Service Provider"
                  src="/serviceProvider.webp"
                  style={{ height: '60%', marginBottom: '2rem', width: '100%' }}
                />
                <Typography
                  sx={{ color: '#435834', mb: '0.5rem' }}
                  variant="h4"
                >
                  I am a Service Provider
                </Typography>
                <Typography
                  sx={{ color: '#435834', fontSize: '1.2rem' }}
                  variant="h6"
                >
                  I provide services related to home improvement, sell/rent
                  necessary items
                </Typography>
                <Button
                  color="secondary"
                  href="/SignUp/ServiceProvider"
                  sx={{ color: '#fff', mt: '1rem', width: '50%' }}
                  variant="contained"
                >
                  Sign up as a Service Provider
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default SignUp;
