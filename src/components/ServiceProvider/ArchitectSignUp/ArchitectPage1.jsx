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
  
  function ArchitectPage1(updateFormData,nextPage,previousPage) {
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
                 {<Grid style={{justifyContent:"center"}}>
                  <TextField  InputProps={{ sx: { borderRadius: 2 } }}sx={{ width: 1,margin:1 }}type='SLIARegNumber'   name='SLIARegNumber' label='SLIA Registration Number' variant="filled" size="small"  />
                  <TextField  InputProps={{ sx: { borderRadius: 2 } }}sx={{ width: 1,margin:1 }}type='SLIACertificate' name='SLIACertificate' label='SLIA Certificate' variant="filled" size="small"  />
                  <TextField  InputProps={{ sx: { borderRadius: 2 } }}sx={{ width: 1,margin:1 }}type='nic' name='nic' label='NIC' variant="filled" size="small"  />
                  <TextField  InputProps={{ sx: { borderRadius: 2 } }}sx={{ width: 1,margin:1 }}type='website' name='website' label='Website' variant="filled" size="small"  />
                  </Grid >}
      
     
                  {/* { <Grid style={{display:"flex",justifyContent:"center",margin:10}}>
                  <Button sx={{ width: 1/3,  borderRadius:2 }}type='submit' color="primary" variant="contained" size='large'  href=''>Next</Button>
                  </Grid> } */}
                  
                </Box>
  
      
      </>
    );
  }
  
  export default ArchitectPage1;