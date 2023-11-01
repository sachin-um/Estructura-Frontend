// TODO: Add Service Provider Sign In Page with 2 paths (service provider and retail store)
import { Container, Grid, Typography, Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TopBar from '../components/TopBar';
import API from '../lib/API';
function ForgotPassword() {
  const [formData, setFormData] = useState({ email: '' });
  const handleSubmit = (event) => {
    event.preventDefault();
    const formDataList = new FormData(event.currentTarget);
    setFormData({ email: formDataList.get('email') });
  };

  useEffect(() => {
    if (formData.email) {
      API.post('/auth/password-reset-request', formData)
        .then((res) => {
          if (res.status === 200) {
            if (res.data.success === true) {
              window.location.href = '/reset-request-success';
            } else {
              alert(res.data.message);
            }
          } else {
            alert('Invalid Credentials');
          }
        })
        .catch((err) => console.log(JSON.stringify(err)));
    }
  });

  // TODO: Change Layout
  return (
    <>
      <TopBar title="Sign In to Estructura" />

      <Container
        style={{
          alignItems: 'center',
          backgroundColor: '#f7f8f1',
          display: 'flex',
          minHeight: '100vh',
        }}
        maxWidth={false}
      >
        <Grid container justifyContent="center" spacing={4}>
          <Grid
            style={{
              marginTop: '2rem',
              paddingBottom: '2rem',
              paddingTop: '2rem',
            }}
            item
            md={7}
            xs={12}
          >
            <Grid
              style={{
                alignItems: 'flex-end',
                backgroundImage: 'url("/forgotpassword.jpg")',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                borderRadius: '20px',
                display: 'flex',
                height: '100%',
              }}
              container
            >
              <Grid
                style={{
                  marginBottom: '2rem',
                  paddingLeft: '4rem',
                  paddingRight: '1rem',
                }}
                item
                xs={12}
              >
                <Typography
                  style={{
                    color: '#000000',
                    fontSize: '1.5rem',
                    lineHeight: '1',
                    marginTop: 'auto',
                    paddingBottom: '1rem',
                    textAlign: 'left',
                    fontWeight: 'bold',
                  }}
                  variant="h4"
                >
                  Unleash your home’s potential
                </Typography>
                <Typography
                  style={{
                    color: '#000000',
                    fontSize: '1.5rem',
                    lineHeight: '1',
                    textAlign: 'left',
                    fontWeight: 'bold',
                  }}
                  variant="h4"
                >
                  with everything at your fingertips
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={5} xs={12}>
            <Grid
              style={{
                alignItems: 'center',
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginBottom: '2rem',
                marginTop: '2rem',
                padding: '1rem 2rem 3rem',
              }}
              container
            >
              <Grid
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                }}
                item
                xs={12}
              >
                <img alt="Logo" src="/Logo.png" style={{ width: '40%' }} />
              </Grid>
              <Grid item style={{ marginTop: '1rem' }} xs={12}></Grid>

              <Grid>
                <form onSubmit={handleSubmit}>
                  {
                    <Grid
                      style={{ justifyContent: 'center', minHeight: '30vh' }}
                    >
                      <Typography
                        style={{
                          color: '#435834',
                          marginBottom: '50px',
                          textAlign: 'center',
                        }}
                        gutterBottom
                        variant="h5"
                      >
                        Forgot your Password?
                      </Typography>

                      <TextField
                        InputProps={{ sx: { borderRadius: 2 } }}
                        label="Email"
                        name="email"
                        size="small"
                        sx={{ margin: 2, width: 1 }}
                        type="email"
                        variant="filled"
                      />
                    </Grid>
                  }

                  {
                    <Grid
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        margin: 2,
                      }}
                    >
                      <Button
                        color="primary"
                        size="large"
                        sx={{ borderRadius: 2, width: 1 / 2 }}
                        type="submit"
                        variant="contained"
                      >
                        Send Link
                      </Button>
                    </Grid>
                  }
                </form>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default ForgotPassword;
// import TopBar from "../components/TopBar";
// import { Button, Container, Grid, TextField, Typography, Box } from '@mui/material';
// import { Link } from 'react-router-dom';

// function ForgotPassword() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.currentTarget);
//     console.log(formData.get("email"));
//   };

//   return (
//     <>
//       <TopBar title='Forgot Password' />
//       <Container
//         maxWidth={false}
//         style={{ backgroundColor: '#f7f8f1', minHeight: '100vh', display: 'flex', alignItems: 'center' }}
//       >
//         <Grid container justifyContent="center" spacing={4}>
//           <Grid item xs={12} md={7} style={{paddingTop: '2rem', paddingBottom: '2rem', marginTop: '2rem'}}>
//             <Grid
//               container
//               style={{
//                 backgroundImage: 'url("/ForgotPasswordBG.jpg")',
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 borderRadius: '20px',
//                 height: '100%',
//                 display: 'flex',
//                 alignItems: 'flex-end',
//               }}
//             >
//               <Grid item xs={12} style={{ paddingLeft: '3rem', paddingRight: '1rem', marginBottom: '2rem', paddingTop: '2rem' }}>
//                 <Typography
//                   variant="h4"
//                   style={{
//                     color: '#ffffff',
//                     fontSize: '1.5rem',
//                     textAlign: 'left',
//                     lineHeight: '1',
//                     paddingBottom: '1rem',
//                     marginTop: 'auto',
//                   }}
//                 >
//                   Unleash your home’s potential
//                 </Typography>
//                 <Typography
//                   variant="h4"
//                   style={{
//                     color: '#ffffff',
//                     fontSize: '1.5rem',
//                     textAlign: 'left',
//                     lineHeight: '1',
//                   }}
//                 >
//                   with everything at your fingertips
//                 </Typography>
//               </Grid>
//             </Grid>
//           </Grid>
//           <Grid item xs={12} md={5}>
//             <Grid
//               container
//               style={{
//                 backgroundColor: '#ffffff',
//                 boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//                 borderRadius: '20px',
//                 padding: '1rem 2rem 3rem',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 marginTop: '2rem',
//                 marginBottom: '2rem',
//               }}
//             >
//               <Grid item xs={12} style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
//                 <img src="/Logo.png" alt="Logo" style={{ width: '40%' }} />
//               </Grid>
//               <Grid item xs={12} style={{ marginBottom: '1rem' }}>
//                 <Typography variant="h5" gutterBottom style={{ textAlign: 'center', color: '#435834' }}>
//                   Forgot your password?
//                 </Typography>
//               </Grid>
//               <Grid item xs={12} style={{ marginTop: '1rem' }}>
//                 <form
//                   style={{
//                     display: 'flex',
//                     flexDirection: 'column',
//                     gap: '1.5rem',
//                     width: '100%',
//                     maxWidth: '400px',
//                     margin: '0 auto',
//                     alignItems: 'center'
//                   }}
//                   onSubmit={handleSubmit}
//                 >
//                   <TextField
//                     label="Email"
//                     type="email"
//                     name="email"
//                     fullWidth
//                     variant="filled"
//                     color='secondary'
//                     inputProps={{ style: { height: '15px' } }}
//                   />
//                   <Button variant="contained" color="primary" type="submit" fullWidth style={{ width: '50%' }}>
//                     Send OTP
//                   </Button>
//                   <Box mt={1} width="100%" borderBottom={1} borderColor="grey.300" />
//                   <Box sx={{ display: 'flex', gap: '10px', marginLeft: '2px', marginRight: '2px' }}>
//                     <TextField
//                       sx={{ flex: '1', margin: '1px 1px 1px 0' }}
//                       type='typeOTP'
//                       name='typeOTP'
//                       label='Type OTP'
//                       variant="filled"
//                       size="small"
//                       color="secondary"
//                       inputProps={{ style: { height: '15px' } }}
//                     />
//                     <Button variant="contained" color="primary" type="submit">Resend OTP</Button>
//                   </Box>
//                   <TextField
//                     label="Enter New Password"
//                     type="newPassword"
//                     name="newPassword"
//                     fullWidth
//                     variant="filled"
//                     color='secondary'
//                     inputProps={{ style: { height: '15px' } }}
//                   />
//                   <TextField
//                     label="Confirm Password"
//                     type="confirmPassword"
//                     name="confirmPassword"
//                     fullWidth
//                     variant="filled"
//                     color='secondary'
//                     inputProps={{ style: { height: '15px' } }}
//                   />
//                   <Button variant="contained" color="primary" type="submit">Submit</Button>
//                 </form>
//               </Grid>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Container>
//     </>
//   );
// }

// export default ForgotPassword;
