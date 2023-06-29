import TopBar from "../components/TopBar";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Link,
  TextField,
  Typography,
} from "@mui/material";


function HomeOwnerSignUp() {
  return (
    <div style={{ height: '100vh' }}>
      <TopBar title='Sign up as a Homeowner' />
        <div style={{backgroundImage:"url('/formBg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', minHeight:'100vh', display: 'flex', justifyContent:'center', alignItems:'center', padding: '100px 0'}}>
          <div style={{padding:20, backgroundColor:"white", borderRadius:20, maxWidth:1000}}>
            <Container>
              <Grid maxWidth='lg' minHeight='100vh' container>
                <Grid item md={6} xs={0}
                  style={{
                    position: 'relative',
                    top: '100px',
                    left: '-130px'
                  }}
                >
                  { <img
                      width='150%'
                      height='90%'
                      src='/homeowner.png'
                      alt='homeownerSignup'
                    />}
                </Grid>
                <Grid item md={6} xs={12}>
                  <Container maxWidth='sm'
                    sx={{
                      display: 'flex',
                      flexDirection: 'column'
                    }}
              >
              { <Grid style={{display:"flex", justifyContent:"center"}}>
                  <img 
                    height='40%'
                    width='40%'
                    src='/Logo.png'
                    alt='logo'
                    style={{paddingLeft: '30%',
                    marginTop: '30px'
                  }}
                  />
              </Grid>}   
                
                <Box
                  component='form'
                  sx={{
                    margin: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                  }}
                  //onSubmit={HandleSubmit}
                >
                
                <TextField  InputProps={{ sx: { borderRadius: 2 } }}sx={{ width: 1,margin:1 }}type='email' name='email' label='Email' variant="filled" size="small" color='secondary'/>
                <Box sx={{ display: 'flex', gap: '10px' }}>
                  <TextField
                    InputProps={{ sx: { borderRadius: 2 } }}
                    sx={{ flex: '1', margin: 1 }}
                    type='firstName'
                    name='firstName'
                    label='First Name'
                    variant="filled"
                    size="small"
                    color="secondary"
                  />
                  <TextField
                    InputProps={{ sx: { borderRadius: 2 } }}
                    sx={{ flex: '1', margin: 1 }}
                    type='lastName'
                    name='lastName'
                    label='Last Name'
                    variant="filled"
                    size="small"
                    color="secondary"
                  />
                </Box>
                <TextField  InputProps={{ sx: { borderRadius: 2 } }}sx={{ width: 1,margin:1 }}type='contactNo' name='contactNo' label='Contact Number' variant="filled" size="small" color='secondary'/>
                <TextField  InputProps={{ sx: { borderRadius: 2 } }}sx={{ width: 1,margin:1 }}type='password' name='password' label='Password' variant="filled" size="small" color='secondary'/>
                <TextField  InputProps={{ sx: { borderRadius: 2 } }}sx={{ width: 1,margin:1 }}type='confirmPassword' name='confirmPassword' label='Confirm Password' variant="filled" size="small" color='secondary'/>
                <Typography variant='h8' sx={{ textAlign: "left", color:"#435834", marginTop: '-8px', marginLeft: '10px'}} > Address </Typography>
                <Box sx={{ display: 'flex', gap: '10px' }}>
                  <TextField
                    InputProps={{ sx: { borderRadius: 2 } }}
                    sx={{ flex: '1', margin: 1 }}
                    type='houseNo'
                    name='houseNo'
                    label='House No'
                    variant="filled"
                    size="small"
                    color="secondary"
                  />
                  <TextField
                    InputProps={{ sx: { borderRadius: 2 } }}
                    sx={{ flex: '1', margin: 1 }}
                    type='lane'
                    name='lane'
                    label='Lane'
                    variant="filled"
                    size="small"
                    color="secondary"
                  />
                </Box>

                <FormControl variant="filled" sx={{ m:1, minWidth: 120 }}>
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
                <TextField  InputProps={{ sx: { borderRadius: 2 } }}sx={{ width: 1,margin:1 }}type='city' name='city' label='City' variant="filled" size="small" color='secondary'/>
                <Button sx={{ width: 1/3, padding: 1, marginLeft: 23,borderRadius:2 ,marginTop:2}}type='submit' color="primary" variant="contained" size='large'>Sign Up</Button>
                </Box>
              </Container>
            </Grid>
          </Grid>
        </Container>

          </div>
        </div> 
    </div>
  );
}
export default HomeOwnerSignUp;