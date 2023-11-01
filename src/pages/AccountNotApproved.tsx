import { Box, Typography } from '@mui/material';

function AccountNotApproved() {
  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection="column"
      marginTop={4}
      padding="20px"
    >
      <img
        alt="Account Not Approved"
        src="/Account_notApproved.png"
        style={{ height: '30%', maxWidth: '30%' }}
      />
      <Typography
        align="center"
        fontFamily="Poppins"
        marginTop={2}
        variant="h4"
      >
        Account is not approved yet!
      </Typography>
      <Typography
        align="center"
        fontFamily="Poppins"
        marginTop={4}
        variant="body1"
      >
        Your account has not been approved by the admin yet.
      </Typography>
      <Typography
        align="center"
        fontFamily="Poppins"
        marginBottom={4}
        marginTop={2}
        variant="body1"
      >
        Wait for approval.
      </Typography>
    </Box>
  );
}

export default AccountNotApproved;
