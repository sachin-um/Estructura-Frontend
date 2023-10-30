import { Button, Grid, TextField, Typography } from '@mui/material';
// import { Link } from "react-router-dom" ;

function ForgotPasswordPage2() {
  const HandleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(formData.get('email'), formData.get('password'));
  };

  // TODO: Change Layout
  return (
    <>
      {
        <Grid style={{ justifyContent: 'center', minHeight: '30vh' }}>
          <Typography
            gutterBottom
            style={{ color: '#435834', textAlign: 'center' }}
            variant="h5"
          >
            Enter New Password
          </Typography>

          <TextField
            InputProps={{ sx: { borderRadius: 2 } }}
            label="Password"
            name="password"
            size="small"
            sx={{ margin: 2, width: 1 }}
            type="password"
            variant="filled"
          />
          <TextField
            InputProps={{ sx: { borderRadius: 2 } }}
            label="Confirm Password"
            name="ConfirmPassword"
            size="small"
            sx={{ margin: 2, width: 1 }}
            type="ConfirmPassword"
            variant="filled"
          />
        </Grid>
      }

      {
        <Grid style={{ display: 'flex', justifyContent: 'center', margin: 1 }}>
          <Button
            color="primary"
            size="large"
            sx={{ borderRadius: 2, width: 1 / 2 }}
            type="submit"
            variant="contained"
          >
            Submit
          </Button>
        </Grid>
      }
    </>
  );
}

export default ForgotPasswordPage2;
