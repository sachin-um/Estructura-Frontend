import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { Box, Button, Divider, Grid, Link, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import '../../assets/font.css';
import Footer from '../../components/Footer';
import NoResultsFound from '../../components/NoResults';
import TopBar from '../../components/TopAppBar';
import { useCustomerRequest } from '../../hooks/customerRequest/useCustomerRequest';
import useCurrentUser from '../../hooks/users/useCurrentUser';
import useFetchUser from '../../hooks/users/useFetchUser';
import Loading from '../loading';

const ViewCustomerRequestCard = () => {
  const requestId = parseInt(useParams<{ id: string }>().id ?? '0');

  const {
    getCustomerRequest: { customerRequest, fetchCustomerRequest, isLoading },
  } = useCustomerRequest();

  useEffect(() => {
    fetchCustomerRequest(requestId);
  }, [fetchCustomerRequest, requestId]);

  const { fetchUserById, user } = useFetchUser();

  useEffect(() => {
    if (customerRequest) fetchUserById(customerRequest.createdBy);
  }, [customerRequest, fetchUserById]);

  const backgroundImageUrl =
    'https://www.home-designing.com/wp-content/uploads/2018/06/kid-s-decor.jpg';

  const navigate = useNavigate();

  const respond = (id: number) => () => {
    navigate(`/custom-requests/req/${id}/respond`);
  };

  const goToResponses = (id: number) => () => {
    navigate(`/custom-requests/req/${id}/responses`);
  };

  const currentUser = useCurrentUser();

  return customerRequest !== null ? (
    <>
      <TopBar />
      <Box display="flex">
        <Grid
          style={{
            borderBottomRightRadius: '50%',
            flex: '0 0 50%',
            margin: '40px',
            overflow: 'hidden',
            padding: '20px',
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
            paddingBottom="50px"
            paddingLeft="20px"
            paddingRight="20px"
            paddingTop="50px"
          >
            <Typography fontFamily="Poppins" gutterBottom variant="h6">
              {customerRequest.shortDesc}
            </Typography>
            {/* The creator Details */}
            {/* <pre>{JSON.stringify(user, null, 2)}</pre>
            <pre>{JSON.stringify(customerRequest, null, 2)}</pre> */}
            <Divider sx={{ marginBottom: '20px' }} />
            <Box
              sx={{ alignItems: 'center', display: 'flex', marginTop: '20px' }}
            >
              <Typography
                fontFamily="Poppins"
                marginRight="10px"
                variant="subtitle1"
              >
                Category/s of Professional/s:
              </Typography>
              <Box
                sx={{
                  alignItems: 'center',
                  border: '2px solid green',
                  display: 'flex',
                  marginRight: '20px',
                  padding: '5px',
                }}
              >
                {customerRequest.targetCategories.map((category) => {
                  if (category.role === 'ARCHITECT') {
                    return (
                      <>
                        <img
                          style={{
                            height: '50px',
                            marginRight: '10px',
                            width: '50px',
                          }}
                          alt="Category Icon"
                          src="https://designeverest.com/wp-content/uploads/2023/01/what-is-the-role-of-an-architect-in-building-a-house-1629876140.jpg"
                        />
                        <Typography fontFamily="Poppins" variant="body2">
                          Architect
                        </Typography>
                      </>
                    );
                  } else if (category.role === 'CARPENTER') {
                    return (
                      <>
                        <img
                          style={{
                            height: '50px',
                            marginRight: '10px',
                            width: '50px',
                          }}
                          alt="Category Icon"
                          src="https://generisonline.com/wp-content/uploads/2022/05/The-difference-between-a-joiner-and-a-carpenter-1.jpg"
                        />
                        <Typography fontFamily="Poppins" variant="body2">
                          Carpenter
                        </Typography>
                      </>
                    );
                  } else if (category.role === 'CONSTRUCTIONCOMPANY') {
                    return (
                      <>
                        <img
                          style={{
                            height: '50px',
                            marginRight: '10px',
                            width: '50px',
                          }}
                          alt="Category Icon"
                          src="https://www.crystalconstruction.lk/wp-content/uploads/2023/05/The-Benefits-of-Hiring-a-Professional-Construction-Company-in-Sri-Lanka.png"
                        />
                        <Typography fontFamily="Poppins" variant="body2">
                          Construction Company
                        </Typography>
                      </>
                    );
                  } else if (category.role === 'INTERIORDESIGNER') {
                    return (
                      <>
                        <img
                          style={{
                            height: '50px',
                            marginRight: '10px',
                            width: '50px',
                          }}
                          alt="Category Icon"
                          src="https://www.myperfectresume.com/wp-content/uploads/2020/09/how-to-become-an-interior-designer.jpg"
                        />
                        <Typography fontFamily="Poppins" variant="body2">
                          Construction Company
                        </Typography>
                      </>
                    );
                  } else if (category.role === 'LANDSCAPEARCHITECT') {
                    return (
                      <>
                        <img
                          style={{
                            height: '50px',
                            marginRight: '10px',
                            width: '50px',
                          }}
                          alt="Category Icon"
                          src="https://design.asu.edu/sites/default/files/2022-07/landscape-drawing-pencil.jpg"
                        />
                        <Typography fontFamily="Poppins" variant="body2">
                          Construction Company
                        </Typography>
                      </>
                    );
                  } else if (category.role === 'MASONWORKER') {
                    return (
                      <>
                        <img
                          style={{
                            height: '50px',
                            marginRight: '10px',
                            width: '50px',
                          }}
                          alt="Category Icon"
                          src="https://www.ibuildnew.com.au/blog/wp-content/uploads/2018/06/Builder-looking-up.png"
                        />
                        <Typography fontFamily="Poppins" variant="body2">
                          Construction Company
                        </Typography>
                      </>
                    );
                  } else if (category.role === 'PAINTER') {
                    return (
                      <>
                        <img
                          style={{
                            height: '50px',
                            marginRight: '10px',
                            width: '50px',
                          }}
                          alt="Category Icon"
                          src="https://blog.renovationfind.com/wp-content/uploads/2019/01/Painter-in-Edmonton.jpg"
                        />
                        <Typography fontFamily="Poppins" variant="body2">
                          Construction Company
                        </Typography>
                      </>
                    );
                  }
                })}
              </Box>
            </Box>
            <Box
              sx={{ alignItems: 'center', display: 'flex', marginTop: '20px' }}
            >
              <Typography
                fontFamily="Poppins"
                marginRight="10px"
                variant="subtitle1"
              >
                Type/s of retail item/s looking for:
              </Typography>
              <Box
                sx={{
                  alignItems: 'center',
                  border: '2px solid green',
                  display: 'flex',
                  marginRight: '20px',
                  padding: '5px',
                }}
              >
                {customerRequest.targetRetailCategories.map((category) => {
                  if (category.retailItemType === 'LIGHTING') {
                    return (
                      <>
                        <img
                          style={{
                            height: '50px',
                            marginRight: '10px',
                            width: '50px',
                          }}
                          alt="Retail Item Icon"
                          src="https://images.pexels.com/photos/1123262/pexels-photo-1123262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Replace with actual image URL for "Lighting"
                        />
                        <Typography fontFamily="Poppins" variant="body2">
                          Lighting
                        </Typography>
                      </>
                    );
                  } else if (category.retailItemType === 'FURNITURE') {
                    return (
                      <>
                        <img
                          style={{
                            height: '50px',
                            marginRight: '10px',
                            width: '50px',
                          }}
                          alt="Retail Item Icon"
                          src="https://cdn-eu.dynamicyield.com/api/9877108/images/24d111bf06dd1__furniture.jpg" // Replace with actual image URL for "Lighting"
                        />
                        <Typography fontFamily="Poppins" variant="body2">
                          Furniture
                        </Typography>
                      </>
                    );
                  } else if (category.retailItemType === 'HARDWARE') {
                    return (
                      <>
                        <img
                          style={{
                            height: '50px',
                            marginRight: '10px',
                            width: '50px',
                          }}
                          alt="Retail Item Icon"
                          src="https://images.pexels.com/photos/220639/pexels-photo-220639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Replace with actual image URL for "Lighting"
                        />
                        <Typography fontFamily="Poppins" variant="body2">
                          Hardware
                        </Typography>
                      </>
                    );
                  } else if (category.retailItemType === 'BATHWARE') {
                    return (
                      <>
                        <img
                          style={{
                            height: '50px',
                            marginRight: '10px',
                            width: '50px',
                          }}
                          alt="Retail Item Icon"
                          src="https://images.pexels.com/photos/11125357/pexels-photo-11125357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Replace with actual image URL for "Lighting"
                        />
                        <Typography fontFamily="Poppins" variant="body2">
                          Bathware
                        </Typography>
                      </>
                    );
                  } else if (category.retailItemType === 'GARDENWARE') {
                    return (
                      <>
                        <img
                          style={{
                            height: '50px',
                            marginRight: '10px',
                            width: '50px',
                          }}
                          alt="Retail Item Icon"
                          src="https://peakproducts-canada.s3.ca-central-1.amazonaws.com/gardenware-banner-img-2.jpeg" // Replace with actual image URL for "Lighting"
                        />
                        <Typography fontFamily="Poppins" variant="body2">
                          Gaerdenware
                        </Typography>
                      </>
                    );
                  } else {
                    return <></>;
                  }
                })}
              </Box>
            </Box>
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
                {customerRequest.description}
              </Typography>
            </Box>
            {/* <Typography
              fontFamily="Poppins"
              sx={{ marginTop: '20px' }}
              variant="subtitle1"
            >
              AI Image:
            </Typography>
            <img
              style={{
                border: '2px solid green',
                height: '40%',
                marginRight: '10px',
                padding: '5px',
                width: '50%',
              }}
              alt="Generated by AI"
              src="https://images.adsttc.com/media/images/633d/4c64/dd0b/8954/dd1d/630a/large_jpg/new-ai-image-generator-can-help-users-redesign-their-own-spaces_5.jpg?1664961650"
            /> */}

            <Typography
              fontFamily="Poppins"
              sx={{ marginTop: '20px' }}
              variant="subtitle1"
            >
              Price range comfortable with:
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
                Min: LKR {customerRequest.minPrice}- Max: LKR{' '}
                {customerRequest.maxPrice}
              </Typography>
            </Box>
            <Typography
              fontFamily="Poppins"
              sx={{ marginTop: '20px' }}
              variant="subtitle1"
            >
              Sketches Shared:
            </Typography>
            <Box
              sx={{ alignItems: 'center', display: 'flex', marginTop: '20px' }}
            >
              {customerRequest.image1 ? (
                <img
                  style={{
                    border: '2px solid green',
                    height: '30vh',
                    marginRight: '10px',
                    padding: '5px',
                    width: '30vh',
                  }}
                  alt="Generated by AI"
                  src={`http://localhost:8080/files/customer-request-files/${customerRequest?.createdBy}/${customerRequest?.id}/${customerRequest.image1Name}`}
                />
              ) : (
                <></>
              )}
              {customerRequest.image2 ? (
                <img
                  style={{
                    border: '2px solid green',
                    height: '30vh',
                    marginRight: '10px',
                    padding: '5px',
                    width: '30vh',
                  }}
                  alt="Generated by AI"
                  src={`http://localhost:8080/files/customer-request-files/${customerRequest?.createdBy}/${customerRequest?.id}/${customerRequest.image2Name}`}
                />
              ) : (
                <></>
              )}
              {customerRequest.image3 ? (
                <img
                  style={{
                    border: '2px solid green',
                    height: '30vh',
                    marginRight: '10px',
                    padding: '5px',
                    width: '30vh',
                  }}
                  alt="Generated by AI"
                  src={`http://localhost:8080/files/customer-request-files/${customerRequest?.createdBy}/${customerRequest?.id}/${customerRequest.image3Name}`}
                />
              ) : (
                <></>
              )}
            </Box>
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
              {customerRequest.document1 ? (
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
                    href={`http://localhost:8080/files/customer-request-files/${customerRequest?.createdBy}/${customerRequest?.id}/${customerRequest.Document1Name}`}
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
                      {customerRequest.document1}
                    </Typography>
                  </Link>
                </Box>
              ) : (
                <></>
              )}
              {customerRequest.document2 ? (
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
                    href={`http://localhost:8080/files/customer-request-files/${customerRequest?.createdBy}/${customerRequest?.id}/${customerRequest.Document2Name}`}
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
                      {customerRequest.document2}
                    </Typography>
                  </Link>
                </Box>
              ) : (
                <></>
              )}
              {customerRequest.document3 ? (
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
                    href={`http://localhost:8080/files/customer-request-files/${customerRequest?.createdBy}/${customerRequest?.id}/${customerRequest.Document3Name}`}
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
                      {customerRequest.document3}
                    </Typography>
                  </Link>
                </Box>
              ) : (
                <></>
              )}
            </Grid>
            <Box sx={{ justifyContent: 'space-between', marginTop: '50px' }}>
              {currentUser?.role !== 'CUSTOMER' &&
                currentUser?.id !== customerRequest.createdBy && (
                  <Button
                    color="primary"
                    onClick={respond(customerRequest.id)}
                    style={{ marginRight: '50px', width: '35%' }}
                    variant="contained"
                  >
                    Accept Request
                  </Button>
                )}
              {currentUser?.id === customerRequest.createdBy && (
                <Button
                  color="primary"
                  onClick={goToResponses(customerRequest.id)}
                  size="large"
                  style={{ width: '35%' }}
                  sx={{ borderRadius: 2, width: 1 / 2 }}
                  variant="contained"
                >
                  View Responses
                </Button>
              )}
            </Box>
          </Box>
        </Grid>
      </Box>
      <Footer />
    </>
  ) : isLoading ? (
    <Loading />
  ) : (
    <NoResultsFound />
  );
};

export default ViewCustomerRequestCard;
