import { Button, Container, Grid, Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useState } from "react";
import Professional from "./Professional";
import RentalStore from "./Rental";
import RetailStore from "./RetailStore";

function SignUpPage2({
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

  const handleNext = () => {
    nextPage();
  };

  const handlePrevious = () => {
    previousPage();
  };

  const renderForm = () => {
    let tab = <>
      Oops! Something went wrong.
    </>;
    switch (activeTab) {
      case "one":
        tab = <Professional handleDropdownChange={handleDropdownChange} />;
        break;
      case "two":
        tab = <RetailStore />;
        break;
      case "three":
        tab = <RentalStore />;
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
                    align="center"
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
              {
                <Grid
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: 10,
                    width: "80%",
                  }}
                >
                  <Button
                    sx={{ width: 1 / 2, borderRadius: 2, margin: 1 }}
                    type='submit'
                    color='primary'
                    variant='contained'
                    size='large'
                    onClick={handlePrevious}
                  >
                    Previous
                  </Button>
                  <Button
                    sx={{ width: 1 / 2, borderRadius: 2, margin: 1 }}
                    type='submit'
                    color='primary'
                    variant='contained'
                    size='large'
                    onClick={handleNext}
                  >
                    Next
                  </Button>
                </Grid>
              }
            </Grid>
          </Grid>
        </Grid>
      </Container>
      {/*
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
      </Container> */}
    </>
  );
}

export default SignUpPage2;
