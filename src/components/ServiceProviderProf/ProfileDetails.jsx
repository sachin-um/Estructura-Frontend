import { Grid, Typography } from '@mui/material';

function ProfileDetails() {
  return (
    <>
      <Grid
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginLeft: '10rem',
          marginTop: '3rem',
        }}
      >
        <Typography variant="h6">Profile Details </Typography>
      </Grid>
    </>
  );
}

export default ProfileDetails;
