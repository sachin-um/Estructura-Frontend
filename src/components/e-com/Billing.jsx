import React, { useState } from 'react';
import {
  Grid,
  Typography,
  Tab,
  Tabs,
  Divider,
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
  Popover,
  TextField,
} from '@mui/material';
function Billing({}) {
  const [formData, setFormData] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    const formDataList = new FormData(event.currentTarget);
    setFormData(formDataList.get('email'));
    console.log(formData);
  };
  return (
    <>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          '& .MuiTextField-root': { m: 1, width: '50ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <Typography
          sx={{ textTransform: 'uppercase', marginBottom: '20px' }}
          variant="h5"
        >
          Billing Information
        </Typography>
        <Divider sx={{ width: '100%', margin: '1rem 0' }} />
        <Typography sx={{ marginBottom: '10px' }} variant="h6">
          Billing Address
        </Typography>
        <div>
          <TextField id="outlined-basic" label="FULL NAME" variant="outlined" />
        </div>
        <div>
          <TextField id="outlined-basic" label="ADDRESS 1" variant="outlined" />
        </div>
        <div>
          <TextField id="outlined-basic" label="ADDRESS 2" variant="outlined" />
        </div>
        <div>
          <TextField id="outlined-basic" label="CITY" variant="outlined" />
        </div>
        <div>
          <TextField id="outlined-basic" label="ZIP CODE" variant="outlined" />
        </div>
        <Button color="primary" sx={{ marginRight: 2 }} variant="contained">
          Buy Now
        </Button>
        <Divider sx={{ width: '100%', margin: '1rem 0' }} />
      </Box>
    </>
  );
}
export default Billing;
