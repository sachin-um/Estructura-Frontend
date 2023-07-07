import {
    Box,
    Button,
    Container,
    Grid,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    Link,
    TextField,
    Typography,
  } from "@mui/material";
import { Form } from "react-router-dom";
  // import { Link } from "react-router-dom" ;
  
  function ForgotPasswordPage2() {
    const HandleSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      console.log(formData.get("email"), formData.get("password"));
    };
  
    // TODO: Change Layout
    return (
      <>
     
            
      
                  {<Grid style={{justifyContent:"center"}}>
                  <Typography variant="h5" gutterBottom style={{ textAlign: 'center', color: '#435834' }}>
                  Enter New Password
                </Typography>
                
                <TextField  InputProps={{ sx: { borderRadius: 2 } }}sx={{ width: 1,margin:2 }}type='password' name='password' label='Password'  variant="filled" size="small"/>
                <TextField  InputProps={{ sx: { borderRadius: 2 } }}sx={{ width: 1,margin:2 }}type='ConfirmPassword' name='ConfirmPassword' label='Confirm Password'  variant="filled" size="small"/>
                </Grid >}
                
                { <Grid style={{display:"flex",justifyContent:"center",margin:1}}>
                <Button sx={{ width: 1/2,  borderRadius:2 }}type='submit' color="primary" variant="contained" size='large' >Submit</Button>
                
                </Grid> }
                
              
               
          
      </>
    );
  }
  
  export default ForgotPasswordPage2;