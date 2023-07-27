import { Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
// import { Link } from "react-router-dom" ;

function ForgotPasswordPage1({
  handleDropdownChange,
  nextPage,
  updateFormData,
}) {
  const HandleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(formData.get('email'), formData.get('password'));
  };

  const handleNext = () => {
    nextPage();
  };
  // TODO: Change Layout
  return (
    <>
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
        <Grid style={{ display: 'flex', justifyContent: 'center', margin: 2 }}>
          <Button
            color="primary"
            onClick={handleNext}
            size="large"
            sx={{ borderRadius: 2, width: 1 / 2 }}
            type="submit"
            variant="contained"
          >
            Send OTP
          </Button>
        </Grid>
      }
    </>
  );
}

export default ForgotPasswordPage1;
