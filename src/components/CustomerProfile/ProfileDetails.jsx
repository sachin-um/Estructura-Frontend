import React, { useState } from 'react';
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  TextField,
  Select,
  MenuItem,
} from '@mui/material';

function ProfileDetails() {
  const [name, setName] = useState('John Doe');
  const [nic, setNic] = useState('1234567890');
  const [email, setEmail] = useState('johndoe@example.com');
  const [contactNo, setContactNo] = useState('+1 234 567 890');
  const [address, setAddress] = useState('Colombo');

  const [editMode, setEditMode] = useState(false);

  const handleEditProfile = () => {
    setEditMode(!editMode);
  };

  return (
    <>
      <Grid style={{ marginTop: '2rem' }}>
        <Typography variant="h6" gutterBottom fontFamily="Poppins">
          Personal Information
        </Typography>
        <Card sx={{ width: '1000px', p: 2 }}>
          <CardContent>
            <Grid container spacing={4}>
              <Grid item xs={3}>
                <Typography variant="h7">Name:</Typography>
              </Grid>
              <Grid item xs={3}>
                {editMode ? (
                  <TextField
                    variant="outlined"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                ) : (
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    fontFamily="Poppins"
                  >
                    {name}
                  </Typography>
                )}
              </Grid>

              <Grid item xs={3}>
                <Typography variant="h7">NIC Number:</Typography>
              </Grid>
              <Grid item xs={3}>
                {editMode ? (
                  <TextField
                    variant="outlined"
                    fullWidth
                    value={nic}
                    onChange={(e) => setNic(e.target.value)}
                  />
                ) : (
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    fontFamily="Poppins"
                  >
                    {nic}
                  </Typography>
                )}
              </Grid>

              <Grid item xs={3}>
                <Typography variant="h7">Email Address:</Typography>
              </Grid>
              <Grid item xs={3}>
                {editMode ? (
                  <TextField
                    variant="outlined"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                ) : (
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    fontFamily="Poppins"
                  >
                    {email}
                  </Typography>
                )}
              </Grid>

              <Grid item xs={3}>
                <Typography variant="h7">Contact Number:</Typography>
              </Grid>
              <Grid item xs={3}>
                {editMode ? (
                  <TextField
                    variant="outlined"
                    fullWidth
                    value={contactNo}
                    onChange={(e) => setContactNo(e.target.value)}
                  />
                ) : (
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    fontFamily="Poppins"
                  >
                    {contactNo}
                  </Typography>
                )}
              </Grid>

              <Grid item xs={3}>
                <Typography variant="h7">Address:</Typography>
              </Grid>
              <Grid item xs={3}>
                {editMode ? (
                  <TextField
                    variant="outlined"
                    fullWidth
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                ) : (
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    fontFamily="Poppins"
                  >
                    {address}
                  </Typography>
                )}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid
        container
        justifyContent="center"
        style={{ marginTop: '2rem', marginBottom: '2rem' }}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{ width: '200px', height: '50px' }}
          onClick={handleEditProfile}
        >
          {editMode ? 'Save Profile' : 'Edit Profile'}
        </Button>
      </Grid>
    </>
  );
}

export default ProfileDetails;
