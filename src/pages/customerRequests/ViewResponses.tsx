import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PhoneIcon from '@mui/icons-material/Phone';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import '../../assets/font.css';
import Footer from '../../components/Footer';
import TopBar from '../../components/TopAppBar';
import { useFetchCustomerRequestResponses } from '../../hooks/customerRequest/useFetchCustomerRequestResponses';
import useFetchAllUsers from '../../hooks/users/useFetchAllUsers';

const ViewResponses = () => {
  const navigate = useNavigate();

  const reqId = parseInt(useParams<{ id: string }>().id ?? '0');

  const gotoResponse = (id: number) => () => {
    navigate(`/custom-requests/req/${reqId}/responses/${id}`);
  };

  const { customerRequestResponses, fetchCustomerRequestResponses } =
    useFetchCustomerRequestResponses();

  useEffect(() => {
    fetchCustomerRequestResponses({ requestId: reqId });
  }, [fetchCustomerRequestResponses, reqId]);

  console.log(customerRequestResponses);

  const { fetchAllUsers, users } = useFetchAllUsers();

  useEffect(() => {
    fetchAllUsers();
  }, [fetchAllUsers]);

  return (
    <>
      <TopBar />
      <Box style={bannerStyle}>
        <Container>
          <Grid alignItems="center" container justifyContent="space-between">
            <Grid item>
              <Typography style={expertiseStyle} variant="h6">
                Your Request,
              </Typography>
              <Typography style={needsStyle}>Their Expertise</Typography>
            </Grid>
            <Grid item>
              <img
                alt="ViewResponses"
                src="/public/ViewResponses.png"
                style={imageStyle}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container>
        <Grid container spacing={10}>
          {customerRequestResponses.map((card, index) => {
            const creator = users.find((u) => u.id === card.createBy);
            return (
              <Grid item key={index} md={6} xs={12}>
                <Card style={cardStyle}>
                  <CardContent style={cardContentStyle}>
                    <Typography style={titleStyle} variant="h6">
                      {card.shortDesc}
                    </Typography>
                    <Typography style={amountStyle}>
                      {card.proposedBudget}
                    </Typography>
                    <Box style={contactStyle}>
                      <AccountCircleIcon />
                      <Typography style={contactTextStyle}>
                        {creator?.firstName} {creator?.lastName} [
                        {creator?.role}]
                      </Typography>
                      <PhoneIcon style={phoneIconStyle} />
                      <Typography style={contactTextStyle}>
                        {creator?.contactNo ?? creator?.businessContactNo}
                      </Typography>
                    </Box>
                    <Box style={buttonContainerStyle}>
                      <Button
                        color="primary"
                        onClick={gotoResponse(card.id)}
                        style={viewButtonStyle}
                        variant="contained"
                      >
                        View response
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <Box style={footerContainerStyle}>
        <Footer />
      </Box>
    </>
  );
};

const bannerStyle: React.CSSProperties = {
  backgroundColor: '#F3F3F3',
  color: '#435834',
  marginBottom: '50px',
};

const expertiseStyle: React.CSSProperties = {
  fontFamily: 'Poppins',
  fontSize: '40px',
};

const needsStyle: React.CSSProperties = {
  fontFamily: 'Poppins',
  fontSize: '40px',
  marginLeft: '80px',
};

const imageStyle: React.CSSProperties = {
  maxWidth: '300px',
  paddingTop: '20px',
};

const cardStyle: React.CSSProperties = {
  border: '1px solid #ccc',
  margin: '0 auto',
  maxHeight: '240px',
  maxWidth: '500px',
};

const cardContentStyle: React.CSSProperties = {
  padding: '20px 30px',
};

const titleStyle: React.CSSProperties = {
  fontFamily: 'Poppins',
  fontSize: '20px',
  fontWeight: 'bold',
  marginBottom: '20px',
  textAlign: 'center',
};

const amountStyle: React.CSSProperties = {
  fontFamily: 'Poppins',
  fontSize: '18px',
  marginBottom: '20px',
  textAlign: 'left',
};

const contactStyle: React.CSSProperties = {
  alignItems: 'center',
  display: 'flex',
  marginTop: '20px',
};

const contactTextStyle: React.CSSProperties = {
  fontFamily: 'Poppins',
  fontSize: '15px',
  marginLeft: '10px',
};

const phoneIconStyle: React.CSSProperties = {
  marginLeft: '120px',
};

const buttonContainerStyle: React.CSSProperties = {
  alignItems: 'flex-start',
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
};

const viewButtonStyle: React.CSSProperties = {
  marginRight: '10px',
};

const footerContainerStyle: React.CSSProperties = {
  marginTop: '50px',
};

export default ViewResponses;
