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
      <div style={{ height: '100vh' }}>
        <TopBar title='Sign In to Estructura' />
        <div style={{backgroundImage:"url('/formBg.jpg')", backgroundSize: 'cover', minHeight: '100vh', display: 'flex', justifyContent: 'center',  padding: '100px 0'}}>
        <div style={{padding:20, backgroundColor:"white", borderRadius:20, maxWidth:2000, maxHeight:600}}>
        <Container>
        <Grid maxWidth='lg' minHeight='100vh'  container>
          <Grid item md={6} xs={0}
            style={{
              position: 'relative',
              top: '-50px',
              left: '-40px'
            }}
          >
            { <img
              width='110%'
              height='90%'
              src='/signin.png'
              alt='signin'
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
                style={{marginTop: '50px'}}
                
              />
              </Grid> }
              <Typography variant='h5' sx={{ textAlign: "center",textTransform: "uppercase", color:"#435834", marginTop:'50px'}} >
                Welcome Back
              </Typography>
            
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
                <TextField  InputProps={{ sx: { borderRadius: 2 } }}sx={{ width: 1,margin:1 }}type='email' name='email' label='Email' variant="filled" size="small" color="secondary" />
                <TextField  InputProps={{ sx: { borderRadius: 2 } }}sx={{ width: 1,margin:1 }}type='password' name='password' label='Password'  variant="filled" size="small" color='secondary'/>
                
                </Grid >}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Link href='/Register' color="secondary" underline="hover" sx={{ marginLeft: '10px' }}>Don't have an account? Register</Link>
                  <Link href='/ForgotPassword' color="secondary" underline="hover">Forgot Password?</Link>
                </div>
   
                { <Grid style={{display:"flex",justifyContent:"center",margin:10}}>
                <Button sx={{ width: 1/3,  borderRadius:2 }}type='submit' color="primary" variant="contained" size='large'>Sign In</Button>
                </Grid> }
                
              </Box>
            </Container>
          </Grid>
        </Grid>
      </Container>
        </div>
        </div>
        </div>
      
      

      
   
  );
}

export default SignIn;