import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import '../../assets/font.css';
import Footer from '../../components/Footer';
import NoResultsFound from '../../components/NoResults';
import TopBar from '../../components/TopAppBar';
import { useCustomerRequest } from '../../hooks/customerRequest/useCustomerRequest';
import Loading from '../loading';

const ViewCustomerRequestCard = () => {
  const requestId = parseInt(useParams<{ id: string }>().id ?? '0');

  const {
    getCustomerRequest: { customerRequest, fetchCustomerRequest, isLoading },
  } = useCustomerRequest();

  useEffect(() => {
    fetchCustomerRequest(requestId);
  }, [fetchCustomerRequest, requestId]);

  console.log(customerRequest);

  const backgroundImageUrl =
    'https://images.pexels.com/photos/6434620/pexels-photo-6434620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

  const navigate = useNavigate();

  const respond = (id: number) => () => {
    navigate(`/custom-requsts/req/${id}/respond`);
  };

  const goToResponses = (id: number) => () => {
    navigate(`/custom-requests/req/${id}/responses`);
  };

  return customerRequest !== null ? (
    <>
      <TopBar />
      <Box display="flex">
        <Grid
          style={{
            borderBottomRightRadius: '50%',
            flex: '0 0 50%',
            height: '170vh',
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
              {customerRequest.shortDesc}
            </Typography>
            <pre>{JSON.stringify(customerRequest, null, 2)}</pre>
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
                My vision for this project is a modern, sustainable, and
                functional home that seamlessly integrates with its natural
                surroundings. I am looking for a design that reflects my
                appreciation for clean lines, open spaces, and the innovative
                use of materials. The house should not only be aesthetically
                pleasing but also highly energy-efficient and environmentally
                conscious.
              </Typography>
            </Box>
            <Typography
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
            />

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
                Min: LKR 150 000 - Max: LKR 250 000
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
              <img
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
              />
            </Box>
            <Box sx={{ justifyContent: 'space-between', marginTop: '50px' }}>
              <Button
                color="primary"
                onClick={respond(customerRequest.id)}
                style={{ marginRight: '50px', width: '35%' }}
                variant="contained"
              >
                Accept Request
              </Button>
              <Button
                color="primary"
                onClick={goToResponses(customerRequest.id)}
                style={{ width: '35%' }}
                variant="outlined"
              >
                View Responses
              </Button>
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
