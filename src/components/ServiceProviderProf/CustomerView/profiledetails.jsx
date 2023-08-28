import { Grid, Typography, Card, CardContent } from '@mui/material';
import '../../assets/font.css';

const professionalCategoryOptions = [
  'Construction Companies',
  'Architects',
  'Interior Designers',
  'Landscape Architects',
  'Home Builders',
  'Carpenters',
  'Painters',
];

function profiledetails() {
  const name = 'John Doe';
  const nic = '1234567890';
  const email = 'johndoe@example.com';
  const contactNo = '+1 234 567 890';
  const businessName = 'Sleek Architects';
  const businessContactNo = '+94 77 7392837';
  const businessLocation = 'Colombo';
  const professionalCategory = 'Architect';
  const qualifications = '';
  const services = '';

  return (
    <>
      <Grid style={{ marginTop: '2rem' }}>
        <Typography variant="h6" gutterBottom>
          Personal Information
        </Typography>
        <Card sx={{ width: '1000px', p: 2 }}>
          <CardContent>
            <Grid container spacing={4}>
              <Grid item xs={3}>
                <Typography variant="h7">Name:</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body1" color="textSecondary">
                  {name}
                </Typography>
              </Grid>

              <Grid item xs={3}>
                <Typography variant="h7">NIC Number:</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body1" color="textSecondary">
                  {nic}
                </Typography>
              </Grid>

              <Grid item xs={3}>
                <Typography variant="h7">Email Address:</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body1" color="textSecondary">
                  {email}
                </Typography>
              </Grid>

              <Grid item xs={3}>
                <Typography variant="h7">Contact Number:</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body1" color="textSecondary">
                  {contactNo}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid style={{ marginTop: '2rem' }}>
        <Typography variant="h6" gutterBottom>
          Business Information
        </Typography>
        <Card sx={{ width: '1000px', p: 2 }}>
          <CardContent>
            <Grid container spacing={4}>
              <Grid item xs={3}>
                <Typography variant="h7">Business Name:</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body1" color="textSecondary">
                  {businessName}
                </Typography>
              </Grid>

              <Grid item xs={3}>
                <Typography variant="h7">Business Contact No:</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body1" color="textSecondary">
                  {businessContactNo}
                </Typography>
              </Grid>

              <Grid item xs={3}>
                <Typography variant="h7">Business Location:</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body1" color="textSecondary">
                  {businessLocation}
                </Typography>
              </Grid>

              <Grid item xs={3}>
                <Typography variant="h7">Professional Category:</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body1" color="textSecondary">
                  {professionalCategory}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid style={{ marginTop: '2rem' }}>
        <Typography variant="h6" gutterBottom>
          Qualifications
        </Typography>
        <Card sx={{ width: '1000px', height: '100px', p: 2 }}>
          <CardContent>
            <Typography variant="body1" color="textSecondary">
              {qualifications}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid style={{ marginTop: '2rem' }}>
        <Typography variant="h6" gutterBottom>
          Services
        </Typography>
        <Card sx={{ width: '1000px', height: '100px', p: 2 }}>
          <CardContent>
            <Typography variant="body1" color="textSecondary">
              {services}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}

export default profiledetails;
