import CameraAltIcon from '@mui/icons-material/CameraAlt';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import {
  Box,
  Card,
  CardContent,
  Grid,
  ListItemIcon,
  Rating,
  Stack,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

import TopBar from '../components/CusTopBar';
import Messages from '../components/ServiceProviderProf/Messages';
import PreviousProjects from '../components/ServiceProviderProf/PreviousProjects';
import ProfileDetails from '../components/ServiceProviderProf/ProfileDetails';
import Responses from '../components/ServiceProviderProf/Responses';
import Reviews from '../components/ServiceProviderProf/Reviews';

function ServiceProviderProfile() {
  const [value, setValue] = useState('one');
  const [activeTab, setActiveTab] = useState('one');
  const [profilePicture, setProfilePicture] = useState(null);

  const handleTabChange = (event, tab) => {
    setValue(tab);
    setActiveTab(tab);
  };

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    setProfilePicture(URL.createObjectURL(file));
  };

  return (
    <>
      <TopBar title="Service Provider Profile" />

      <Box height="200px" position="relative" width="100%">
        <img
          style={{
            height: '100%',
            objectFit: 'cover',
            width: '100%',
          }}
          alt="cover"
          src="cover.jpg"
        />
        <Box
          left="7%"
          maxWidth="200px"
          p={4}
          position="absolute"
          top="50%"
          transform="translate(-50%, -50%)"
          zIndex="1"
        >
          <Box
            alignItems="center"
            display="flex"
            flexDirection="column"
            position="relative"
          >
            <img
              src={
                profilePicture ||
                'account-avatar-person-profile-user-svgrepo-com.svg'
              }
              style={{
                height: '100px',
                objectFit: 'cover',
                width: '100px',
              }}
              alt="user"
            />
            <Box
              sx={{
                '&:hover': {
                  color: 'primary.dark',
                },
              }}
              alignItems="center"
              borderRadius="50%"
              bottom="-20px"
              color="primary.main"
              cursor="pointer"
              display="flex"
              left="70%"
              p={1}
              position="absolute"
              transform="translateX(-50%)"
              zIndex="1"
            >
              <label
                onClick={() => {
                  document.getElementById('profilePictureInput').click();
                }}
                htmlFor="profilePictureInput"
                style={{ cursor: 'pointer' }}
              >
                <CameraAltIcon />
              </label>
              <input
                accept="image/*"
                id="profilePictureInput"
                onChange={handleProfilePictureChange}
                style={{ display: 'none' }}
                type="file"
              />
            </Box>
          </Box>
        </Box>
      </Box>

      <Grid container spacing={2}>
        <Grid item md={3} xs={12}>
          <Card
            sx={{
              height: '380px',
              marginLeft: '2rem',
              marginTop: '3rem',
              width: '300px',
            }}
          >
            <CardContent>
              <Typography component="div" variant="h5">
                John Doe
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 1.5 }}>
                Architect
              </Typography>
              <Typography
                color="text.secondary"
                gutterBottom
                sx={{ fontSize: 14 }}
              >
                Based in Colombo
              </Typography>
              <Box mt={6}>
                <Stack alignItems="center" direction="row" spacing={2}>
                  <ListItemIcon>
                    <PhoneIcon />
                  </ListItemIcon>
                  <Typography color="text.secondary" variant="body2">
                    +94 713729173
                  </Typography>
                </Stack>
              </Box>
              <Box mt={4}>
                <Stack alignItems="center" direction="row" spacing={2}>
                  <ListItemIcon>
                    <EmailIcon />
                  </ListItemIcon>
                  <Typography color="text.secondary" variant="body2">
                    john.doe@example.com
                  </Typography>
                </Stack>
              </Box>
              <Box
                alignItems="center"
                display="flex"
                mt={2}
                style={{ marginTop: '40px' }}
              >
                <Typography color="primary" variant="h4">
                  {' '}
                  4.5{' '}
                </Typography>
                <Rating
                  name="rating"
                  precision={0.5}
                  readOnly
                  size="large"
                  style={{ marginLeft: '20px' }}
                  value={4.5}
                />
              </Box>
              <Box display="flex" flexGrow={1} justifyContent="center">
                <Typography
                  color="primary"
                  style={{ marginRight: '40px' }}
                  variant="body1"
                >
                  120 reviews
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item md={9} xs={12}>
          <Tabs
            aria-label="secondary tabs example"
            indicatorColor="secondary"
            onChange={handleTabChange}
            textColor="secondary"
            value={value}
          >
            <Tab
              label="Profile Details"
              sx={{ marginRight: '4rem' }}
              value="one"
            />
            <Tab
              label="Previous Projects"
              sx={{ marginRight: '4rem' }}
              value="two"
            />
            <Tab label="Responses" sx={{ marginRight: '4rem' }} value="three" />
            <Tab label="Messages" sx={{ marginRight: '4rem' }} value="four" />
            <Tab label="Reviews" value="five" />
          </Tabs>

          {activeTab === 'one' && <ProfileDetails />}
          {activeTab === 'two' && <PreviousProjects />}
          {activeTab === 'three' && <Responses />}
          {activeTab === 'four' && <Messages />}
          {activeTab === 'five' && <Reviews />}
        </Grid>
      </Grid>
    </>
  );
}

export default ServiceProviderProfile;
