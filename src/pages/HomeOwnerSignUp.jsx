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

function HomeOwnerSignUp() {
  return (
    <>
      <TopBar title='Sign up as a Homeowner' />
      <Container>
        <Grid maxwidth='lg' minHeight='100vh' container>
          <Grid item md={6} xs={0}
            style={{
              position: 'relative',
              top: '20px',
              left: '-100px'
            }}
          >
            { <img
              width='120%'
              height='100%'
              src='/homeowner.png'
              alt='homeownersignupImg'
            /> }
            
          </Grid>
          
          <Grid item md={6} xs={12}>
            <Container maxWidth='sm'
              sx={{
                display: 'flex',
                flexDirection: 'column'
              }}
            >
            { <Grid style={{display:"flex", justifyContent:"center"}}>
                <img 
                  height='40%'
                  width='40%'
                  src='/Logo.png'
                  alt='logo'
                />
              </Grid>}

              <Box
                component='form'
                sx={{
                  margin: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                }}
                //onSubmit={HandleSubmit}
              >
                {<Grid style={{justifyContent:"center"}}>
                <TextField  InputProps={{ sx: { borderRadius: 2 } }}sx={{ width: 1,margin:1 }}type='email' name='email' label='Email' variant="filled" size="small" />
                <Box sx={{ display: 'flex', gap: '10px'}}>
                  <TextField  
                    InputProps={{ sx: { borderRadius: 2 } }}
                    sx={{ flex: '1', margin:1 }}
                    type='firstName' 
                    name='firstName' 
                    label='First Name'  
                    variant="filled" 
                    size="small"
                  />
                  <TextField  
                    InputProps={{ sx: { borderRadius: 2 } }}
                    sx={{ flex: '1', margin:1 }}
                    type='lastName' 
                    name='lastName' 
                    label='Last Name'  
                    variant="filled" 
                    size="small"
                  />
                </Box>
                <TextField  InputProps={{ sx: { borderRadius: 2 } }}sx={{ width: 1,margin:1 }}type='contactNo' name='contactNo' label='Contact Number' variant="filled" size="small" />
                <TextField  InputProps={{ sx: { borderRadius: 2 } }}sx={{ width: 1,margin:1 }}type='password' name='password' label='Password' variant="filled" size="small" />
                <TextField  InputProps={{ sx: { borderRadius: 2 } }}sx={{ width: 1,margin:1 }}type='confirmPassword' name='confirmPassword' label='Confirm Password' variant="filled" size="small" />
                <Box sx={{ display: 'flex', gap: '10px'}}>
                  <TextField  
                    InputProps={{ sx: { borderRadius: 2 } }}
                    sx={{ flex: '1', margin:1 }}
                    type='houseNo' 
                    name='housrNo' 
                    label='House No' 
                    variant="filled" 
                    size="small" 
                  />
                  <TextField  
                    InputProps={{ sx: { borderRadius: 2 } }}
                    sx={{ flex: '1', margin:1 }}
                    type='lane' 
                    name='lane' 
                    label='Lane'
                    variant="filled" 
                    size="small" 
                  />
                </Box>
                
                
                </Grid >}
                <Stack spacing={18} direction='row'>
                <Link  href='/Register'  color="secondary" underline="hover" sx={{ marginLeft: 'auto'}}>Don't have an account? Register</Link> 
                <Link  href='/ForgotPassword'  color="secondary" underline="hover">Forgot Password?</Link>
                </Stack>
   
                { <Grid style={{display:"flex",justifyContent:"center",margin:10}}>
                <Button sx={{ width: 1/3,  borderRadius:2 }}type='submit' color="primary" variant="contained" size='large'>Sign In</Button>
                </Grid> }
                
              </Box>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
export default HomeOwnerSignUp;
