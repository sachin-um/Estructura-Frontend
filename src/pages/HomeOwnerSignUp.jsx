import TopBar from "../components/TopBar";
import { Button, Container, Grid, TextField, Typography, Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Link } from 'react-router-dom';


function HomeOwnerSignUp() {
  return (
    <>
      <TopBar title='Sign up as a Homeowner' />
      <Container
        maxWidth={false}
        style={{ backgroundColor: '#f7f8f1', minHeight: '100vh', display: 'flex', alignItems: 'center' }}
      >
        <Grid container justifyContent="center" spacing={4}>
          <Grid item xs={12} md={7} style={{ paddingTop: '2rem', paddingBottom: '2rem', marginTop: '2rem' }}>
            <Grid
              container
              style={{
                backgroundImage: 'url("/HomeOwnerBG.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '20px',
                height: '100%',
                display: 'flex',
                alignItems: 'flex-end',
              }}
            >
              <Grid item xs={12} style={{ paddingLeft: '4rem', paddingRight: '1rem', marginBottom: '2rem' }}>
                <Typography
                  variant="h4"
                  style={{
                    color: '#ffffff',
                    fontSize: '1.5rem',
                    textAlign: 'left',
                    lineHeight: '1',
                    paddingBottom: '1rem',
                    marginTop: 'auto',
                  }}
                >
                  Unleash your home’s potential
                </Typography>
                <Typography
                  variant="h4"
                  style={{
                    color: '#ffffff',
                    fontSize: '1.5rem',
                    textAlign: 'left',
                    lineHeight: '1',
                  }}
                >
                  with everything at your fingertips
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5}>
            <Grid
              container
              style={{
                backgroundColor: '#ffffff',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                borderRadius: '20px',
                padding: '1rem 2rem 3rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '2rem',
                marginBottom: '2rem',
              }}
            >
              <Grid item xs={12} style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                <img src="/Logo.png" alt="Logo" style={{ width: '40%' }} />
              </Grid>
              <Grid item xs={12} style={{ marginTop: '1rem' }}>
                <form
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    width: '100%',
                    maxWidth: '400px',
                    margin: '0 auto',
                  }}
                >
                  <TextField label="Email" type="email" name="email" fullWidth variant="filled" color='secondary' />
                  <Box sx={{ display: 'flex', gap: '10px', marginLeft: '2px', marginRight: '2px' }}>
                    <TextField
                      sx={{ flex: '1', margin: '1px 1px 1px 0' }}
                      type='firstName'
                      name='firstName'
                      label='First Name'
                      variant="filled"
                      size="small"
                      color="secondary"
                    />
                    <TextField
                      sx={{ flex: '1', margin: '1px 0 1px 1px' }}
                      type='lastName'
                      name='lastName'
                      label='Last Name'
                      variant="filled"
                      size="small"
                      color="secondary"
                    />
                  </Box>
                  <TextField label="Contact Number" type="contactNo" name="contactNo" fullWidth variant="filled" color='secondary' />
                  <TextField label="Password" type="password" name="password" fullWidth variant="filled" color='secondary' />
                  <TextField label="Confirm Password" type="confirmPassword" name="confirmPassword" fullWidth variant="filled" color='secondary' />
                  <Typography variant='h8' sx={{ textAlign: "left", color: "#435834" }}> Address </Typography>
                  <Box sx={{ display: 'flex', gap: '10px', marginTop: '-10px' }}>
                    <TextField
                      sx={{ flex: '1', margin: '1px 1px 1px 0' }}
                      type='houseNo'
                      name='houseNo'
                      label='House No'
                      variant="filled"
                      size="small"
                      color="secondary"
                    />
                    <TextField
                      sx={{ flex: '1', margin: '1px 0 1px 1px' }}
                      type='lane'
                      name='lane'
                      label='Lane'
                      variant="filled"
                      size="small"
                      color="secondary"
                    />
                  </Box>
                  <FormControl variant="filled" sx={{ m: 1, minWidth: 120, width: '100%', marginLeft: 'auto' }}>
                    <InputLabel id="selectDistrict" color='secondary'>Select District</InputLabel>
                    <Select labelId="selectDistrict-label">
                      <MenuItem value={1}>Ampara</MenuItem>
                      <MenuItem value={2}>Anuradhapura</MenuItem>
                      <MenuItem value={3}>Badulla</MenuItem>
                      <MenuItem value={4}>Batticaloa</MenuItem>
                      <MenuItem value={5}>Colombo</MenuItem>
                      <MenuItem value={6}>Galle</MenuItem>
                      <MenuItem value={7}>Gampaha</MenuItem>
                      <MenuItem value={8}>Hambantota</MenuItem>
                      <MenuItem value={9}>Jaffna</MenuItem>
                      <MenuItem value={10}>Kalutara</MenuItem>
                      <MenuItem value={11}>Kandy</MenuItem>
                      <MenuItem value={12}>Kegalle</MenuItem>
                      <MenuItem value={13}>Kilinochchi</MenuItem>
                      <MenuItem value={14}>Kurunegala</MenuItem>
                      <MenuItem value={15}>Mannar</MenuItem>
                      <MenuItem value={16}>Matale</MenuItem>
                      <MenuItem value={17}>Matara</MenuItem>
                      <MenuItem value={18}>Monaragala</MenuItem>
                      <MenuItem value={19}>Mullaitivu</MenuItem>
                      <MenuItem value={20}>Nuwara Eliya</MenuItem>
                      <MenuItem value={21}>Polonnaruwa</MenuItem>
                      <MenuItem value={22}>Puttalam</MenuItem>
                      <MenuItem value={23}>Ratnapura</MenuItem>
                      <MenuItem value={24}>Trincomalee</MenuItem>
                      <MenuItem value={25}>Vavuniya</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField label="City" type="city" name="city" fullWidth variant="filled" color='secondary' />
                  <Button variant="contained" color="primary" type="submit" fullWidth>
                    Sign Up
                  </Button>
                </form>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default HomeOwnerSignUp;
