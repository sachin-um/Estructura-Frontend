import { Box, Typography } from '@mui/material';

function NoResultsFound() {
  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection="column"
      padding="20px"
    >
      <img
        alt="No Results Found"
        src="/magnifying-glass.png"
        style={{ height: 'auto', maxWidth: '6%' }}
      />
      <Typography
        align="center"
        fontFamily="Poppins"
        marginTop={2}
        variant="body1"
      >
        Oops! There is Nothing Here . . .
      </Typography>
    </Box>
  );
}

export default NoResultsFound;
