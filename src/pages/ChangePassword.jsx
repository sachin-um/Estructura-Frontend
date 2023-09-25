import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'oldPassword':
        setOldPassword(value);
        break;
      case 'newPassword':
        setNewPassword(value);
        break;
      case 'confirmNewPassword':
        setConfirmNewPassword(value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Your logic to handle the password change submission goes here
    if (newPassword === confirmNewPassword) {
      console.log('Password change successful');
    } else {
      console.log('New passwords do not match');
    }
  };
  return (
    <>
      <Container
        style={{
          marginTop: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Change Password Panel */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem',
            width: '50%',
          }}
        >
          <Grid
            item
            style={{
              marginBottom: '-2rem',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <img src="/Logo.png" alt="Logo" style={{ width: '30%' }} />
          </Grid>
          <Typography style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>
            Change Your Password
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              type="password"
              name="oldPassword"
              label="Old Password"
              variant="outlined"
              value={oldPassword}
              onChange={handleChange}
              style={{ marginBottom: '1.3rem' }}
            />
            <TextField
              fullWidth
              type="password"
              name="newPassword"
              label="New Password"
              variant="outlined"
              value={newPassword}
              onChange={handleChange}
              style={{ marginBottom: '1.3rem' }}
            />
            <TextField
              fullWidth
              type="password"
              name="confirmNewPassword"
              label="Confirm New Password"
              variant="outlined"
              value={confirmNewPassword}
              onChange={handleChange}
              style={{ marginBottom: '1.3rem' }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginBottom: '1.3rem' }}
            >
              Change Password
            </Button>
          </form>
        </Box>
      </Container>
    </>
  );
};
export default ChangePassword;
