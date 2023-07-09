
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
    <Typography variant='h6'> Messages </Typography>
     
    </>
  );
}

export default Messages;