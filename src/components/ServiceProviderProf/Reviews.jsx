import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Rating,
  Typography,
} from '@mui/material';

function Reviews() {
  return (
    <>
      <Card style={{ margin: '2rem auto', width: '80%' }}>
        <CardContent>
          <Grid alignItems="center" container spacing={2}>
            <Grid item>
              <Avatar />
            </Grid>
            <Grid item>
              <Typography variant="h7">User Name</Typography>
            </Grid>
          </Grid>
          <Typography style={{ marginTop: '1.5rem' }} variant="body1">
            I am very happy with the service I received from Urban Architecture.
            It was delightful to work with them and they provided an excellent
            service.
          </Typography>
          <Rating
            name="rating"
            precision={0.5}
            readOnly
            style={{ marginTop: '1.5rem' }}
            value={3.5}
          />
          <Typography
            color="textSecondary"
            style={{ marginTop: '1rem' }}
            variant="subtitle2"
          >
            10/07/2023 at 12:34 PM
          </Typography>
        </CardContent>
      </Card>

      <Card style={{ margin: '2rem auto', width: '80%' }}>
        <CardContent>
          <Grid alignItems="center" container spacing={2}>
            <Grid item>
              <Avatar />
            </Grid>
            <Grid item>
              <Typography variant="h7">User Name</Typography>
            </Grid>
          </Grid>
          <Typography style={{ marginTop: '1.5rem' }} variant="body1">
            It was an absoulte pleasure working with Urban Architecture. John
            was very professional and great to work with! He exceeded my
            expectations and I highly recommend him!
          </Typography>
          <Rating
            name="rating"
            readOnly
            style={{ marginTop: '1.5rem' }}
            value={4}
          />
          <Typography
            color="textSecondary"
            style={{ marginTop: '1rem' }}
            variant="subtitle2"
          >
            02/05/2023 at 10:45 AM
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default Reviews;
