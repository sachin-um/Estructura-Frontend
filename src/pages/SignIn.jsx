import TopBar from "../components/TopBar";
import React from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  const HandleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(formData.get("email"));
  };

  return (
    <>
      <TopBar title='Sign In' />
      <div
        style={{
          backgroundColor: '#f7f8f1', 
          height: '100vh',
          padding: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start', 
        }}
      >
        <div
          style={{
            backgroundImage: 'url("/formBg.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%',
            width: '60%', 
            position: 'relative', 
            borderRadius: '20px 20px 20px 20px',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '85%', 
              left: '28%',
              transform: 'translate(-50%, -50%)',
              color: '#ffffff', 
              fontSize: '1.5rem', 
              textAlign: 'center', 
              lineHeight: '0.7',
            }}
          >
            <p>Unleash your home’s potential</p>
            <p>with everything at your fingertips</p>
          </div>
        </div>
        <div
          style={{
            backgroundColor: '#ffffff', 
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            borderRadius: '20px 20px 20px 20px', 
            padding: '1rem 2rem 6rem', 
            width: '40%', 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: '2rem', 
            boxSizing: 'border-box', 
          }}
        >
          <img src="/Logo.png" alt="Logo" style={{ width: '40%', marginBottom: '2rem' }} /> 
          <Typography variant="h5" gutterBottom style={{ marginBottom: '2rem', textAlign: 'center', color: '#435834' }}>
            Welcome Back
          </Typography>
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              width: '100%', 
              maxWidth: '400px',
              margin: '0 auto', 
            }}
            onSubmit={handleSubmit}
          >
            <TextField label="Email" type="email" name="email" fullWidth variant="filled" color='secondary' /> 
            <TextField label="Password" type="password" name="password" fullWidth variant="filled" color='secondary' /> 
            <Grid container justifyContent="space-between"> 
              <Grid item>
                <Link to="/register" style={{ color: '#9D6432', textDecoration: 'none' }}>Don't have an account? Register</Link> 
              </Grid>
              <Grid item>
                <Link to="/ForgotPassword" style={{ color: '#9D6432', textDecoration: 'none' }}>Forgot Password?</Link> 
              </Grid>
            </Grid>
            <Button variant="contained" color="primary" type="submit" fullWidth style={{ marginTop: '1.5rem' }}>
              Sign In
            </Button>
            <Button variant="outlined" color="primary" fullWidth style={{ marginTop: '0.5rem', color: '#000000', borderColor: '#304422' }} startIcon={<img src="/google.png" alt="Google Logo" style={{ height: '1.5rem', marginRight: '0.5rem' }} />}>
              Sign in with Google
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
