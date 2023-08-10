import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';

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

function ServiceProviderProfileDetails({ userDetails }: { userDetails: User }) {
  const [firstname, setFirstname] = useState(userDetails.firstname);
  const [lastname, setLastname] = useState(userDetails.lastname);
  const [nic, setNic] = useState(userDetails?.nic ?? 'Unknown');
  const [email, setEmail] = useState(userDetails.email);
  const [contactNo, setContactNo] = useState(
    userDetails?.contactNumber ?? 'Unknown',
  );
  const [businessName, setBusinessName] = useState(
    userDetails?.businessName ?? 'Unknown',
  );
  const [businessContactNo, setBusinessContactNo] = useState(
    userDetails?.businessContactNo ?? 'Unknown',
  );
  const [district, setDistrict] = useState(userDetails?.district ?? 'Unknown');
  const [city, setCity] = useState(userDetails?.city ?? 'Unknown');
  const [professionalCategory, setProfessionalCategory] = useState(
    userDetails?.role ?? 'UNKNOWN',
  );
  const [qualifications, setQualifications] = useState(
    userDetails?.qualifications?.map(
      (qualification) => qualification.qualification,
    ) ?? [],
  );
  const [services, setServices] = useState('');

  const [editMode, setEditMode] = useState(false);

  const handleEditProfile = () => {
    setEditMode(!editMode);
  };

  return (
    <>
      <Grid style={{ marginTop: '2rem' }}>
        <Typography fontFamily="Poppins" gutterBottom variant="h6">
          Personal Information
        </Typography>
        <Card sx={{ p: 2, width: '1000px' }}>
          <CardContent>
            <Grid container spacing={4}>
              <Grid item xs={3}>
                <Typography variant="h6">Name:</Typography>
              </Grid>
              <Grid item xs={3}>
                {editMode ? (
                  <>
                    <TextField
                      fullWidth
                      onChange={(e) => setFirstname(e.target.value)}
                      value={firstname}
                      variant="outlined"
                    />
                    <TextField
                      fullWidth
                      onChange={(e) => setLastname(e.target.value)}
                      value={lastname}
                      variant="outlined"
                    />
                  </>
                ) : (
                  <Typography
                    color="textSecondary"
                    fontFamily="Poppins"
                    variant="body1"
                  >
                    {`${firstname} ${lastname}`}
                  </Typography>
                )}
              </Grid>

              <Grid item xs={3}>
                <Typography variant="h6">NIC Number:</Typography>
              </Grid>
              <Grid item xs={3}>
                {editMode ? (
                  <TextField
                    fullWidth
                    onChange={(e) => setNic(e.target.value)}
                    value={nic}
                    variant="outlined"
                  />
                ) : (
                  <Typography
                    color="textSecondary"
                    fontFamily="Poppins"
                    variant="body1"
                  >
                    {nic}
                  </Typography>
                )}
              </Grid>

              <Grid item xs={3}>
                <Typography variant="h6">Email Address:</Typography>
              </Grid>
              <Grid item xs={3}>
                {editMode ? (
                  <TextField
                    fullWidth
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    variant="outlined"
                  />
                ) : (
                  <Typography
                    color="textSecondary"
                    fontFamily="Poppins"
                    variant="body1"
                  >
                    {email}
                  </Typography>
                )}
              </Grid>

              <Grid item xs={3}>
                <Typography variant="h6">Contact Number:</Typography>
              </Grid>
              <Grid item xs={3}>
                {editMode ? (
                  <TextField
                    fullWidth
                    onChange={(e) => setContactNo(e.target.value)}
                    value={contactNo}
                    variant="outlined"
                  />
                ) : (
                  <Typography
                    color="textSecondar"
                    fontFamily="Poppins"
                    variant="body1"
                  >
                    {contactNo}
                  </Typography>
                )}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid style={{ marginTop: '2rem' }}>
        <Typography fontFamily="Poppins" gutterBottom variant="h6">
          Business Information
        </Typography>
        <Card sx={{ p: 2, width: '1000px' }}>
          <CardContent>
            <Grid container spacing={4}>
              <Grid item xs={3}>
                <Typography variant="h6">Business Name:</Typography>
              </Grid>
              <Grid item xs={3}>
                {editMode ? (
                  <TextField
                    fullWidth
                    onChange={(e) => setBusinessName(e.target.value)}
                    value={businessName}
                    variant="outlined"
                  />
                ) : (
                  <Typography
                    color="textSecondary"
                    fontFamily="Poppins"
                    variant="body1"
                  >
                    {businessName}
                  </Typography>
                )}
              </Grid>

              <Grid item xs={3}>
                <Typography variant="h6">Business Contact No:</Typography>
              </Grid>
              <Grid item xs={3}>
                {editMode ? (
                  <TextField
                    fullWidth
                    onChange={(e) => setBusinessContactNo(e.target.value)}
                    value={businessContactNo}
                    variant="outlined"
                  />
                ) : (
                  <Typography
                    color="textSecondary"
                    fontFamily="Poppins"
                    variant="body1"
                  >
                    {businessContactNo}
                  </Typography>
                )}
              </Grid>

              <Grid item xs={3}>
                <Typography variant="h6">Business Location:</Typography>
              </Grid>
              <Grid item xs={3}>
                {editMode ? (
                  <TextField
                    fullWidth
                    onChange={(e) => setDistrict(e.target.value)}
                    value={district}
                    variant="outlined"
                  />
                ) : (
                  <Typography
                    color="textSecondary"
                    fontFamily="Poppins"
                    variant="body1"
                  >
                    {district}
                  </Typography>
                )}
              </Grid>

              <Grid item xs={3}>
                <Typography variant="h6">Professional Category:</Typography>
              </Grid>
              {/* <Grid item xs={3}>
                {editMode ? (
                  <Select
                    fullWidth
                    onChange={(e) => setProfessionalCategory(e.target.value)}
                    value={professionalCategory}
                    variant="outlined"
                  >
                    {professionalCategoryOptions.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                ) : (
                  <Typography
                    color="textSecondary"
                    fontFamily="Poppins"
                    variant="body1"
                  >
                    {professionalCategory}
                  </Typography>
                )}
              </Grid> */}
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid style={{ marginTop: '2rem' }}>
        <Typography fontFamily="Poppins" gutterBottom variant="h6">
          Qualifications
        </Typography>
        <Card sx={{ height: '100px', p: 2, width: '1000px' }}>
          <CardContent>
            {editMode ? (
              <TextField
                fullWidth
                multiline
                onChange={(e) => setQualifications(e.target.value.split(','))}
                rows={2}
                value={qualifications.join(',')}
                variant="outlined"
              />
            ) : (
              <Typography color="textSecondary" variant="body1">
                {qualifications}
              </Typography>
            )}
          </CardContent>
        </Card>
      </Grid>

      <Grid style={{ marginTop: '2rem' }}>
        <Typography fontFamily="Poppins" gutterBottom variant="h6">
          Services
        </Typography>
        <Card sx={{ height: '100px', p: 2, width: '1000px' }}>
          <CardContent>
            {editMode ? (
              <TextField
                fullWidth
                multiline
                onChange={(e) => setServices(e.target.value)}
                rows={2}
                value={services}
                variant="outlined"
              />
            ) : (
              <Typography color="textSecondary" variant="body1">
                {services}
              </Typography>
            )}
          </CardContent>
        </Card>
      </Grid>

      <Grid
        container
        justifyContent="center"
        style={{ marginBottom: '2rem', marginTop: '2rem' }}
      >
        <Button
          color="primary"
          onClick={handleEditProfile}
          sx={{ height: '50px', width: '200px' }}
          variant="contained"
        >
          {editMode ? 'Save Profile' : 'Edit Profile'}
        </Button>
      </Grid>
    </>
  );
}

export default ServiceProviderProfileDetails;
