import TopBar from "../components/TopBar";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

function ForgotPassword() {
  const HandleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(formData.get("email"));
  };

  return (
    <>
      <TopBar title='Forgot Password' />
      <Container maxWidth='sm' sx={{ marginTop: "20px" }}>
        <Typography variant='h4' sx={{ textAlign: "center" }}>
          Forgot your password?
        </Typography>
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
          <Button variant='contained' type='submit'>
            Send OTP
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default ForgotPassword;
