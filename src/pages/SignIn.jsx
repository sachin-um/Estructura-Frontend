import TopBar from "../components/TopBar";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Link,
  TextField,
  Typography,
} from "@mui/material";
// import { Link } from "react-router-dom" ;

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

      <Container>
        <Grid maxWidth='lg' minHeight='100vh'  container>
          <Grid item md={6} xs={0}
            style={{
            }}
          >
            { <img
              width='100%'
              height='100%'
              src='/sign.jpeg'
              alt='kella ko?'
             
            /> }
          </Grid>
          <Grid item md={6} xs={12} >
            <Container maxWidth='sm' 
              sx={{
                display:"flex",
                flexDirection:"column"
              }}
            >
            { <div>
                <img 
                height="40%"
                width="40%"
                src='/logo.jpg'
                alt='logo'
                style={{paddingLeft:'30%'}}
                
              />
              </div> }
              <Typography variant='h5' sx={{ textAlign: "center",textTransform: "uppercase", color:"#435834",}} >
                Welcome Back
              </Typography>
            
              <Box
                component='form'
                sx={{
                  margin: "10px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
                onSubmit={HandleSubmit}
              >
                <TextField  InputProps={{ sx: { borderRadius: 2 } }}sx={{ width: 1,margin:1 }}type='email' name='email' label='Email' variant="filled" size="small" />
                <TextField  InputProps={{ sx: { borderRadius: 2 } }}sx={{ width: 1,margin:1 }}type='password' name='password' label='Password'  variant="filled" size="small"/>
                <Stack spacing={18} direction='row'>
                <Link  href='/Register'  color="secondary" underline="hover">Don't have an account? Register</Link> 
                <Link  href='/ForgotPassword'  color="secondary" underline="hover">Forgot Password?</Link>
                </Stack>
   
                <Button sx={{ width: 1/3, padding: 1, marginLeft: 23,borderRadius:2 ,marginTop:5}}type='submit' color="primary" variant="contained" size='large'>Sign In</Button>
              </Box>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default SignIn;