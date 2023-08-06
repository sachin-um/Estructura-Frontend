import React, { useState } from 'react';
import {
  Container,
  Typography,
  Tab,
  Tabs,
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,Popover, TextField
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import CusBar from '../components/CusTopBar';
import ChangePassword from './ChangePassword';

const Billing = () => {
  const [subscriptionPlan, setSubscriptionPlan] = useState('standard');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [activeTab, setActiveTab] = useState(0);
  const [paymentMethods, setPaymentMethods] = useState(['Master','Paypal']);

  const handleChangePlan = (event) => {
    setSubscriptionPlan(event.target.value);
  };
 
  const [anchorEl, setAnchorEl] = useState(null);

 
  const [cardName, setCardName] = useState('');
  const [cardType, setCardType] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cardNumber, setCardNumber] = useState('');

 
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleChangePaymentMethod = (event) => {
    setPaymentMethod(event.target.value);

  };

  const isStandardPlanActive = subscriptionPlan === 'standard';
  const isPremiumPlanActive = subscriptionPlan === 'premium';

  const standardPlanFeatures = [
    'Access to Standard Library',
    'Basic Support',
    'Limited Storage',
    'Standard Features',
    'Access to Standard Library',
    'Basic Support',
  ];

  const premiumPlanFeatures = [
    'Access to Premium Library',
    'Priority Support',
    'Extended Storage',
    'Premium Features',
    'Access to Premium Library',
    'Priority Support',
  ];

  const handleAddPaymentMethod = () => {
    const newPaymentMethod = prompt('Enter the new payment method (e.g., PayPal):');
    if (newPaymentMethod) {
      setPaymentMethods((prevMethods) => [...prevMethods, newPaymentMethod]);
    }
    setCardName('');
    setCardType('');
    setExpiryDate('');
    setCardNumber('');

    // Close the popover
    handlePopoverClose();
  };

  const handleRemovePaymentMethod = (methodToRemove) => {
    setPaymentMethods((prevMethods) => prevMethods.filter((method) => method !== methodToRemove));
  };

  const handleEditPaymentMethod = (methodToEdit) => {
    const updatedMethod = prompt(`Edit payment method "${methodToEdit}":`, methodToEdit);
    if (updatedMethod) {
      setPaymentMethods((prevMethods) =>
        prevMethods.map((method) => (method === methodToEdit ? updatedMethod : method))
      );
    }
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  const popoverContent = (
    <Card sx={{ padding: '1rem', width: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h6">Add New Payment Method</Typography>
      <TextField
        label="Card Name"
        value={cardName}
        onChange={(e) => setCardName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Card Type"
        value={cardType}
        onChange={(e) => setCardType(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Expiry Date"
        value={expiryDate}
        onChange={(e) => setExpiryDate(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Card Number"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleAddPaymentMethod} fullWidth>
        Add Payment Method
      </Button>
    </Card>
  );

  return (
    <>
      <CusBar />
      <Container style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Tabs value={activeTab} onChange={handleTabChange} indicatorColor="primary" textColor="primary" sx={{ marginTop: '0.5rem' }}>
          <Tab label="Billing & Subscription" sx={{ fontSize: '1.2rem' }} />
          <Tab label="Change Password" sx={{ fontSize: '1.2rem' }} />
        </Tabs>

        {activeTab === 1 && <ChangePassword />}

        {activeTab === 0 && (
          <Box>
            <Typography variant="h6" style={{ marginTop: '2.5rem' }}>
              Change Your Subscription Plan 
            </Typography>
            <hr style={{ width: '60rem', margin: '0.6rem 0' }} />

            <form>
              <Box
                sx={{
                  marginTop: '1.7rem',
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '1.7rem',
                  alignItems: 'center',
                  '& .standard-box, & .premium-box': {
                    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
                  },
                  '&:hover': {
                    '& .standard-box': {
                      transform: isStandardPlanActive ? 'scale(1.05)' : 'none',
                    },
                    '& .premium-box': {
                      transform: isPremiumPlanActive ? 'scale(1.05)' : 'none',
                    },
                  },
                }}
              >
                <Card
                  className="standard-box"
                  sx={{
                    borderColor: 'white',
                    border: isStandardPlanActive ? 2 : 1,
                    p: 1,
                    borderRadius: 5.5,
                    transition: 'transform 0.2s ease',
                    backgroundColor: isStandardPlanActive ? '#ffffff' : '#DFF0D8',
                  }}
                >
                  <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'left' }}>
                    <FormControl component="fieldset">
                      <RadioGroup value={subscriptionPlan} onChange={handleChangePlan} row>
                        <FormControlLabel
                          value="standard"
                          control={<Radio />}
                          label={
                            <Typography variant="body1" fontWeight={isStandardPlanActive ? 'bold' : 'normal'} sx={{ fontSize: '1.3rem' }}>
                              Standard Plan
                            </Typography>
                          }
                        />
                      </RadioGroup>
                    </FormControl>
                    <Typography style={{ alignSelf: 'center', color: '#435834', fontSize: '1.7em', fontWeight: 'bold', paddingRight: '10rem', marginTop: '-0.7em' }}>
                      Free
                    </Typography>
                    <ul style={{ paddingLeft: '1.2rem', marginBottom: 0 }}>
                      {standardPlanFeatures.map((feature, index) => (
                        <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '18px' }}>
                          <CheckIcon fontSize="small" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card
                  className="premium-box"
                  sx={{
                    borderColor: isPremiumPlanActive ? 'black' : 'gray',
                    border: isPremiumPlanActive ? 2 : 1,
                    p: 1,
                    borderRadius: 7,
                    transition: 'transform 0.2s ease',
                    backgroundColor: isPremiumPlanActive ? '#ffffff' : '#DFF0D8',
                  }}
                >
                  <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'left' }}>
                    <FormControl component="fieldset">
                      <RadioGroup value={subscriptionPlan} onChange={handleChangePlan} row>
                        <FormControlLabel
                          value="premium"
                          control={<Radio />}
                          label={
                            <Typography variant="body1" fontWeight={isPremiumPlanActive ? 'bold' : 'normal'} sx={{ fontSize: '1.3rem' }}>
                              Premium Plan
                            </Typography>
                          }
                        />
                      </RadioGroup>
                    </FormControl>
                    <Typography style={{ alignSelf: 'center', color: '#435834', fontSize: '1.7em', fontWeight: 'bold', paddingRight: '10rem', marginTop: '-0.7em' }}>
                      $19.9/Yr
                    </Typography>
                    <ul style={{ paddingLeft: '1.2rem', marginBottom: 0 }}>
                      {premiumPlanFeatures.map((feature, index) => (
                        <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '18px' }}>
                          <CheckIcon fontSize="small" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Box>

              <Box
                sx={{
                  marginTop: '2rem',
                  paddingLeft: '1.0rem',
                }}
              >
                <Typography variant="h6" style={{ marginTop: '0.5rem' }}>
                  Payment Method
                </Typography>
                <hr style={{ width: '60rem', margin: '0.6rem 0' }} />
                <FormControl
                  component="fieldset"
                  sx={{
                    gap: '1rem',
                    marginTop: '1.4rem',
                    borderColor: 'black',
                    border: 1,
                    p: 1,
                    borderRadius: 1,
                    paddingLeft: '1.5rem',
                  }}
                >
                  <RadioGroup value={paymentMethod} onChange={handleChangePaymentMethod}>
                    {paymentMethods.map((method) => (
                      <FormControlLabel
                        key={method}
                        value={method}
                        control={<Radio />}
                        label={
                          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                            {method}
                            <div style={{ marginLeft: '1rem' }}>
                              <DeleteIcon
                                color="gray"
                                onClick={() => handleRemovePaymentMethod(method)}
                                style={{ marginLeft: '30rem' }}
                              />
                            </div>
                            <EditIcon color="gray" onClick={() => handleEditPaymentMethod(method)} />
                          </div>
                        }
                      />
                    ))}
                  </RadioGroup>
                  <Button variant="contained" color="primary" onClick={handlePopoverOpen} sx={{ gap: '1rem', marginTop: '1rem', width: '15rem' }}>
        + New Payment Method
      </Button>
      <Popover
  open={Boolean(anchorEl)}
  anchorEl={anchorEl}
  onClose={handlePopoverClose}
  anchorOrigin={{
    vertical: 'center',
    horizontal: 'center',
  }}
  transformOrigin={{
    vertical: 'center',
    horizontal: 'center',
  }}
>
  {popoverContent}
</Popover>

                </FormControl>
              </Box>
            </form>
          </Box>
        )}
      </Container>
    </>
  );
};

export default Billing;
