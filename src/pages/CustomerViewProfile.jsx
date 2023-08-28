import React from 'react';
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

import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

import TopBar from '../components/CusTopBar';
import Footer from '../components/Footer';
import ProfileDetails from '../components/ServiceProviderProf/CustomerView/profiledetails';
import PreviousProjects from '../components/ServiceProviderProf/CustomerView/previousprojects';
import Reviews from '../components/ServiceProviderProf/CustomerView/reviews';

function CustomerViewProfile() {
  const [value, setValue] = React.useState('one');
  const [activeTab, setActiveTab] = React.useState('one');

  const [profilePicture] = useState('account-avatar-person-profile-user-svgrepo-com.svg');

  const handleTabChange = (event, tab) => {
    setValue(tab);
    setActiveTab(tab);
  };

  return (
    <>
      <TopBar title="Service Provider Profile" />

      <Box position="relative" height="200px" width="100%">
        <img
          src="cover.jpg"
          alt="cover"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <Box
          position="absolute"
          top="50%"
          left="7%"
          transform="translate(-50%, -50%)"
          zIndex="1"
          p={4}
          maxWidth="200px"
        >
          <Box position="relative" display="flex" flexDirection="column" alignItems="center">
            <img
              src={profilePicture}
              alt="user"
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>
      </Box>

      <Grid container spacing={2}>
        <Grid item md={3} xs={12}>
          <Card sx={{ width: "300px", height: "380px", marginTop: "3rem", marginLeft: "2rem" }}>
          <CardContent>
              <Typography variant="h5" component="div">
                John Doe
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Architect
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Based in Colombo
              </Typography>
              <Box mt={6}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <ListItemIcon>
                    <PhoneIcon />
                  </ListItemIcon>
                  <Typography variant="body2" color="text.secondary">
                    +94 713729173
                  </Typography>
                </Stack>
              </Box>
              <Box mt={4}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <ListItemIcon>
                    <EmailIcon />
                  </ListItemIcon>
                  <Typography variant="body2" color="text.secondary">
                    john.doe@example.com
                  </Typography>
                </Stack>
              </Box>
              <Box mt={2} display='flex' alignItems='center' style={{ marginTop: '40px'}}>
                <Typography variant='h4'>4.5</Typography>
                <Rating
                    name='rating'
                    value={4.5}
                    precision={0.5}
                    readOnly
                    size='large'
                    style={{ marginLeft: '20px' }}
                />
              </Box>
              <Box flexGrow={1} display="flex" justifyContent="center">
                <Typography variant="body1" color="primary" style={{ marginRight: '40px'}}>120 reviews</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item md={9} xs={12}>
          <Tabs
            value={value}
            onChange={handleTabChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab label="Profile Details" value="one" sx={{ marginRight: '300px' }}/>
            <Tab label="Previous Projects" value="two" sx={{ marginRight: '300px' }}/>
            <Tab label="Reviews" value="three" />
          </Tabs>

          {activeTab === "one" && <ProfileDetails />}
          {activeTab === "two" && <PreviousProjects />}
          {activeTab === "three" && <Reviews />}
        </Grid>
      </Grid>

      <Footer />
    </>
  );
}

export default CustomerViewProfile;
