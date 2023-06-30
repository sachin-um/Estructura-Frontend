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

function ForgotPassword() {
  const HandleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(formData.get("email"));
  };

  return (
      <div style={{ height: '50vh '}}>
        <TopBar title='Forgot Password' />
        <div style={{backgroundImage:"url('/formBg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '100px 0'}}>
        <div style={{padding:10, backgroundColor:"white", borderRadius:20, maxWidth:1000, maxHeight:550}}>
        <Container>
        <Grid maxwidth = 'lg' minHeight='100vh' container>
          <Grid item md={6} xs={0}
            style={{
              position: 'relative',
              top: '-30px',
              left: '-70px'
            }}
          >
            { <img
              width='130%'
              height='80%'
              src='ForgotPsw.png'
              alt="ForgotPasswordImg"
            />}
          </Grid>
          <Grid item md={6} xs={12} >
            <Container maxWidth= 'sm'
              sx={{
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              { <div>
                <img 
                height="40%"
                width="40%"
                src='/Logo.png'
                alt='logo'
                style={{paddingLeft:'30%',
                marginTop: '50px'  
              }}
                />
              </div>}
              <Typography variant='h5' sx={{ textAlign: 'center', color:"#435834", marginTop: '30px'}}>
                  Forgot your password?
              </Typography>

              <Box 
                component='form'
                sx={{
                  margin: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  marginTop: '50px',
                }}
                onSubmit={HandleSubmit}
              >
                <TextField InputProps={{ sx: { borderRadius: 2 }}} sx={{ width: 1, margin: 1}} type='email' name='email' label="Email" variant='filled' size='small' color='secondary' />
                
                <Button sx={{width: 1/3, padding: 1, marginLeft: 18, borderRadius: 2, marginTop: 5}} type='submit' color='primary' variant='contained' size='large'>Send OTP</Button>
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

export default ForgotPassword;
