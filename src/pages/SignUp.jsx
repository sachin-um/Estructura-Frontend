import { Button, Container, Grid, Typography } from "@mui/material";
import TopBar from "../components/TopBar";

function SignUp() {
  return (
    <>
      <TopBar title='Register to Estructura' />
      <Container maxWidth='md' sx={{ display: "flex" }}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography variant='h4'>I am a Homeowner</Typography>
            I want to build my dream house
            <br />
            <Button variant='contained' href='/SignUp/HomeOwner'>
              Sign up as a Homeowner
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant='h4'>I am a Service Provider</Typography>
            I provide services related to home improvement or sell home products
            <br />
            <Button variant='contained' href='/SignUp/#'>
              Sign up as a Service Provider
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default SignUp;
