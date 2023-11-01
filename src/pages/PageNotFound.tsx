import { Box, Typography, Button } from '@mui/material';

function PageNotFound() {
  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection="column"
      padding="20px"
    >
      <img
        alt="No Results Found"
        src="/page-not-found.png"
        style={{ height: '30%', maxWidth: '30%' }}
      />
      <Typography
        align="center"
        fontFamily="Poppins"
        marginTop={2}
        variant="h4"
      >
        PAGE NOT FOUND
      </Typography>
      <Typography
        align="center"
        fontFamily="Poppins"
        marginTop={4}
        variant="body1"
      >
        We looked everywhere for this page.
      </Typography>
      <Typography
        align="center"
        fontFamily="Poppins"
        marginTop={2}
        variant="body1"
        marginBottom={4}
      >
        Are you sure the URL is correct?
      </Typography>

      <Button color="secondary" size="large" variant="contained" style={{ color: 'white' }}>
        Go to Home Page
      </Button>
    </Box>
  );
}

export default PageNotFound;
