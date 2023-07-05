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
  
  function ArchitectPage3() {
    const HandleSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      console.log(formData.get("email"), formData.get("password"));
    };
  
    // TODO: Change Layout
    return (
      <>
        
       
         
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
                    
                      <FormControl variant="filled" sx={{ m: 1, minWidth: 120, width: '100%', marginLeft: 'auto' }}>
                    <InputLabel id="selectDistrict" color='secondary'>What are the services you provide?</InputLabel>
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
                      
                    </Select>
                  </FormControl>
                  
                </Box>
  
      
      </>
    );
  }
  
  export default ArchitectPage3;