// eslint-disable-next-line import/no-unresolved
import backgroundPic from '/Professionals/InteriorDesigner.jpg';
// eslint-disable-next-line import/no-unresolved
import userPic from '/User/user.png';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Avatar, Card, CardContent, Stack, Typography } from '@mui/material';
import React from 'react';

const ProfileCard = () => {
  return (
    <Card
      sx={{
        '&:hover': { transform: 'scale(1.008)' },
        backgroundColor: 'white',
        borderRadius: 5,
        marginLeft: 1,
        maxHeight: 430,
        maxWidth: '340px',
        padding: 1.5,
        position: 'relative',
        transition: 'transform 0.2s ease',
        width: '100%',
      }}
    >
      <div style={{ height: '150px', marginBottom: '10px', width: '100%' }}>
        <img
          style={{
            borderRadius: '12px',
            height: '120%',
            objectFit: 'cover',
            width: '100%',
          }}
          alt="Background"
          src={backgroundPic}
        />
      </div>
      <CardContent>
        <Stack alignItems="center" direction="column" spacing={2}>
          <Avatar
            alt="User Avatar"
            src={userPic}
            sx={{ height: 100, marginTop: '-50px', width: 100 }}
          />
          <Typography variant="h6">Saneru Akarawita</Typography>
          <Typography color="textSecondary" variant="body2">
            Customer
          </Typography>
          <Stack alignItems="center" direction="row" spacing={1}>
            <LocationOnIcon sx={{ fontSize: 16 }} />
            <Typography color="textSecondary" variant="body2">
              Colombo, Sri Lanka
            </Typography>
          </Stack>
          <Stack alignItems="center" direction="row" spacing={1}>
            <EmailIcon sx={{ fontSize: 16 }} />
            <Typography color="textSecondary" variant="body2">
              saneru.akarawita@gmail.com
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
