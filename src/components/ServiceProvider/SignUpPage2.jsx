import { Button, Container, Grid, Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useState } from "react";
import Professional from "./Professional";
import RentalStore from "./Rental";
import RetailStore from "./RetailStore";

function SignUpPage2({
  formData,
  updateFormData,
  handleDropdownChange,
  handlePageImage,
  nextPage,
  previousPage,
}) {
  const [activeTab, setActiveTab] = useState("one");

  const handleTabChange = (_event, tab) => {
    setActiveTab(tab);
    handlePageImage(tab);
  };


  const renderForm = () => {
    let tab = <>Oops! Something went wrong.</>;
    switch (activeTab) {
      case "one":
        tab = (
          <Professional
            updateFormData={updateFormData}
            formData={formData}
            nextPage={nextPage}
            previousPage={previousPage}
            handleDropdownChange={handleDropdownChange}
          />
        );
        break;
      case "two":
        tab = (
          <RetailStore 
            nextPage={nextPage} 
            previousPage={previousPage} 
            updateFormData={updateFormData}
            formData={formData}  
          />
        );
        break;
      case "three":
        tab = (
          <RentalStore 
            nextPage={nextPage} 
            previousPage={previousPage} 
            updateFormData={updateFormData}
            formData={formData}  
            />
        );
        break;
    }
    return tab;
  };

  // TODO: Change Layout
  return (
    <>
      <Container
        maxWidth={false}
        style={{
          backgroundColor: "#f7f8f1",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid container justifyContent='center' spacing={4}>
          <Grid
            item
            xs={12}
            md={7}
            style={{
              paddingTop: "2rem",
              paddingBottom: "2rem",
              marginTop: "4rem",
            }}
          >
            <Grid
              container
              style={{
                backgroundImage: 'url("/category.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "20px",
                height: "100%",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <Grid
                item
                xs={12}
                style={{
                  paddingLeft: "4rem",
                  paddingRight: "1rem",
                  marginBottom: "2rem",
                }}
              >
                <Typography
                  variant='h4'
                  style={{
                    color: "#ffffff",
                    fontSize: "1.5rem",
                    textAlign: "left",
                    lineHeight: "1",
                    paddingBottom: "1rem",
                    marginTop: "auto",
                  }}
                >
                  Unleash your home’s potential
                </Typography>
                <Typography
                  variant='h4'
                  style={{
                    color: "#ffffff",
                    fontSize: "1.5rem",
                    textAlign: "left",
                    lineHeight: "1",
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
                backgroundColor: "#ffffff",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                borderRadius: "20px",
                padding: "1rem 2rem 3rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "2rem",
                marginBottom: "2rem",
              }}
            >
              <Grid
                item
                xs={12}
                style={{
                  marginBottom: "0.5rem",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img src='/Logo.png' alt='Logo' style={{ width: "40%" }} />
              </Grid>
              <Grid item xs={12} style={{ marginTop: "1rem" }}>
                <Typography
                  variant='h3'
                  fontWeight='bold'
                  fontSize='1rem'
                  color='secondary'
                  align='center'
                >
                  Select your Category
                </Typography>
                <Grid style={{ display: "flex", justifyContent: "center" }}>
                  <Tabs
                    value={activeTab}
                    onChange={handleTabChange}
                    textColor='secondary'
                    indicatorColor='secondary'
                    aria-label='secondary tabs example'
                  >
                    <Tab value='one' label='Professional' />
                    <Tab value='two' label='Retail Store' />
                    <Tab value='three' label='Rental' />
                  </Tabs>
                </Grid>
                {renderForm()}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default SignUpPage2;
