import React from 'react';
import { Avatar, Card, CardContent, Typography, Stack, capitalize } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import backgroundPic from "/Professionals/InteriorDesigner.jpg"
import userPic from "/User/user.png"

const ProfileCard = () => {

  return (
    <Card sx={{ position: 'relative', backgroundColor: 'white', padding: 1.5, width: '100%', maxWidth: '340px', maxHeight:430, marginLeft:1, borderRadius: 5, transition: 'transform 0.2s ease', '&:hover': {transform: 'scale(1.008)'} }}>
      <div style={{ width: '100%', height: '150px', marginBottom: '10px' }}>
        <img src={backgroundPic} alt="Background" style={{ width: '100%', height: '120%', objectFit: 'cover', borderRadius: '12px' }} />
      </div>
      <CardContent>
        <Stack direction="column" alignItems="center" spacing={2}>
          <Avatar alt="User Avatar" src={userPic} sx={{ width: 100, height: 100, marginTop: '-50px' }} />
          <Typography variant="h6">Saneru Akarawita</Typography>
          <Typography variant="body2" color="textSecondary">
            Customer
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            <LocationOnIcon sx={{ fontSize: 16 }} />
            <Typography variant="body2" color="textSecondary">
              Colombo, Sri Lanka
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <EmailIcon sx={{ fontSize: 16 }} />
            <Typography variant="body2" color="textSecondary">
              saneru.akarawita@gmail.com
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
