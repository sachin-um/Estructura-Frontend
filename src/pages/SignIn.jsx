import TopBar from "../components/TopBar";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function SignIn() {
  const HandleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(formData.get("email"), formData.get("password"));
  };

  // TODO: Change Layout
  return (
    <>
      <TopBar title='Sign In to Estructura' />
      <Container maxWidth='sm' sx={{ marginTop: "20px" }}>
        <Typography variant='h4' sx={{ textAlign: "center" }}>
          Welcome Back
        </Typography>
        <Link to='/Register'>Don't have an account? Register</Link>
        <Box
          component='form'
          sx={{
            margin: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
          onSubmit={HandleSubmit}
        >
          <TextField type='email' name='email' label='Email' />
          <TextField type='password' name='password' label='Password' />
          <Link to='/ForgotPassword'>Forgot Password?</Link>
          <Button variant='contained' type='submit'>
            Sign In
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default SignIn;
