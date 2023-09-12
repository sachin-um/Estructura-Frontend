import { Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
// import { Link } from "react-router-dom" ;

function ForgotPasswordPage1({}) {
  const [formData, setFormData] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    const formDataList = new FormData(event.currentTarget);
    setFormData(formDataList.get('email'));
    console.log(formData);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        {
          <Grid style={{ justifyContent: 'center', minHeight: '30vh' }}>
            <Typography
              style={{
                color: '#435834',
                marginBottom: '50px',
                textAlign: 'center',
              }}
              gutterBottom
              variant="h5"
            >
              Forgot your Password?
            </Typography>

            <TextField
              InputProps={{ sx: { borderRadius: 2 } }}
              label="Email"
              name="email"
              size="small"
              sx={{ margin: 2, width: 1 }}
              type="email"
              variant="filled"
            />
          </Grid>
        }

        {
          <Grid
            style={{ display: 'flex', justifyContent: 'center', margin: 2 }}
          >
            <Button
              color="primary"
              size="large"
              sx={{ borderRadius: 2, width: 1 / 2 }}
              type="submit"
              variant="contained"
            >
              Send OTP
            </Button>
          </Grid>
        }
      </form>
    </>
  );
}

export default ForgotPasswordPage1;
