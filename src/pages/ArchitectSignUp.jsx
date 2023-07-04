// TODO: Add Service Provider Sign In Page with 2 paths (service provider and retail store)
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

function ArchitectSignUp() {
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
              position: 'relative',
              top: '20px',
              left: '-50px'
            }}
          >
            { <img
              src='/signin.png'
              alt=''
             
            /> }
          </Grid>
          <Grid item md={6} xs={12} >
            <Container maxWidth='sm' 
              sx={{
                display:"flex",
                flexDirection:"column"
              }}
            >
            { <Grid style={{display:"flex",justifyContent:"center"}}>
                <img 
                height="40%"
                width="40%"
                src='/Logo.png'
                alt='logo'
                
              />
              </Grid> }
              {/* <Typography variant='h5' sx={{ textAlign: "center",textTransform: "uppercase", color:"#435834",}} >
                Welcome
              </Typography>
             */}
              <Box
                component='form'
                sx={{
                  margin: "10px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
                onSubmit={HandleSubmit}
              >
               {<Grid style={{justifyContent:"center"}}>
                <TextField  InputProps={{ sx: { borderRadius: 2 } }}sx={{ width: 1,margin:2 }}type='email' name='email' label='Email' variant="filled" size="small" />
                <TextField  InputProps={{ sx: { borderRadius: 2 } }}sx={{ width: 1,margin:2 }}type='password' name='password' label='Password'  variant="filled" size="small"/>
                <TextField  InputProps={{ sx: { borderRadius: 2 } }}sx={{ width: 1,margin:2 }}type='ConfirmPassword' name='ConfirmPassword' label='Confirm Password'  variant="filled" size="small"/>
                
                </Grid >}
                {/* <Stack spacing={18} direction='row'>
                <Link  href='/Register'  color="secondary" underline="hover" sx={{ marginLeft: 'auto'}}>Don't have an account? Register</Link> 
                <Link  href='/ForgotPassword'  color="secondary" underline="hover">Forgot Password?</Link>
                </Stack> */}
   
                { <Grid style={{display:"flex",justifyContent:"center",margin:10}}>
                <Button sx={{ width: 1/3,  borderRadius:2 }}type='submit' color="primary" variant="contained" size='large' href="">Sign Up</Button>
                </Grid> }
                
              </Box>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default ArchitectSignUp;