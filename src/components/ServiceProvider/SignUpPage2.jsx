import React,{useState} from "react";
import Professional from "./Professional";
import RetailStore from "./RetailStore";
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

function SignUpPage2({updateFormData,nextPage,previousPage}) {
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
      return <Professional />;
    } else if (activeTab === 2) {
      return <RetailStore />;
    }
    return null;
  };

  // TODO: Change Layout
  return (
    <>
     

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
            <Grid style={{display:"flex",justifyContent:"center"}}>
            <Button sx={{ width: 1/3,  borderRadius:2,margin:1 }}type='submit' color="secondary" variant="contained" size='large'   onClick={() => handleTabChange(1)}>Professional</Button>
            <Button sx={{ width: 1/3,  borderRadius:2,margin:1  }}type='submit' color="secondary" variant="contained" size='large'   onClick={() => handleTabChange(2)}>Retail Store</Button>
            </Grid>
            {renderForm()}

            { <Grid style={{display:"flex",justifyContent:"center",margin:10}}>
                <Button sx={{ width: 1/3,  borderRadius:2,margin:1  }}type='submit' color="primary" variant="contained" size='large' onClick={handlePrevious}>Previous</Button>
                <Button sx={{ width: 1/3,  borderRadius:2,margin:1 }}type='submit' color="primary" variant="contained" size='large'  onClick={handleNext}>Next</Button>
            </Grid> }
            </Container>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default SignUpPage2;