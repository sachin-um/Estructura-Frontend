import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import {
  Alert,
  Box,
  Button,
  Divider,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import '../../assets/font.css';
import Footer from '../../components/Footer';
import AlertDialog from '../../components/Popups/AlertDialog';
import TopBar from '../../components/TopAppBar';
import { useCustomerRequest } from '../../hooks/customerRequest/useCustomerRequest';
import { useCustomerRequestResponse } from '../../hooks/customerRequest/useCustomerRequestResponse';
import useCurrentUser from '../../hooks/users/useCurrentUser';
import useFetchUser from '../../hooks/users/useFetchUser';
import Loading from '../loading';

const ViewResponseCard = () => {
  const reqId = parseInt(useParams<{ id: string }>().id ?? '0');
  const reqResId = parseInt(useParams<{ resId: string }>().resId ?? '0');

  const [alertOpen, setAlertOpen] = useState(false);
  const [alertStatus, setAlertStatus] = useState('');

  const handleAlertClose = () => {
    setAlertOpen(false);
  };
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
              {customerRequestResponse?.shortDesc}
            </Typography>
            <Typography>
              by : {responder?.firstName} {responder?.lastName} [
              {responder?.role}]
            </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography
              fontFamily="Poppins"
              sx={{ marginTop: '10px' }}
              variant="subtitle1"
            >
              Description of the idea:
            </Typography>
            <Box
              sx={{
                border: '2px solid green',
                marginTop: '10px',
                minHeight: '70px',
                padding: '10px',
                textAlign: 'justify',
                width: '100%',
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
                marginTop: '10px',
                padding: '5px',
                width: '100%',
              }}
            >
              <Typography
                fontFamily="Poppins"
                sx={{ marginLeft: '5px', textAlign: 'justify' }}
                variant="body2"
              >
                Rs:{customerRequestResponse?.proposedBudget} .00
              </Typography>
            </Box>
            <Typography
              fontFamily="Poppins"
              sx={{ marginTop: '20px' }}
              variant="subtitle1"
            >
              Relevant Images and Documents:
            </Typography>
            <Grid
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '10px',
                width: '60%',
              }}
              container
              spacing={1}
            >
              {customerRequestResponse?.document1 ? (
                <Box
                  sx={{
                    backgroundColor: '#f3f3f3',
                    border: 1,
                    borderColor: 'grey',
                  }}
                  display={'flex'}
                  height="50px"
                  marginTop="30px"
                  position="relative"
                  width="200px"
                >
                  <InsertDriveFileIcon
                    style={{
                      marginLeft: '10px',
                      marginTop: '10px',
                    }}
                  />

                  {/* <Typography
                      style={{
                        backgroundColor: '#F9F6EE',
                        justifyContent: 'center',
                        marginLeft: '20px',
                        marginTop: '10px',
                      }}
                    >
                      {fileName}
                    </Typography> */}
                  <Link
                    href={`http://localhost:8080/files/customer-request-files/${customerRequestResponse?.createBy}/${customerRequestResponse?.id}/${customerRequestResponse.document1Name}`}
                    underline="hover"
                  >
                    <Typography
                      style={{
                        fontWeight: 'bold',
                        marginLeft: '5px',
                        marginTop: '10px',
                        maxWidth: '150px',
                        overflow: 'hidden',
                        textAlign: 'left',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {customerRequestResponse?.document1}
                    </Typography>
                  </Link>
                </Box>
              ) : (
                <></>
              )}
              {customerRequestResponse?.document2 ? (
                <Box
                  sx={{
                    backgroundColor: '#f3f3f3',
                    border: 1,
                    borderColor: 'grey',
                  }}
                  display={'flex'}
                  height="50px"
                  marginTop="30px"
                  position="relative"
                  width="200px"
                >
                  <InsertDriveFileIcon
                    style={{
                      marginLeft: '10px',
                      marginTop: '10px',
                    }}
                  />

                  {/* <Typography
                      style={{
                        backgroundColor: '#F9F6EE',
                        justifyContent: 'center',
                        marginLeft: '20px',
                        marginTop: '10px',
                      }}
                    >
                      {fileName}
                    </Typography> */}
                  <Link
                    href={`http://localhost:8080/files/customer-request-files/${customerRequestResponse?.createBy}/${customerRequestResponse?.id}/${customerRequestResponse?.document2Name}`}
                    underline="hover"
                  >
                    <Typography
                      style={{
                        fontWeight: 'bold',
                        marginLeft: '5px',
                        marginTop: '10px',
                        maxWidth: '150px',
                        overflow: 'hidden',
                        textAlign: 'left',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {customerRequestResponse?.document2}
                    </Typography>
                  </Link>
                </Box>
              ) : (
                <></>
              )}
              {customerRequestResponse?.document3 ? (
                <Box
                  sx={{
                    backgroundColor: '#f3f3f3',
                    border: 1,
                    borderColor: 'grey',
                  }}
                  display={'flex'}
                  height="50px"
                  marginTop="30px"
                  position="relative"
                  width="200px"
                >
                  <InsertDriveFileIcon
                    style={{
                      marginLeft: '10px',
                      marginTop: '10px',
                    }}
                  />

                  {/* <Typography
                      style={{
                        backgroundColor: '#F9F6EE',
                        justifyContent: 'center',
                        marginLeft: '20px',
                        marginTop: '10px',
                      }}
                    >
                      {fileName}
                    </Typography> */}
                  <Link
                    href={`http://localhost:8080/files/customer-request-files/${customerRequestResponse?.createBy}/${customerRequestResponse?.id}/${customerRequestResponse?.document3Name}`}
                    underline="hover"
                  >
                    <Typography
                      style={{
                        fontWeight: 'bold',
                        marginLeft: '5px',
                        marginTop: '10px',
                        maxWidth: '150px',
                        overflow: 'hidden',
                        textAlign: 'left',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {customerRequestResponse?.document3}
                    </Typography>
                  </Link>
                </Box>
              ) : (
                <></>
              )}
            </Grid>
            <Divider sx={{ marginBottom: '10px', marginTop: '10px' }} />
            Request Details :
            <Typography>request: {customerRequest?.shortDesc}</Typography>
            <Typography>
              by: {requester?.firstName} {requester?.lastName}
            </Typography>
            <Divider sx={{ marginBottom: '10px', marginTop: '10px' }} />
            {currentUser?.id === customerRequest?.createdBy && (
              <Box>
                <Button
                  onClick={() => {
                    if (currentUser && customerRequestResponse)
                      acceptOrDecline({
                        action: 'ACCEPTED',
                        customer_id: currentUser.id,
                        response_id: customerRequestResponse.id,
                      }).then((success) => {
                        if (success) {
                          setAlertStatus('Accepted');
                          setAlertOpen(true);
                        } else {
                          setAlertStatus('Failed');
                          setAlertOpen(true);
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
                  Accept Response
                </Button>
                <Button
                  onClick={() => {
                    if (currentUser && customerRequestResponse)
                      acceptOrDecline({
                        action: 'DECLINE',
                        customer_id: currentUser.id,
                        response_id: customerRequestResponse.id,
                      }).then((success) => {
                        if (success) {
                          setAlertStatus('Declined');
                          setAlertOpen(true);
                        } else {
                          setAlertStatus('Failed');
                          setAlertOpen(true);
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
                  Decline Response
                </Button>
              </Box>
            )}
            {currentUser?.id === customerRequestResponse?.createBy && (
              <Box
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  marginTop: '10px',
                }}
              >
                <Button
                  onClick={() => {
                    if (currentUser && customerRequestResponse)
                      acceptOrDecline({
                        action: 'ACCEPTED',
                        customer_id: currentUser.id,
                        response_id: customerRequestResponse.id,
                      }).then((success) => {
                        if (success) {
                          setAlertStatus('Accepted');
                          setAlertOpen(true);
                        } else {
                          setAlertStatus('Failed');
                          setAlertOpen(true);
                        }
                      });
                  }}
                  color="primary"
                  style={{}}
                  variant="contained"
                >
                  Edit
                </Button>
                <Button
                  onClick={() => {
                    if (currentUser && customerRequestResponse)
                      acceptOrDecline({
                        action: 'DECLINE',
                        customer_id: currentUser.id,
                        response_id: customerRequestResponse.id,
                      }).then((success) => {
                        if (success) {
                          setAlertStatus('Declined');
                          setAlertOpen(true);
                        } else {
                          setAlertStatus('Failed');
                          setAlertOpen(true);
                        }
                      });
                  }}
                  color="primary"
                  style={{}}
                  variant="contained"
                >
                  Delete
                </Button>
              </Box>
            )}
          </Box>
          <AlertDialog
            content={alertStatus}
            onClose={handleAlertClose}
            open={alertOpen}
            title={alertStatus}
          />
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default ViewResponseCard;
