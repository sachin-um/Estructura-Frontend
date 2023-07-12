import TopBar from "../components/TopBar";
import React,{useState} from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Container,
  Grid,
  Stack,
  Link,
  TextField,
  Typography,
} from "@mui/material";

 import Messages from "../components/ServiceProviderProf/Messages";
 import PreviousProjects from "../components/ServiceProviderProf/PreviousProjects";
 import ProfileDetails from "../components/ServiceProviderProf/ProfileDetails";
 import Responses from "../components/ServiceProviderProf/Responses";
 import Reviews from "../components/ServiceProviderProf/Reviews";




  function ServiceProviderProfile({updateFormData,nextPage,previousPage}) {
  const HandleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(formData.get("email"), formData.get("password"));
  };

  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleNext=() =>{
    nextPage();
  }

  const handlePrevious=() =>{
    previousPage();
  }

  const renderForm = () => {
    if (activeTab === 1) {
      return <ProfileDetails />;
    }
     else if (activeTab === 2) {
      return <PreviousProjects />;
    }
    else if (activeTab === 3) {
      return <Responses />;
    }
    else if (activeTab === 4) {
      return <Messages />;
    }
    else if (activeTab === 5) {
      return <Reviews />;
    }
    return <ProfileDetails />;
    
  };

  return (
    <>
      <TopBar title='Service Provider Profile' />
    

      <Box
        position="relative"
        height="200px"
        width='100%'
         
       
      >
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
          top="30%"
          left="5%"
          transform="translate(-50%, -50%)"
          display="flex"
          alignItems="center"
          justifyContent='center'
          textAlign='center'
          zIndex="1"
          p={4}
          // bgcolor="rgba(243, 243, 243, 0.7)"
          width='80%'
          maxWidth='200px'
        >
          <Box>
          <img
          src="user.png"
          alt="user"
          style={{
            width: "80%",
            height: "100%",
            objectFit: "cover",
          }}
        />
         
          </Box>
        </Box>
      </Box>

      <Grid container spacing={2}>
      <Grid item md={2} xs={0}>
      {<Card sx={{ width:'200px',height:'400px',marginTop:'3rem' ,marginLeft:'2rem'}}>
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
        
      </CardContent>
      <CardActions>
        <Button size="small">View More</Button>
      </CardActions>
    </Card> } 
    </Grid>
   
        <Grid item md={6} xs={12} style={{display:"flex",justifyContent:"center", marginTop: '3rem',marginLeft: ''  }}>
            <Button sx={{ width:1/2,height:1/8, borderRadius:2,margin:1 }}type='submit' color="secondary" variant="contained" size='small'   onClick={() => handleTabChange(1)}>Profile Details</Button>
            <Button sx={{ width: 1/2,height:1/8, borderRadius:2,margin:1  }}type='submit' color="secondary" variant="contained" size='small'   onClick={() => handleTabChange(2)}>Previous Projects</Button>
            <Button sx={{ width: 1/2,height:1/8, borderRadius:2,margin:1  }}type='submit' color="secondary" variant="contained" size='small'   onClick={() => handleTabChange(3)}>Responses</Button>
            <Button sx={{ width: 1/2,height:1/8, borderRadius:2,margin:1  }}type='submit' color="secondary" variant="contained" size='small'   onClick={() => handleTabChange(4)}>Messages</Button>
            <Button sx={{ width: 1/2,height:1/8, borderRadius:2,margin:1  }}type='submit' color="secondary" variant="contained" size='small'   onClick={() => handleTabChange(5)}>Reviews</Button>
            
            </Grid>
            </Grid>
     
      

            {renderForm()}
       
    
     
    </>
  );
}

export default ServiceProviderProfile;


