import TopBar from "../components/TopBar";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

function HomeOwnerSignUp() {
  return (
    <>
      <TopBar title='Sign up as a Homeowner' />
      <Container maxWidth='sm' sx={{ marginTop: "20px" }}>
        <Box
          component='form'
          sx={{
            margin: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Typography variant='h4' sx={{ textAlign: "center" }}>
            Sign up as a Homeowner
          </Typography>
          <TextField type='email' label='Email' />
          <Grid container style={{ justifyContent: "space-between" }}>
            <TextField type='text' label='First Name' />
            <TextField type='text' label='Last Name' />
          </Grid>
          <TextField
            type='tel'
            inputProps={{ pattern: /(\+94\d{9})|0\d{9}/, maxLength: 12 }}
            label='Contact Number'
          />
          <TextField type='password' label='Password' />
          <TextField type='password' label='Confirm Password' />
          <TextField type='text' label='Address' />
          <Button variant='contained' type='submit'>
            Sign Up
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default HomeOwnerSignUp;
