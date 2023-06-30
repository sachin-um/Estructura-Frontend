import TopBar from "../components/TopBar";
import {
  Box,
  Button,
  Container,
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Link,
  TextField,
  Typography,
} from "@mui/material";
// import { Link } from "react-router-dom" ;

function ServiceProviderSignUp() {
  const HandleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(formData.get("email"), formData.get("password"));
  };

  // TODO: Change Layout
  return (
    <>
      <TopBar title='Sign In to Estructura' />

      <Container>
        <Grid maxWidth='lg' minHeight='100vh'  container>
          <Grid item md={6} xs={0}
            style={{
              position: 'relative',
          
            }}
          >
            { <img
              src='/signin.png'
              alt=''
             
            /> }
          </Grid>
          <Grid item md={6} xs={12} >
            <Container maxWidth='sm' 
              sx={{
                display:"flex",
                flexDirection:"column"
              }}
            >
            { <Grid style={{display:"flex",justifyContent:"center"}}>
                <img 
                height="40%"
                width="40%"
                src='/Logo.png'
                alt='logo'
                
              />
              </Grid> }
              {/* <Typography variant='h5' sx={{ textAlign: "center",textTransform: "uppercase", color:"#435834",}} >
                Welcome
              </Typography>
             */}
              <Box
                component='form'
                sx={{
                  margin: "10px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                }}
                onSubmit={HandleSubmit}
              >
               {<Grid style={{justifyContent:"center"}}>
                <TextField  InputProps={{ sx: { borderRadius: 2 } }}sx={{ width: 1,margin:1 }}type='BusinessName' name='BusinessName' label='Business Name' variant="filled" size="small"  />
                
                <FormControl fullWidth variant="filled"  InputProps={{ sx: { borderRadius: 2 } }}sx={{ width: 1,margin:1 }}>
                <InputLabel id="SelectProfessionalCategory">Professional Category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                
                >
                    <MenuItem value={1}>Architect</MenuItem>
                    <MenuItem value={2}>Interior Designer</MenuItem>
                    <MenuItem value={3}>Construction Company</MenuItem>
                    <MenuItem value={4}>Home Builder</MenuItem>
                    <MenuItem value={5}>Landscape Architect</MenuItem>
                    <MenuItem value={6}>Painter</MenuItem>
                    <MenuItem value={7}>Carpenter </MenuItem>
                </Select>
                </FormControl>
                <TextField  InputProps={{ sx: { borderRadius: 2 } }}sx={{ width: 1,margin:1 }}type='contactNo' name='contactNo' label='Business Contact Number' variant="filled" size="small" color='secondary'/>
               
                <Typography variant='h8' sx={{ textAlign: "left", color:"#435834", marginTop: '-8px', marginLeft: '10px'}} > Address </Typography>
                <Box sx={{ display: 'flex', gap: '10px' }}>
                  <TextField InputProps={{ sx: { borderRadius: 2 } }} sx={{ flex: '1', margin: 1 }} type='houseNo'name='houseNo'label='House No'variant="filled"size="small"color="secondary"/>
                  <TextField InputProps={{ sx: { borderRadius: 2 } }} sx={{ flex: '1', margin: 1 }} type='lane'name='lane'label='Lane'variant="filled"size="small" color="secondary"/>
                </Box>

                <FormControl fullWidth variant="filled" sx={{ m:1, minWidth: 120 }}>
                  <InputLabel id="selectDistrict" color='secondary'>District</InputLabel>
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
                <Box sx={{ display: 'flex', gap: '10' }}>
                  <TextField InputProps={{ sx: { borderRadius: 2 } }}sx={{ flex: '1', margin: 1 }}type='firstName'name='firstName'label='First Name'variant="filled"size="small"color="secondary"/>
                  <TextField InputProps={{ sx: { borderRadius: 2 } }} sx={{ flex: '1', margin: 1 }}type='lastName'name='lastName'label='Last Name'variant="filled"size="small"color="secondary"/>
                </Box>
                </Grid >}
    
   
                { <Grid style={{display:"flex",justifyContent:"center",margin:10}}>
                <Button sx={{ width: 1/3,  borderRadius:2 }}type='submit' color="primary" variant="contained" size='large'  href='/SignUp/ServiceProviderCategorySignup'>Sign Up</Button>
                </Grid> }
                
              </Box>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default ServiceProviderSignUp;