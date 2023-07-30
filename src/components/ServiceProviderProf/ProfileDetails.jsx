import React, { useState } from 'react';
import { Grid, Typography, Card, CardContent, Button, TextField, Select, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import "../../assets/font.css";

const professionalCategoryOptions = [
  'Construction Companies',
  'Architects',
  'Interior Designers',
  'Landscape Architects',
  'Home Builders', 
  'Carpenters',
  'Painters'
]

function ProfileDetails() {
  const [name, setName] = useState('John Doe');
  const [nic, setNic] = useState('1234567890');
  const [email, setEmail] = useState('johndoe@example.com');
  const [contactNo, setContactNo] = useState('+1 234 567 890');
  const [businessName, setBusinessName] = useState('Sleek Architects');
  const [businessContactNo, setBusinessContactNo] = useState('+94 77 7392837');
  const [businessLocation, setBusinessLocation] = useState('Colombo');
  const [professionalCategory, setProfessionalCategory] = useState('Architect');
  const [qualifications, setQualifications] = useState('');
  const [services, setServices] = useState('');

  const [editMode, setEditMode] = useState(false);

  const handleEditProfile = () => {
    setEditMode(!editMode);
  };

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
                <Typography variant="body1">
                  <strong>Name:</strong>
                </Typography>
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
                  <Typography variant="body1" color="textSecondary">
                    {name}
                  </Typography>
                )}
              </Grid>

              
              <Grid item xs={3}>
                <Typography variant="body1">
                  <strong>NIC Number:</strong>
                </Typography>
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
                  <Typography variant="body1" color="textSecondary">
                    {nic}
                  </Typography>
                )}
              </Grid>

              <Grid item xs={3}>
                <Typography variant="body1">
                  <strong>Email Address:</strong>
                </Typography>
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
                  <Typography variant="body1" color="textSecondary">
                    {email}
                  </Typography>
                )}
              </Grid>

              <Grid item xs={3}>
                <Typography variant="body1">
                  <strong>Contact Number:</strong>
                </Typography>
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
                  <Typography variant="body1" color="textSecondary">
                    {contactNo}
                  </Typography>
                )}
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
                <Typography variant="body1">
                  <strong>Business Name:</strong>
                </Typography>
              </Grid>
              <Grid item xs={3}>
                {editMode ? (
                  <TextField
                    variant="outlined"
                    fullWidth
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                  />
                ) : (
                  <Typography variant="body1" color="textSecondary">
                    {businessName}
                  </Typography>
                )}
              </Grid>

              <Grid item xs={3}>
                <Typography variant="body1">
                  <strong>Business Contact No:</strong>
                </Typography>
              </Grid>
              <Grid item xs={3}>
                {editMode ? (
                  <TextField
                    variant="outlined"
                    fullWidth
                    value={businessContactNo}
                    onChange={(e) => setBusinessContactNo(e.target.value)}
                  />
                ) : (
                  <Typography variant="body1" color="textSecondary">
                    {businessContactNo}
                  </Typography>
                )}
              </Grid>

              <Grid item xs={3}>
                <Typography variant="body1">
                  <strong>Business Location:</strong>
                </Typography>
              </Grid>
              <Grid item xs={3}>
                {editMode ? (
                  <TextField
                    variant="outlined"
                    fullWidth
                    value={businessLocation}
                    onChange={(e) => setBusinessLocation(e.target.value)}
                  />
                ) : (
                  <Typography variant="body1" color="textSecondary">
                    {businessLocation}
                  </Typography>
                )}
              </Grid>

              <Grid item xs={3}>
                <Typography variant="body1">
                  <strong>Professional Category:</strong>
                </Typography>
              </Grid>
              <Grid item xs={3}>
                {editMode ? (
                  <Select
                    variant='outlined'
                    fullWidth
                    value={professionalCategory}
                    onChange={(e) => setProfessionalCategory(e.target.value)} 
                  >
                    {professionalCategoryOptions.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                ) : (
                  <Typography variant="body1" color="textSecondary">
                    {professionalCategory}
                  </Typography>
                )}
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
            {editMode ? (
              <TextField
                variant="outlined"
                fullWidth
                multiline
                rows={2}
                value={qualifications}
                onChange={(e) => setQualifications(e.target.value)}
              />
            ) : (
              <Typography variant="body1" color="textSecondary">
                {qualifications}
              </Typography>
            )}
          </CardContent>
        </Card>
      </Grid>

      <Grid style={{ marginTop: '2rem' }}>
        <Typography variant="h6" gutterBottom>
          Services
        </Typography>
        <Card sx={{ width: '1000px', height: '100px', p: 2 }}>
          <CardContent>
            {editMode ? (
              <TextField
                variant="outlined"
                fullWidth
                multiline
                rows={2}
                value={services}
                onChange={(e) => setServices(e.target.value)}
              />
            ) : (
              <Typography variant="body1" color="textSecondary">
                {services}
              </Typography>
            )}
          </CardContent>
        </Card>
      </Grid>

      <Grid container justifyContent="center" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
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
