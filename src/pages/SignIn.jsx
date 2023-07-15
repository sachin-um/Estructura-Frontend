import TopBar from "../components/TopBar";
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function SignIn() {
  const HandleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(formData.get("email"), formData.get("password"));
  };

  return (
    <>
      <TopBar title='Sign In' />
      <Container
        maxWidth={false}
        style={{ backgroundColor: '#f7f8f1', minHeight: '100vh', display: 'flex', alignItems: 'center' }}
      >
        <Grid container justifyContent="center" spacing={4}>
          <Grid item xs={12} md={7} lg={7}>
            <Grid
              container
              style={{
                backgroundImage: 'url("/formBg.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '20px',
                height: '100%',
                display: 'flex',
                alignItems: 'flex-end',
              }}
            >
              <Grid item xs={12} style={{ paddingLeft: '4rem', paddingRight: '1rem', marginBottom: '2rem' }}>
                <Typography
                  variant="h4"
                  style={{
                    color: '#ffffff',
                    fontSize: '1.5rem',
                    textAlign: 'left',
                    lineHeight: '1',
                    paddingBottom: '1rem',
                    marginTop: 'auto',
                  }}
                >
                  Unleash your home’s potential
                </Typography>
                <Typography
                  variant="h4"
                  style={{
                    color: '#ffffff',
                    fontSize: '1.5rem',
                    textAlign: 'left',
                    lineHeight: '1',
                  }}
                >
                  with everything at your fingertips
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5} lg={5}> 
            <Grid
              container
              style={{
                backgroundColor: '#ffffff',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                borderRadius: '20px',
                padding: '1rem 2rem 3rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '2rem',
                marginBottom: '2rem',
              }}
            >
              <Grid item xs={12} style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                <img src="/Logo.png" alt="Logo" style={{ width: '40%' }} />
              </Grid>
              <Grid item xs={12} style={{ marginBottom: '1rem' }}>
                <Typography variant="h5" gutterBottom style={{ textAlign: 'center', color: '#435834' }}>
                  Welcome Back
                </Typography>
              </Grid>
              <Grid item xs={12} style={{ marginTop: '1rem' }}>
                <form
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    width: '100%',
                    maxWidth: '400px',
                    margin: '0 auto',
                  }}
                  onSubmit={HandleSubmit}
                >
                  <TextField label="User Name or Email" type="email" name="email" fullWidth variant="filled" color='secondary'  />
                  <TextField label="Password" type="password" name="password" fullWidth variant="filled" color='secondary'  />
                  <Grid container justifyContent="space-between">
                    <Grid item style={{ marginRight: '3rem' }}>
                      <Link to="/SignUp" style={{ color: '#9D6432', textDecoration: 'none' }}>Don't have an account? Register</Link>
                    </Grid>
                    <Grid item>
                      <Link to="/ForgotPassword" style={{ color: '#9D6432', textDecoration: 'none' }}>Forgot Password?</Link>
                    </Grid>
                  </Grid>
                  <Button variant="contained" color="primary" type="submit" fullWidth style={{ marginTop: '1.5rem' }}>
                    Sign In
                  </Button>
                  {/* <Button variant="outlined" color="primary" fullWidth style={{ marginTop: '0.5rem', color: '#000000', borderColor: '#304422' }} startIcon={<img src="/google.png" alt="Google Logo" style={{ height: '1.5rem', marginRight: '0.5rem' }} />}>
                    Sign in with Google
                  </Button> */}
                </form>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default SignIn;
