import { Box, Button, Container, Grid, Typography } from '@mui/material';

import '../../src/assets/font.css';

function Loading() {
  return (
    <>
      <Container sx={{ marginBottom: 5 }}>
        <Grid
          alignItems="center"
          container
          justifyContent="center"
          marginTop={5}
          style={{ height: '10vh' }}
        >
          <Grid item xs={12}>
            <Typography align="center" fontFamily="Poppins" variant="h6">
              Loading ...
            </Typography>
            <Box display="flex" justifyContent="center">
              <img
                alt="Unauthorized Access"
                src="/loading.gif"
                style={{ height: 'auto', maxWidth: '5%' }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Loading;
