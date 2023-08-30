import { Box, Container, Grid, Typography } from '@mui/material';

import '../../src/assets/font.css';

function UnauthorizedAccess() {
  return (
    <>
      <Container sx={{ marginBottom: 15 }}>
        <Grid
          alignItems="center"
          container
          justifyContent="center"
          marginTop={5}
          style={{ height: '70vh' }}
        >
          <Grid item xs={12}>
            <Typography align="center" fontFamily="Poppins" variant="h4">
              Unauthorized Access
            </Typography>
            <Typography
              align="center"
              fontFamily="Poppins"
              gutterBottom
              marginTop={2}
              variant="body1"
            >
              Please use correct user credentials and login to use this feature.
            </Typography>
            <Box display="flex" justifyContent="center">
              <img
                alt="Unauthorized Access"
                src="/unauthorized.png"
                style={{ height: 'auto', maxWidth: '100%' }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default UnauthorizedAccess;
