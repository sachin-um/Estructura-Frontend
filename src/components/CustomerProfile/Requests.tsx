import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PhoneIcon from '@mui/icons-material/Phone';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useFetchCustomerRequests } from '../../hooks/customerRequest/useFetchCustomerRequests';
import useCurrentUser from '../../hooks/users/useCurrentUser';
import Loading from '../../pages/loading';

function Requests() {
  const cardStyle = {
    '&:hover': {
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
      transform: 'scale(1.05)',
    },
    marginTop: '2rem',
    transition: 'transform 0.2s, box-shadow 0.2s',
    width: '90%',
  };

  const { customerRequests, fetchCustomerRequests, isLoading } =
    useFetchCustomerRequests();

  const currentUser = useCurrentUser();

  useEffect(() => {
    fetchCustomerRequests({
      customerId: currentUser?.id,
    });
  }, [currentUser?.id, fetchCustomerRequests]);

  const navigate = useNavigate();

  const goToRequestView = (id: number) => () => {
    navigate(`/custom-requests/req/${id}`);
  };

  const goToResponses = (id: number) => () => {
    navigate(`/custom-requests/req/${id}/responses`);
  };

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <Grid container spacing={10}>
        {customerRequests.map((customerRequest, index) => {
          console.log(customerRequest);
          const creator = currentUser;
          return (
            <Grid item key={index} md={6} xs={12}>
              {/* <Card style={cardStyle}>
                <CardContent style={cardContentStyle}>
                  <Typography style={titleStyle} variant="h6">
                    {customerRequest.shortDesc}
                  </Typography>
                  <Typography style={amountStyle}></Typography>
                  {customerRequest.description}
                  <Box style={buttonContainerStyle}>
                    <Button
                      color="primary"
                      onClick={goToRequestView(customerRequest.id)}
                      style={viewButtonStyle}
                      variant="contained"
                    >
                      View request
                    </Button>
                    <Button
                      color="primary"
                      onClick={goToResponses(customerRequest.id)}
                      style={viewResponsesButtonStyle}
                      variant="outlined"
                    >
                      View Responses
                    </Button>
                  </Box>
                </CardContent>
              </Card> */}
              <Card style={cardStyle}>
                <CardContent style={cardContentStyle}>
                  <Typography style={requestIDStyle} variant="h6">
                    Request ID : {customerRequest.id}
                  </Typography>

                  <Typography style={descriptionStyle}>
                    {customerRequest.description}
                  </Typography>
                  <Box style={contactStyle}>
                    <WorkHistoryIcon />
                    <Typography style={statusStyle}>
                      {customerRequest.status === 'AWAITINGFORRESPONSE'
                        ? 'Awaiting for response'
                        : customerRequest.status === 'AWAITINGFORACCEPT'
                        ? 'Awaiting for acceptance'
                        : customerRequest.status === 'COMPLETED'
                        ? 'Completed'
                        : ''}
                    </Typography>
                  </Box>
                  <Typography style={dateStyle}>
                    created on :
                    {new Date(customerRequest.dateAdded).toLocaleDateString(
                      'en-US',
                    )}
                  </Typography>
                  <Box style={buttonContainerStyle}>
                    <Button
                      color="primary"
                      onClick={goToRequestView(customerRequest.id)}
                      style={viewButtonStyle}
                      variant="contained"
                    >
                      View request
                    </Button>
                    <Button
                      color="primary"
                      onClick={goToResponses(customerRequest.id)}
                      style={viewResponsesButtonStyle}
                      variant="contained"
                    >
                      View Responses
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default Requests;

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

const requestIDStyle: React.CSSProperties = {
  fontFamily: 'Poppins',
  fontSize: '20px',
  fontWeight: 'bold',
  marginBottom: '20px',
};

const descriptionStyle: React.CSSProperties = {
  fontFamily: 'Poppins',
  fontSize: '14px',
  marginBottom: '20px',
  textAlign: 'left',
};

const statusStyle: React.CSSProperties = {
  fontFamily: 'Poppins',
  fontSize: '15px',
  marginLeft: '10px',
};

const dateStyle: React.CSSProperties = {
  fontFamily: 'Poppins',
  fontSize: '13px',
  fontWeight: 'bold',
  marginBottom: '20px',
};
