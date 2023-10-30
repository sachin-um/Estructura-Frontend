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
import { useNavigate } from 'react-router-dom';

import '../../assets/font.css';
import Footer from '../../components/Footer';
import TopBar from '../../components/TopAppBar';
import { useFetchCustomerRequests } from '../../hooks/customerRequest/useFetchCustomerRequests';
import useFetchAllUsers from '../../hooks/users/useFetchAllUsers';

const ViewCustomerRequests = ({ my }: { my?: boolean }) => {
  const navigate = useNavigate();

  const goToRequestView = (id: number) => () => {
    navigate(`/custom-requests/req/${id}`);
  };

  const goToResponses = (id: number) => () => {
    navigate(`/custom-requests/req/${id}/responses`);
  };

  const { customerRequests, fetchCustomerRequests, isLoading } =
    useFetchCustomerRequests();

  const { fetchAllUsers, isLoading: usersLoading, users } = useFetchAllUsers();

  useEffect(() => {
    fetchAllUsers();
  }, [fetchAllUsers]);
  useEffect(() => {
    fetchCustomerRequests({});
  }, [fetchCustomerRequests]);

  console.log(customerRequests, users);

  return (
    <>
      <TopBar />
      <Box style={bannerStyle}>
        <Container>
          <Grid alignItems="center" container justifyContent="space-between">
            <Grid item>
              <Typography style={expertiseStyle} variant="h6">
                Your Expertise,
              </Typography>
              <Typography style={needsStyle}>Their Needs</Typography>
            </Grid>
            <Grid item>
              <img
                alt="ViewRequest"
                src="/ViewRequests.png"
                style={imageStyle}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container>
        <Grid container spacing={10}>
          {customerRequests.map((customerRequest, index) => {
            const creator = users?.find(
              (u) => u.id === customerRequest.createdBy,
            );
            return (
              <Grid item key={index} md={6} xs={12}>
                <Card style={cardStyle}>
                  <CardContent style={cardContentStyle}>
                    <Typography style={titleStyle} variant="h6">
                      {customerRequest.shortDesc}
                    </Typography>
                    <Typography style={amountStyle}></Typography>
                    <Box style={contactStyle}>
                      <AccountCircleIcon />
                      <Typography style={contactTextStyle}>
                        {creator?.firstName + ' ' + creator?.lastName}
                      </Typography>
                      <PhoneIcon style={phoneIconStyle} />
                      <Typography style={contactTextStyle}>
                        {creator?.contactNo ?? creator?.businessContactNo ?? ''}
                      </Typography>
                    </Box>
                    <Box style={buttonContainerStyle}>
                      <Button
                        color="primary"
                        onClick={goToRequestView(customerRequest.id)}
                        style={viewButtonStyle}
                        variant="contained"
                      >
                        View request
                      </Button>
                      {/* <Button
                        color="primary"
                        onClick={goToResponses(customerRequest.id)}
                        style={viewResponsesButtonStyle}
                        variant="contained"
                      >
                        View Responses
                      </Button> */}
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
  maxWidth: '500px',
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
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '30px',
};

const viewButtonStyle: React.CSSProperties = {
  flex: '1',
  marginRight: '10px',
};

const viewResponsesButtonStyle: React.CSSProperties = {
  flex: '1',
  marginLeft: '10px',
};

const footerContainerStyle: React.CSSProperties = {
  marginTop: '50px',
};

export default ViewCustomerRequests;
