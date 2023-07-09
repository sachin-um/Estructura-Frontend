import TopBar from "../components/TopBar";
import React,{useState} from "react";
import {
  Box,
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
      <Container>

       
        <Grid style={{display:"flex",justifyContent:"center"}}>
            <Button sx={{ width: 1/3,  borderRadius:2,margin:1 }}type='submit' color="secondary" variant="contained" size='small'   onClick={() => handleTabChange(1)}>Profile Details</Button>
            <Button sx={{ width: 1/3,  borderRadius:2,margin:1  }}type='submit' color="secondary" variant="contained" size='small'   onClick={() => handleTabChange(2)}>Previous Projects</Button>
            <Button sx={{ width: 1/3,  borderRadius:2,margin:1  }}type='submit' color="secondary" variant="contained" size='small'   onClick={() => handleTabChange(3)}>Responses</Button>
            <Button sx={{ width: 1/3,  borderRadius:2,margin:1  }}type='submit' color="secondary" variant="contained" size='small'   onClick={() => handleTabChange(4)}>Messages</Button>
            <Button sx={{ width: 1/3,  borderRadius:2,margin:1  }}type='submit' color="secondary" variant="contained" size='small'   onClick={() => handleTabChange(5)}>Reviews</Button>
            </Grid>
            {renderForm()}
      </Container>
     
    </>
  );
}

export default ServiceProviderProfile;


