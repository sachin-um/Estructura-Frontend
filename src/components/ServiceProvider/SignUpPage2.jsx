import { Container, Grid, Typography } from '@mui/material';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useState } from 'react';

import Professional from './Professional';
import RentalStore from './Rental';
import RetailStore from './RetailStore';

function SignUpPage2({
  formData,
  handleDropdownChange,
  handlePageImage,
  nextPage,
  previousPage,
  updateFormData,
}) {
  const [activeTab, setActiveTab] = useState('one');

  const handleTabChange = (_event, tab) => {
    setActiveTab(tab);
    handlePageImage(tab);
  };


  const renderForm = () => {
    let tab = <>Oops! Something went wrong.</>;
    switch (activeTab) {
      case 'one':
        tab = (
          <Professional
            formData={formData}
            handleDropdownChange={handleDropdownChange}
            nextPage={nextPage}
            previousPage={previousPage}
            updateFormData={updateFormData}
          />
        );
        break;
      case 'two':
        tab = (
          <RetailStore
            formData={formData}
            nextPage={nextPage}
            previousPage={previousPage}
            updateFormData={updateFormData}
          />
        );
        break;
      case 'three':
        tab = (
          <RentalStore
            formData={formData}
            nextPage={nextPage}
            previousPage={previousPage}
            updateFormData={updateFormData}
          />
        );
        break;
      default:
        tab = <>What&apos;s This?</>;
    }
    return tab;
  };

  // TODO: Change Layout
  return (
    <>
      <Container
        style={{
          alignItems: 'center',
          backgroundColor: '#f7f8f1',
          display: 'flex',
        }}
        maxWidth={false}
      >
        <Grid container justifyContent="center" spacing={4}>
          <Grid
            style={{
              marginTop: '4rem',
              paddingBottom: '2rem',
              paddingTop: '2rem',
            }}
            item
            md={7}
            xs={12}
          >
            <Grid
              style={{
                alignItems: 'flex-end',
                backgroundImage: 'url("/category.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "20px",
                height: "100%",
                display: "flex",
                alignItems: "flex-end",
              marginTop: "2rem",
              }}
              container
            >
              <Grid
                style={{
                  marginBottom: '2rem',
                  paddingLeft: '4rem',
                  paddingRight: '1rem',
                }}
                item
                xs={12}
              >
                <Typography
                  style={{
                    color: '#ffffff',
                    fontSize: '1.5rem',
                    lineHeight: '1',
                    marginTop: 'auto',
                    paddingBottom: '1rem',
                    textAlign: 'left',
                  }}
                  variant="h4"
                >
                  Unleash your home’s potential
                </Typography>
                <Typography
                  style={{
                    color: '#ffffff',
                    fontSize: '1.5rem',
                    lineHeight: '1',
                    textAlign: 'left',
                  }}
                  variant="h4"
                >
                  with everything at your fingertips
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={5} xs={12}>
            <Grid
              style={{
                alignItems: 'center',
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginBottom: '2rem',
                marginTop: '2rem',
                padding: '1rem 2rem 3rem',
              }}
              container
            >
              <Grid
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '0.5rem',
                }}
                item
                xs={12}
              >
                <img alt="Logo" src="/Logo.png" style={{ width: '40%' }} />
              </Grid>
              <Grid item style={{ marginTop: '1rem' }} xs={12}>
                <Typography
                  align="center"
                  color="secondary"
                  fontSize="1rem"
                  fontWeight="bold"
                  variant="h3"
                >
                  Select your Category
                </Typography>
                <Grid style={{ display: 'flex', justifyContent: 'center' }}>
                  <Tabs
                    aria-label="secondary tabs example"
                    indicatorColor="secondary"
                    onChange={handleTabChange}
                    textColor="secondary"
                    value={activeTab}
                  >
                    <Tab label="Professional" value="one" />
                    <Tab label="Retail Store" value="two" />
                    <Tab label="Rental" value="three" />
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
