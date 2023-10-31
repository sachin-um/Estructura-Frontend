import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { useEffect } from 'react';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import '../../assets/font.css';
import { useFetchCustomerRequestResponses } from '../../hooks/customerRequest/useFetchCustomerRequestResponses';
import useCurrentUser from '../../hooks/users/useCurrentUser';
import Loading from '../../pages/loading';

function Responses() {
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

  const { customerRequestResponses, fetchCustomerRequestResponses, isLoading } =
    useFetchCustomerRequestResponses();

  const currentUser = useCurrentUser();

  useEffect(() => {
    if (currentUser)
      fetchCustomerRequestResponses({
        providerId: currentUser.id,
      });
  }, [currentUser, fetchCustomerRequestResponses]);

  const goToResponseView = (id: number, reqId: number) => () => {
    navigate(`/custom-requests/req/${reqId}/responses/${id}`);
  };
  const navigate = useNavigate();
  // const cards = [
  //   {
  //     date: '11/12/2023',
  //     description:
  //       ' The design could focus on seamlessly integrating biophilic elements throughout the complex to foster a deep connection between the inhabitants and the natural world. Green rooftops could adorn thestructures which not only adds relaxation to the residents, but also reduce heat absorption and improve energy efficiency. Vertical gardens can grace the facades of the buildings while indoor-outdoor spaces can be incorporated into the complexs layout.',
  //     requestID: 'Request ID',
  //     status: 'Pending',
  //   },
  //   {
  //     description:
  //       ' The design could focus on seamlessly integrating biophilic elements throughout the complex to foster a deep connection between the inhabitants and the natural world. Green rooftops could adorn thestructures which not only adds relaxation to the residents, but also reduce heat absorption and improve energy efficiency. Vertical gardens can grace the facades of the buildings while indoor-outdoor spaces can be incorporated into the complexs layout.',
  //     requestID: 'Request ID',
  //     status: 'Pending',
  //   },
  //   {
  //     description:
  //       ' The design could focus on seamlessly integrating biophilic elements throughout the complex to foster a deep connection between the inhabitants and the natural world. Green rooftops could adorn thestructures which not only adds relaxation to the residents, but also reduce heat absorption and improve energy efficiency. Vertical gardens can grace the facades of the buildings while indoor-outdoor spaces can be incorporated into the complexs layout.',
  //     requestID: 'Request ID',
  //     status: 'Pending',
  //   },
  //   {
  //     description:
  //       ' The design could focus on seamlessly integrating biophilic elements throughout the complex to foster a deep connection between the inhabitants and the natural world. Green rooftops could adorn thestructures which not only adds relaxation to the residents, but also reduce heat absorption and improve energy efficiency. Vertical gardens can grace the facades of the buildings while indoor-outdoor spaces can be incorporated into the complexs layout.',
  //     requestID: 'Request ID',
  //     status: 'Pending',
  //   },
  // ];
  return isLoading ? (
    <Loading />
  ) : (
    <>
      {console.log(customerRequestResponses)}
      {customerRequestResponses.map((card, index) => (
        <Grid item key={index} md={6} xs={12}>
          <Card style={cardStyle}>
            <CardContent style={cardContentStyle}>
              <Typography style={requestIDStyle} variant="h6">
                {card.id}
              </Typography>
              <Typography style={dateStyle}>
                {new Date(card.dateAdded).toLocaleDateString('en-US')}
              </Typography>

              <Typography style={descriptionStyle}>{card.shortDesc}</Typography>
              <Box style={contactStyle}>
                <WorkHistoryIcon />
                <Typography style={statusStyle}>{card.status}</Typography>
              </Box>

              <Box style={buttonContainerStyle}>
                <Button
                  color="primary"
                  onClick={goToResponseView(card.id, card.custReqId)}
                  style={viewButtonStyle}
                  variant="contained"
                >
                  View responses
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  );
}

const cardStyle: React.CSSProperties = {
  border: '1px solid #ccc',
  margin: '0 auto',
  maxHeight: '340px',
  maxWidth: '500px',
};

const cardContentStyle: React.CSSProperties = {
  padding: '20px 30px',
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

const contactStyle: React.CSSProperties = {
  alignItems: 'center',
  display: 'flex',
  marginTop: '20px',
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

export default Responses;
