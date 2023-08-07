
import { Button, Container, Grid, TextField, Typography, Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Link } from 'react-router-dom';





function Messages() {
    const HandleSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      console.log(formData.get("email"), formData.get("password"));
    };
    
  return (
    <>
    <Grid style={{display:"flex",justifyContent:"center", marginTop: '3rem',marginLeft: '10rem'  }}>
    <Typography variant='h6'> Messages</Typography>
     </Grid>
     
    </>
  );
}

export default Messages;