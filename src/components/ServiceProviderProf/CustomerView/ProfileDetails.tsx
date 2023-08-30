import { Card, CardContent, Grid, Typography } from '@mui/material';

function ProfileDetails({ user }: { user: User }) {
  return (
    <>
      <Grid style={{ marginTop: '2rem' }}>
        <Typography gutterBottom variant="h6">
          Personal Information
        </Typography>
        <Card sx={{ p: 2, width: '1000px' }}>
          <CardContent>
            <Grid container spacing={4}>
              <Grid item xs={3}>
                <Typography variant="h6">Name:</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography color="textSecondary" variant="body1">
                  {user.firstName + ' ' + user.lastName}
                </Typography>
              </Grid>

              <Grid item xs={3}>
                <Typography variant="h6">NIC Number:</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography color="textSecondary" variant="body1">
                  {user.nic}
                </Typography>
              </Grid>

              <Grid item xs={3}>
                <Typography variant="h6">Email Address:</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography color="textSecondary" variant="body1">
                  {user.email}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid style={{ marginTop: '2rem' }}>
        <Typography gutterBottom variant="h6">
          Business Information
        </Typography>
        <Card sx={{ p: 2, width: '1000px' }}>
          <CardContent>
            <Grid container spacing={4}>
              <Grid item xs={3}>
                <Typography variant="h6">Business Name:</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography color="textSecondary" variant="body1">
                  {user.businessName}
                </Typography>
              </Grid>

              <Grid item xs={3}>
                <Typography variant="h6">Business Contact No:</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography color="textSecondary" variant="body1">
                  {user.businessContactNo}
                </Typography>
              </Grid>

              <Grid item xs={3}>
                <Typography variant="h6">Business Location:</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography color="textSecondary" variant="body1">
                  {user.addressLine1 +
                    ', ' +
                    user.addressLine2 +
                    ', ' +
                    user.city +
                    ', ' +
                    user.district}
                </Typography>
              </Grid>

              <Grid item xs={3}>
                <Typography variant="h6">Professional Category:</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography color="textSecondary" variant="body1">
                  {user.role}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid style={{ marginTop: '2rem' }}>
        <Typography gutterBottom variant="h6">
          Qualifications
        </Typography>
        <Card sx={{ height: '100px', p: 2, width: '1000px' }}>
          <CardContent>
            <Typography color="textSecondary" variant="body1">
              {user.qualifications?.map((q) => q.qualification).join(', ')}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid style={{ marginTop: '2rem' }}>
        <Typography gutterBottom variant="h6">
          Specializations
        </Typography>
        <Card sx={{ height: '100px', p: 2, width: '1000px' }}>
          <CardContent>
            <Typography color="textSecondary" variant="body1">
              {user.specializations?.map((s) => s.specialization).join(', ')}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}

export default ProfileDetails;
