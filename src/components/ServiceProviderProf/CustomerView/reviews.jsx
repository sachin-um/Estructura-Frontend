import { Avatar, Card, CardContent, Grid, Rating, Typography } from '@mui/material';

function reviews() {
  return (
    <>
      <Card style={{ width: '80%', margin: '2rem auto' }}>
        <CardContent>
          <Grid container spacing={2} alignItems='center'>
            <Grid item>
              <Avatar />
            </Grid>
            <Grid item>
              <Typography variant='h7'>User Name</Typography>
            </Grid>
          </Grid>
          <Typography variant='body1' style={{ marginTop: '1.5rem' }}>
            I am very happy with the service I received from Urban Architecture. It was delightful to work with them and they provided an excellent service.
          </Typography>
          <Rating name='rating' value={3.5} precision={0.5} readOnly style={{ marginTop: '1.5rem' }} />
          <Typography variant='subtitle2' color='textSecondary' style={{ marginTop: '1rem' }}>
            10/07/2023 at 12:34 PM
          </Typography>
        </CardContent>
      </Card>

      <Card style={{ width: '80%', margin: '2rem auto' }}>
        <CardContent>
          <Grid container spacing={2} alignItems='center'>
            <Grid item>
              <Avatar />
            </Grid>
            <Grid item>
              <Typography variant='h7'>User Name</Typography>
            </Grid>
          </Grid>
          <Typography variant='body1' style={{ marginTop: '1.5rem' }}>
            It was an absolute pleasure working with Urban Architecture. John was very professional and great to work with! He exceeded my expectations and I highly recommend him!
          </Typography>
          <Rating name='rating' value={4} readOnly style={{ marginTop: '1.5rem' }} />
          <Typography variant='subtitle2' color='textSecondary' style={{ marginTop: '1rem' }}>
            02/05/2023 at 10:45 AM
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default reviews;
