import React, { useState } from 'react';
import paymentGateway from '../../js/payment';
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
import useCart from '../../hooks/cart/useCart';
import useCurrentUser from '../../hooks/users/useCurrentUser';
function Billing() {
  const { items } = useCart();
  const currentUser = useCurrentUser();
  const [formData, setFormData] = useState({});
  const handleSubmit = (event) => {
    if (currentUser) {
      event.preventDefault();
      const formDataList = new FormData(event.currentTarget);
      const customerID = currentUser.id;
      const total =
        items.length > 0
          ? items.reduce((totalItem, item) => {
              return {
                ...totalItem,
                price:
                  (totalItem.price ?? 0) +
                  (item.price ?? 0) * (item.quantity ?? 0),
              };
            }).price ?? 0
          : 0;
      const newFormData = {};
      for (const [name, value] of formDataList.entries()) {
        newFormData[name] = value;
      }
      newFormData['shoppingCartItems'] = items;

      console.log(newFormData);
      paymentGateway(newFormData);
    }
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
        onSubmit={handleSubmit}
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
          <TextField
            id="outlined-basic"
            name="billingName"
            label="FULL NAME"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            name="billingAddressLine1"
            label="ADDRESS 1"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            name="billingAddressLine2"
            label="ADDRESS 2"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            name="billingCity"
            label="CITY"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            name="billingZipcode"
            label="ZIP CODE"
            variant="outlined"
          />
        </div>
        <Button
          type="submit"
          color="primary"
          sx={{ marginRight: 2 }}
          variant="contained"
        >
          Buy Now
        </Button>
        <Divider sx={{ width: '100%', margin: '1rem 0' }} />
      </Box>
    </>
  );
}
export default Billing;
