import { Alert, Box, Button, Divider, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import '../../assets/font.css';
import Footer from '../../components/Footer';
import TopBar from '../../components/TopAppBar';
import { useCustomerRequest } from '../../hooks/customerRequest/useCustomerRequest';
import { useCustomerRequestResponse } from '../../hooks/customerRequest/useCustomerRequestResponse';
import useCurrentUser from '../../hooks/users/useCurrentUser';
import useFetchUser from '../../hooks/users/useFetchUser';
import Loading from '../loading';

const ViewResponseCard = () => {
  const reqId = parseInt(useParams<{ id: string }>().id ?? '0');
  const reqResId = parseInt(useParams<{ resId: string }>().resId ?? '0');

  const {
    acceptOrDecline,
    getResponse: {
      customerRequestResponse,
      fetchCustomerRequestResponse,
      isLoading,
    },
  } = useCustomerRequestResponse();

  useEffect(() => {
    fetchCustomerRequestResponse(reqResId);
  }, [fetchCustomerRequestResponse, reqResId]);

  const {
    getCustomerRequest: { customerRequest, fetchCustomerRequest },
  } = useCustomerRequest();

  useEffect(() => {
    fetchCustomerRequest(reqId);
  }, [fetchCustomerRequest, reqId]);

  const { fetchUserById: fetchRequester, user: requester } = useFetchUser();
  const { fetchUserById: fetchResponder, user: responder } = useFetchUser();

  useEffect(() => {
    if (customerRequestResponse?.createBy)
      fetchResponder(customerRequestResponse.createBy);
  }, [customerRequestResponse?.createBy, fetchResponder]);

  useEffect(() => {
    if (customerRequest?.createdBy) fetchRequester(customerRequest.createdBy);
  }, [customerRequest?.createdBy, fetchRequester]);

  const backgroundImageUrl =
    'https://images.pexels.com/photos/1125135/pexels-photo-1125135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

  console.log(customerRequestResponse, customerRequest, requester, responder);

  const currentUser = useCurrentUser();

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <TopBar />
      <Box display="flex">
        <Grid
          style={{
            borderBottomRightRadius: '50%',
            flex: '0 0 50%',
            height: '110vh',
            margin: '40px',
            overflow: 'hidden',
            padding: '20px',
            position: 'relative',
          }}
          item
          md={6}
          xs={12}
        >
          <img
            style={{
              height: '100%',
              objectFit: 'cover',
              width: '100%',
            }}
            alt="Background"
            src={backgroundImageUrl}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <Box
            height="100vh"
            paddingBottom="50px"
            paddingLeft="20px"
            paddingRight="20px"
            paddingTop="50px"
          >
            <Typography fontFamily="Poppins" gutterBottom variant="h6">
              {customerRequestResponse?.shortDesc} by {responder?.firstName}{' '}
              {responder?.lastName} [{responder?.role}]
            </Typography>
            Responding to request: {customerRequest?.shortDesc} by{' '}
            {requester?.firstName} {requester?.lastName}
            <Divider sx={{ marginBottom: '20px' }} />
            <Typography
              fontFamily="Poppins"
              sx={{ marginTop: '20px' }}
              variant="subtitle1"
            >
              Description of the idea:
            </Typography>
            <Box
              sx={{
                border: '2px solid green',
                marginTop: '10px',
                padding: '10px',
                textAlign: 'justify',
              }}
            >
              <Typography
                fontFamily="Poppins"
                sx={{ textAlign: 'justify' }}
                variant="body2"
              >
                {customerRequestResponse?.response}
              </Typography>
            </Box>
            <Typography
              fontFamily="Poppins"
              sx={{ marginTop: '20px' }}
              variant="subtitle1"
            >
              Estimated Budget:
            </Typography>
            <Box
              sx={{
                border: '2px solid green',
                display: 'inline-block',
                marginLeft: '40px',
                marginTop: '10px',
                padding: '5px',
              }}
            >
              <Typography
                fontFamily="Poppins"
                sx={{ marginLeft: '5px', textAlign: 'justify' }}
                variant="body2"
              >
                {customerRequestResponse?.proposedBudget}
              </Typography>
            </Box>
            <Typography
              fontFamily="Poppins"
              sx={{ marginTop: '20px' }}
              variant="subtitle1"
            >
              Images/Documents shared:
            </Typography>
            <Box
              sx={{ alignItems: 'center', display: 'flex', marginTop: '20px' }}
            >
              {[
                [
                  customerRequestResponse?.document1,
                  customerRequestResponse?.document1Name,
                ],
                [
                  customerRequestResponse?.document2,
                  customerRequestResponse?.document2Name,
                ],
                [
                  customerRequestResponse?.document3,
                  customerRequestResponse?.document3Name,
                ],
              ].map((docs) => (
                <a
                  href={`http://localhost:8080/files/responses-files/${customerRequestResponse?.createBy}/${customerRequestResponse?.id}/${docs[1]}`}
                  key={docs[1]}
                >
                  {docs[0]}
                </a>
              ))}
              {/* <img
                style={{
                  border: '2px solid green',
                  height: '30vh',
                  marginRight: '10px',
                  padding: '5px',
                  width: '30vh',
                }}
                alt="Generated by AI"
                src="https://img.freepik.com/premium-photo/modern-living-room-clean-lines-neutral-colors-natural-elements-design-concept_763042-1619.jpg"
              />
              <img
                style={{
                  border: '2px solid green',
                  height: '30vh',
                  marginRight: '10px',
                  padding: '5px',
                  width: '30vh',
                }}
                alt="Generated by AI"
                src="https://images.squarespace-cdn.com/content/v1/542afd6de4b09148cad4044b/1627069189925-YK8168BE2DCWTIKOOGUT/Interior-Design-Drawing-and-Marker+Rendering-by+Susan-Knof.JPGg"
              /> */}
            </Box>
            {currentUser?.id === customerRequest?.createdBy && (
              <Button
                onClick={() => {
                  if (currentUser && customerRequestResponse)
                    acceptOrDecline({
                      action: 'ACCEPTED',
                      customer_id: currentUser.id,
                      response_id: customerRequestResponse.id,
                    }).then((success) => {
                      if (success) {
                        alert('Accepted');
                      } else {
                        alert('Failed to accept');
                      }
                    });
                }}
                style={{
                  display: 'block',
                  margin: '50px 150px 0',
                  width: '35%',
                }}
                color="primary"
                variant="contained"
              >
                Accept this Response
              </Button>
            )}
          </Box>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default ViewResponseCard;
