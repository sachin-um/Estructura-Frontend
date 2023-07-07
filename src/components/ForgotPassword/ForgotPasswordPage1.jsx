
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
import ForgotPasswordPage2 from "./ForgotPasswordPage2";
// import { Link } from "react-router-dom" ;

function ForgotPasswordPage1({updateFormData,handleDropdownChange,nextPage}) {
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
      
    
          
               {<Grid style={{justifyContent:"center"}}>
               <Typography variant="h5" gutterBottom style={{ textAlign: 'center', color: '#435834' }}>
                  Forgot your Password?
                </Typography>
                
                <TextField  InputProps={{ sx: { borderRadius: 2 } }}sx={{ width: 1,margin:2 }}type='email' name='email' label='Email' variant="filled" size="small" />
             
                
                </Grid >}
           
   
                { <Grid style={{display:"flex",justifyContent:"center",margin:2}}>
                <Button sx={{ width: 1/2,  borderRadius:2 }}type='submit' color="primary" variant="contained" size='large' onClick={handleNext}>Send OTP</Button>
                </Grid> }
                
              
            
      
    </>
  );
}

export default ForgotPasswordPage1;