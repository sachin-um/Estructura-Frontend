import React from 'react';
import TopBar from '../components/TopAppBar';
import Footer from '../components/Footer';
import '../assets/font.css';
import {
  Typography,
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PhoneIcon from '@mui/icons-material/Phone';

const ViewResponses = () => {
  const cards = [
    {
      title: 'Response Title 1',
      amount: 'Min: LKR. 50 000 - LKR. 150 000',
      requesterName: 'UserName',
      requesterPhone: '+94 77 3829138',
    },
    {
      title: 'Response Title 2',
      amount: 'Min: LKR. 150 000 - LKR. 250 000',
      requesterName: 'UserName',
      requesterPhone: '+94 76 3829138',
    },
    {
      title: 'Response Title 3',
      amount: 'Min: LKR. 150 000 - LKR. 250 000',
      requesterName: 'UserName',
      requesterPhone: '+94 76 3829138',
    },
    {
      title: 'Response Title 4',
      amount: 'Min: LKR. 150 000 - LKR. 250 000',
      requesterName: 'UserName',
      requesterPhone: '+94 76 3829138',
    },
    {
      title: 'Response Title 5',
      amount: 'Min: LKR. 150 000 - LKR. 250 000',
      requesterName: 'UserName',
      requesterPhone: '+94 76 3829138',
    },
    {
      title: 'Response Title 6',
      amount: 'Min: LKR. 150 000 - LKR. 250 000',
      requesterName: 'UserName',
      requesterPhone: '+94 76 3829138',
    },
  ];
  return (
    <>
      <TopBar />
      <Box style={bannerStyle}>
        <Container>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h6" style={expertiseStyle}>
                Your Request,
              </Typography>
              <Typography style={needsStyle}>Their Expertise</Typography>
            </Grid>
            <Grid item>
              <img
                src="ViewResponses.png"
                alt="ViewResponses"
                style={imageStyle}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container>
        <Grid container spacing={10}>
          {cards.map((card, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card style={cardStyle}>
                <CardContent style={cardContentStyle}>
                  <Typography variant="h6" style={titleStyle}>
                    {card.title}
                  </Typography>
                  <Typography style={amountStyle}>{card.amount}</Typography>
                  <Box style={contactStyle}>
                    <AccountCircleIcon />
                    <Typography style={contactTextStyle}>
                      {card.requesterName}
                    </Typography>
                    <PhoneIcon style={phoneIconStyle} />
                    <Typography style={contactTextStyle}>
                      {card.requesterPhone}
                    </Typography>
                  </Box>
                  <Box style={buttonContainerStyle}>
                    <Button
                      variant="contained"
                      color="primary"
                      style={acceptButtonStyle}
                    >
                      Accept response
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box style={footerContainerStyle}>
        <Footer />
      </Box>
    </>
  );
};

const bannerStyle = {
  backgroundColor: '#F3F3F3',
  color: '#435834',
  marginBottom: '50px',
};

const expertiseStyle = {
  fontSize: '40px',
  fontFamily: 'Poppins',
};

const needsStyle = {
  fontSize: '40px',
  marginLeft: '80px',
  fontFamily: 'Poppins',
};

const imageStyle = {
  maxWidth: '300px',
  paddingTop: '20px',
};

const cardStyle = {
  border: '1px solid #ccc',
  maxWidth: '500px',
  maxHeight: '240px',
  margin: '0 auto',
};

const cardContentStyle = {
  padding: '20px 30px',
};

const titleStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
  fontFamily: 'Poppins',
  textAlign: 'center',
  marginBottom: '20px',
};

const amountStyle = {
  fontSize: '18px',
  fontFamily: 'Poppins',
  textAlign: 'left',
  marginBottom: '20px',
};

const contactStyle = {
  display: 'flex',
  alignItems: 'center',
  marginTop: '20px',
};

const contactTextStyle = {
  fontFamily: 'Poppins',
  fontSize: '15px',
  marginLeft: '10px',
};

const phoneIconStyle = {
  marginLeft: '120px',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  marginTop: '20px',
};

const acceptButtonStyle = {
  marginRight: '10px',
};

const footerContainerStyle = {
  marginTop: '50px',
};

export default ViewResponses;
