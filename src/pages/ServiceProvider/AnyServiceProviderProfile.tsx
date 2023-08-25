import { CameraAlt, Email, Phone } from '@mui/icons-material';
import {
  Box,
  Button,
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
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import Footer from '../../components/Footer';
import Messages from '../../components/ServiceProviderProf/Messages';
import Responses from '../../components/ServiceProviderProf/Responses';
import Reviews from '../../components/ServiceProviderProf/Reviews';
import ServiceProviderProfileDetails from '../../components/ServiceProviderProf/ServiceProviderProfileDetails';
import ProfilePreviousProjects from '../../components/ServiceProviderProf/ServiceProviderProfilePreviousProjects';
import ProfileRentingItems from '../../components/ServiceProviderProf/ServiceProviderProfileRentingItems';
import ProfileRetailItems from '../../components/ServiceProviderProf/ServiceProviderProfileRetailItems';
import TopAppBar from '../../components/TopAppBar';
import { useUsers } from '../../redux/UserInfo/useUsers';
import { capitalizeOnlyFirstLetter } from '../../utils/Capitalize';
import Loading from '../loading';
import UnauthorizedAccess from '../unauthorized_access';

function AnyServiceProviderProfile() {
  const [value, setValue] = useState('one');
  const [activeTab, setActiveTab] = useState('one');
  const [profilePicture, setProfilePicture] = useState('');

  const profileImageInputRef = useRef<HTMLInputElement>(null);

  const handleTabChange = (
    _event: React.SyntheticEvent<Element, Event>,
    value: string,
  ) => {
    setValue(value);
    setActiveTab(value);
  };

  const handleProfilePictureChange: React.ChangeEventHandler<
    HTMLInputElement
  > = (event) => {
    if (!event.target.files) return;
    const file = event.target.files[0];
    setProfilePicture(URL.createObjectURL(file));
  };

  const { currentUser, usersState } = useUsers();

  return currentUser ? (
    <>
      <TopAppBar title="Service Provider Profile" />

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
              src={
                currentUser.ProfileImageName
                  ? `http://localhost:8080/files/profile-images/${currentUser.id}/${currentUser.ProfileImageName}`
                  : profilePicture || '/User/user.png'
              }
              style={{
                backgroundColor: 'white',
                borderRadius: '50%',
                height: '100px',
                objectFit: 'cover',
                padding: '5px',
                width: '100px',
              }}
              alt="user"
            />
            <Box
              sx={{
                '&:hover': {
                  color: 'primary.dark',
                },
                alignItems: 'center',
                borderRadius: '50%',
                bottom: '-20px',
                color: 'primary.main',
                cursor: 'pointer',
                display: 'flex',
                left: '70%',
                p: 1,
                position: 'absolute',
                transform: 'translateX(-50%)',
                zIndex: '1',
              }}
            >
              <label
                // An Onclick isn't necessary since this is an html label
                // with a correct for ID
                htmlFor="profilePictureInput"
                style={{ cursor: 'pointer' }}
              >
                <CameraAlt />
              </label>
              <input
                accept="image/*"
                id="profilePictureInput"
                onChange={handleProfilePictureChange}
                ref={profileImageInputRef}
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
              padding: '1rem',
              width: { md: '300px', sm: '80%' },
            }}
          >
            <CardContent>
              <Typography component="div" variant="h5">
                {currentUser.firstName} {currentUser.lastName}
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 1.5 }}>
                {capitalizeOnlyFirstLetter(currentUser.role)}
              </Typography>
              <Typography
                color="text.secondary"
                gutterBottom
                sx={{ fontSize: 14 }}
              >
                Based in {currentUser?.city ?? 'Unknown'},{' '}
                {currentUser?.district ?? 'Unknown'}
              </Typography>
              <Box mt={6}>
                <Stack alignItems="center" direction="row" spacing={2}>
                  <ListItemIcon>
                    <Phone />
                  </ListItemIcon>
                  <Typography color="text.secondary" variant="body2">
                    {currentUser?.businessContactNo ?? 'Unknown'}
                  </Typography>
                </Stack>
              </Box>
              <Box mt={4}>
                <Stack alignItems="center" direction="row" spacing={2}>
                  <ListItemIcon>
                    <Email />
                  </ListItemIcon>
                  <Typography color="text.secondary" variant="body2">
                    {currentUser?.email ?? 'Unknown'}
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

        <Grid item md={9} sx={{ minHeight: '80vh' }} xs={12}>
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
            {currentUser?.role === 'RETAILSTORE' ? (
              <Tab
                label="Your Retail Items"
                sx={{ marginRight: '4rem' }}
                value="two"
              />
            ) : currentUser?.role === 'RENTER' ? (
              <Tab
                label="Your Renting Items"
                sx={{ marginRight: '4rem' }}
                value="two"
              />
            ) : (
              <Tab
                label="Previous Projects"
                sx={{ marginRight: '4rem' }}
                value="two"
              />
            )}
            <Tab label="Responses" sx={{ marginRight: '4rem' }} value="three" />
            <Tab label="Messages" sx={{ marginRight: '4rem' }} value="four" />
            <Tab label="Reviews" value="five" />
          </Tabs>
          {activeTab === 'one' && currentUser && (
            <ServiceProviderProfileDetails userDetails={currentUser} />
          )}
          {activeTab === 'two' &&
            currentUser?.role !== 'RETAILSTORE' &&
            currentUser?.role !== 'RENTER' && <ProfilePreviousProjects />}
          {activeTab === 'two' && currentUser?.role === 'RETAILSTORE' && (
            <ProfileRetailItems />
          )}
          {activeTab === 'two' && currentUser?.role === 'RENTER' && (
            <ProfileRentingItems />
          )}
          {activeTab === 'three' && <Responses />}
          {activeTab === 'four' && <Messages />}
          {activeTab === 'five' && <Reviews />}
        </Grid>
      </Grid>

      <Footer />
    </>
  ) : usersState === 'loading' || usersState === 'idle' ? (
    <Loading />
  ) : (
    <>
      <UnauthorizedAccess />
      <Link to="/SignIn?from=/ServiceProvider/profile">
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button
            color="primary"
            sx={{ height: '50px', width: '200px' }}
            variant="contained"
          >
            Sign In
          </Button>
        </div>
      </Link>
    </>
  );
}

export default AnyServiceProviderProfile;
