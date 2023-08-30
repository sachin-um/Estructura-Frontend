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
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Footer from '../components/Footer';
import NoResultsFound from '../components/NoResults';
import PreviousProjects from '../components/ServiceProviderProf/CustomerView/PreviousProjects';
import ProfileDetails from '../components/ServiceProviderProf/CustomerView/ProfileDetails';
import Reviews from '../components/ServiceProviderProf/CustomerView/reviews';
import TopAppBar from '../components/TopAppBar';
import useFetchUser from '../hooks/users/useFetchUser';
import Loading from './loading';

const profilePicture = '/account-avatar-person-profile-user-svgrepo-com.svg';

function ServiceProviderPublicProfile() {
  const userId = parseInt(useParams().id ?? '0');

  const { fetchUserById, isLoading, user } = useFetchUser();

  useEffect(() => {
    fetchUserById(userId);
  }, [fetchUserById, userId]);

  const [activeTab, setActiveTab] = React.useState<'one' | 'three' | 'two'>(
    'one',
  );

  const handleTabChange = (
    _event: React.SyntheticEvent<Element, Event>,
    value: 'one' | 'three' | 'two',
  ) => {
    setActiveTab(value);
  };

  return (
    <>
      <TopAppBar
        title={
          user && user.role !== 'CUSTOMER'
            ? user.firstName + user.lastName
            : 'Service Provider: ' + isLoading
            ? 'Loading...'
            : 'Not Found'
        }
      />
      {user && user.role !== 'CUSTOMER' ? (
        <>
          <Box height="200px" position="relative" width="100%">
            <img
              style={{
                height: '100%',
                objectFit: 'cover',
                width: '100%',
              }}
              alt="cover"
              src="/cover.jpg"
            />
            <Box
              sx={{
                left: '7%',
                maxWidth: '200px',
                p: 4,
                position: 'absolute',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: '1',
              }}
            >
              <Box
                alignItems="center"
                display="flex"
                flexDirection="column"
                position="relative"
              >
                <img
                  style={{
                    height: '100px',
                    objectFit: 'cover',
                    width: '100px',
                  }}
                  alt="user"
                  src={user?.ProfileImageName ?? profilePicture}
                />
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
                    {user.firstName + ' ' + user.lastName}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mb: 1.5 }}>
                    Architect
                  </Typography>
                  <Typography
                    color="text.secondary"
                    gutterBottom
                    sx={{ fontSize: 14 }}
                  >
                    Based in {user.city}, {user.district}
                  </Typography>
                  {user.contactNumber && (
                    <Box mt={6}>
                      <Stack alignItems="center" direction="row" spacing={2}>
                        <ListItemIcon>
                          <PhoneIcon />
                        </ListItemIcon>
                        <Typography color="text.secondary" variant="body2">
                          {user.contactNumber}
                        </Typography>
                      </Stack>
                    </Box>
                  )}
                  <Box mt={4}>
                    <Stack alignItems="center" direction="row" spacing={2}>
                      <ListItemIcon>
                        <EmailIcon />
                      </ListItemIcon>
                      <Typography color="text.secondary" variant="body2">
                        {user.email}
                      </Typography>
                    </Stack>
                  </Box>
                  <Box
                    alignItems="center"
                    display="flex"
                    mt={2}
                    style={{ marginTop: '40px' }}
                  >
                    <Typography variant="h4">4.5</Typography>
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
                value={activeTab}
              >
                <Tab
                  label="Profile Details"
                  sx={{ marginRight: '300px' }}
                  value="one"
                />
                <Tab
                  label="Previous Projects"
                  sx={{ marginRight: '300px' }}
                  value="two"
                />
                <Tab label="Reviews" value="three" />
              </Tabs>

              {activeTab === 'one' && <ProfileDetails user={user} />}
              {activeTab === 'two' && <PreviousProjects userId={user.id} />}
              {activeTab === 'three' && <Reviews />}
            </Grid>
          </Grid>
        </>
      ) : isLoading ? (
        <Loading />
      ) : (
        <NoResultsFound />
      )}
      <Footer />
    </>
  );
}

export default ServiceProviderPublicProfile;
