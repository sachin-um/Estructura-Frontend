// TODO: Add Service Provider Sign In Page with 2 paths (service provider and retail store)

import Professional from "./Professional";
import RetailStore from "./RetailStore";
import React,{useState} from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Link,
  TextField,
  FormControl,
  InputLabel,
  Typography,
} from "@mui/material";
// import { Link } from "react-router-dom" ;

function SignUpPage1({updateFormData,handleDropdownChange,nextPage}) {
  const HandleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(formData.get("email"), formData.get("password"));
  };

  const handleNext=() =>{
    nextPage();
  }
  // TODO: Change Layout
  return (
    <>
      
      <Container
        maxWidth={false}
        style={{ backgroundColor: '#f7f8f1', minHeight: '100vh', display: 'flex', alignItems: 'center' }}
      >
        <Grid container justifyContent="center" spacing={4}>
          <Grid item xs={12} md={7} style={{ paddingTop: '2rem', paddingBottom: '2rem', marginTop: '2rem' }}>
            <Grid
              container
              style={{
                backgroundImage: 'url("/serviceprovider.jpeg")',
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
          <Grid item xs={12} md={5}>
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
              <Grid item xs={12} style={{ marginTop: '1rem' }}>
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
           
   
                { <Grid style={{display:"flex",justifyContent:"center",margin:10}}>
                <Button sx={{ width: 1/3,  borderRadius:2 }}type='submit' color="primary" variant="contained" size='large' onClick={handleNext}>Next</Button>
                </Grid> }
                
              </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      
    </>
  );
}

export default SignUpPage1;