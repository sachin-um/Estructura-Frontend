import { Box, Typography } from '@mui/material';

function PageNotFound() {
  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection="column"
      marginTop={12}
      padding="20px"
    >
      <img
        alt="No Results Found"
        src="/ResetSuccessful.png"
        style={{ height: '30%', maxWidth: '30%' }}
      />
      <Typography
        align="center"
        fontFamily="Poppins"
        marginTop={2}
        variant="h4"
      >
        Reset Password Successful!
      </Typography>
      <Typography
        align="center"
        fontFamily="Poppins"
        marginTop={4}
        variant="body1"
      >
        Your password has been successfully reset
      </Typography>
      <Typography
        align="center"
        fontFamily="Poppins"
        marginBottom={4}
        marginTop={2}
        variant="body1"
      >
        You are all set to go!
      </Typography>
    </Box>
  );
}

export default PageNotFound;
