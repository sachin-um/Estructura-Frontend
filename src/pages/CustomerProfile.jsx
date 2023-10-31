import TopAppBar from '../components/CusTopBar';
import Footer from '../components/Footer';
import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  ListItemIcon,
  Stack,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

import Orders from '../components/CustomerProfile/Orders';
import RetailItems from '../components/CustomerProfile/RetailItems';
import ProfileDetails from '../components/CustomerProfile/ProfileDetails';
import Plans from '../components/CustomerProfile/Plans';
import Requests from '../components/CustomerProfile/Requests';
import RequestsTemp from '../components/CustomerProfile/RequestsTemp';

function CustomerProfile() {
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
      <TopAppBar title="Customer Profile" />

      <Box height="200px" position="relative" width="100%">
        <img
          style={{
            height: '100%',
            objectFit: 'cover',
            width: '100%',
          }}
          alt="cover"
          src="/public/cover.jpg"
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
                '/public/account-avatar-person-profile-user-svgrepo-com.svg'
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
              height: '250px',
              marginLeft: '2rem',
              marginTop: '5rem',
              width: '300px',
            }}
          >
            <CardContent>
              <Typography component="div" variant="h5">
                John Doe
              </Typography>
              <Typography
                color="text.secondary"
                gutterBottom
                sx={{ fontSize: 14 }}
              >
                Colombo
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
            <Tab label="Plans" sx={{ marginRight: '4rem' }} value="two" />
            <Tab
              label="Retail Items Purchased"
              sx={{ marginRight: '4rem' }}
              value="three"
            />
            <Tab label="Requests" sx={{ marginRight: '4rem' }} value="four" />
            <Tab label="Orders" sx={{ marginRight: '4rem' }} value="five" />
          </Tabs>

          {activeTab === 'one' && <ProfileDetails />}
          {activeTab === 'two' && <Plans />}
          {activeTab === 'three' && <RetailItems />}

          {activeTab === 'four' && <Requests />}

          {activeTab === 'five' && <Orders />}
        </Grid>
      </Grid>

      <Footer />
    </>
  );
}

export default CustomerProfile;
