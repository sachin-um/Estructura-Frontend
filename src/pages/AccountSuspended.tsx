import { Box, Typography } from '@mui/material';

function AccountSuspended() {
  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection="column"
      marginTop={4}
      padding="20px"
    >
      <img
        alt="Account Suspended"
        src="/account_suspended.png"
        style={{ height: '30%', maxWidth: '30%' }}
      />
      <Typography
        align="center"
        fontFamily="Poppins"
        marginTop={2}
        variant="h4"
      >
        Your Account has been Suspended!
      </Typography>
      <Typography
        align="center"
        fontFamily="Poppins"
        marginTop={4}
        variant="body1"
      >
        Your account has been suspended for violating our terms and conditions.
      </Typography>
      <Typography
        align="center"
        fontFamily="Poppins"
        marginBottom={4}
        marginTop={2}
        variant="body1"
      >
        Contact the admin for more information.
      </Typography>
    </Box>
  );
}

export default AccountSuspended;
