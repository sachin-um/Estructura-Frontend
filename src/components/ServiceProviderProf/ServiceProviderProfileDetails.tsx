import {
  Button,
  Card,
  CardContent,
  Chip,
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
  const [businessName, setBusinessName] = useState(
    userDetails?.businessName ?? 'Unknown',
  );
  const [businessContactNo, setBusinessContactNo] = useState(
    userDetails?.businessContactNo ?? 'Unknown',
  );
  const [district, setDistrict] = useState(userDetails?.district ?? 'Unknown');
  const [city, setCity] = useState(userDetails?.city ?? 'Unknown');
  const [qualifications, setQualifications] = useState(
    userDetails?.qualifications?.map(
      (qualification) => qualification.qualification,
    ) ?? [],
  );
  const [specializations, setSpecializations] = useState(
    userDetails?.specializations?.map(
      (specialization) => specialization.specialization,
    ),
  );

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
              <Grid item xs={editMode ? 9 : 3}>
                {editMode ? (
                  <div style={{ display: 'inline-flex', gap: '.5rem' }}>
                    <TextField
                      fullWidth
                      label="First Name"
                      onChange={(e) => setFirstname(e.target.value)}
                      value={firstname}
                      variant="outlined"
                    />
                    <TextField
                      fullWidth
                      label="Last Name"
                      onChange={(e) => setLastname(e.target.value)}
                      value={lastname}
                      variant="outlined"
                    />
                  </div>
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
                    label="NIC Number"
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
                <Typography variant="h6">Contact Number:</Typography>
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
              <Grid alignItems={'center'} item xs={3}>
                {editMode ? (
                  <TextField
                    fullWidth
                    label="Business Name"
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
                    label="Business Contact No"
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
              <Grid item xs={editMode ? 9 : 3}>
                {editMode ? (
                  <div style={{ display: 'inline-flex', gap: '.5rem' }}>
                    <TextField
                      fullWidth
                      label="City"
                      onChange={(e) => setDistrict(e.target.value)}
                      value={city}
                      variant="outlined"
                    />
                    <TextField
                      fullWidth
                      label="District"
                      onChange={(e) => setCity(e.target.value)}
                      value={district}
                      variant="outlined"
                    />
                  </div>
                ) : (
                  <Typography
                    color="textSecondary"
                    fontFamily="Poppins"
                    variant="body1"
                  >
                    {`${city}, ${district}`}
                  </Typography>
                )}
              </Grid>
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
                label="Qualifications, separated by commas"
                multiline
                onChange={(e) => setQualifications(e.target.value.split(','))}
                rows={2}
                value={qualifications.join(',')}
                variant="outlined"
              />
            ) : (
              <div>
                {qualifications.map((qualification) => (
                  <Chip
                    key={qualification}
                    label={qualification}
                    sx={{ marginRight: '.5rem' }}
                  />
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </Grid>

      <Grid style={{ marginTop: '2rem' }}>
        <Typography fontFamily="Poppins" gutterBottom variant="h6">
          Specializations
        </Typography>
        <Card sx={{ height: '100px', p: 2, width: '1000px' }}>
          <CardContent>
            {editMode ? (
              <TextField
                fullWidth
                multiline
                onChange={(e) => setSpecializations(e.target.value.split(','))}
                rows={2}
                value={specializations?.join(',')}
                variant="outlined"
              />
            ) : (
              <Typography color="textSecondary" variant="body1">
                {specializations?.join(',')}
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
