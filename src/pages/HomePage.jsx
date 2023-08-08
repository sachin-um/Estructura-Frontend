import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';

import '../assets/font.css';
import HomepageCarousel from '../components/Carousel/HomepageCarousel';
import TopBar from '../components/TopBar';
import TopAppBar from '../components/TopAppBar';

const Slider = ({ images, interval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const slideInterval = setInterval(goToNextSlide, interval);

    return () => {
      clearInterval(slideInterval);
    };
  }, [goToNextSlide, interval]);

  return (
    <>
      <TopAppBar />
      <Box
        alignItems="center"
        display="flex"
        justifyContent="center"
        maxWidth="100vw"
        position="relative"
      >
        <Box width="100%">
          {images.map((image, index) => (
            <img
              style={{
                display: index === currentSlide ? 'block' : 'none',
                height: '100vw',
                maxHeight: 'calc(110vh - 100px)',
                maxWidth: '100%',
                objectFit: 'cover',
                width: '100vw',
              }}
              alt={`Slide ${index + 1}`}
              key={index}
              src={image}
            />
          ))}
          {currentSlide === images.length - 1 && (
            <Box
              alignItems="center"
              cursor="pointer"
              display="flex"
              onClick={goToNextSlide}
              position="absolute"
              right="10px"
              top="50%"
              zIndex="2"
            ></Box>
          )}

          <Box
            color="white"
            left="120px"
            maxWidth="50%"
            position="absolute"
            top="200px"
            zIndex="1"
          >
            <Typography
              color="white"
              fontFamily="Poppins"
              fontSize="2rem"
              paragraph
              variant="h5"
            >
              Unleash your home’s potential with <br /> everything at your
              fingertips
            </Typography>
            <Box alignItems="center" display="flex" marginTop="80px">
              <TextField
                InputLabelProps={{
                  shrink: false,
                }}
                sx={{
                  '& .MuiInputLabel-root': {
                    color: 'grey',
                  },
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'white',
                  },
                  width: '400px',
                }}
                label="What service do you need?"
                variant="outlined"
              />
              <Button
                sx={{
                  '&:hover': {
                    boxShadow: '0px 5px 7px rgba(0, 0, 0, 0, 5)',
                  },
                  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0, 3)',
                  height: '50px',
                  marginLeft: '8px',
                  width: '200px',
                }}
                color="primary"
                variant="contained"
              >
                Get Started
              </Button>
            </Box>
          </Box>
          <Box
            alignItems="center"
            cursor="pointer"
            display="flex"
            position="absolute"
            right="20px"
            top="30%"
            zIndex="2"
          ></Box>
        </Box>
      </Box>
    </>
  );
};

const HomePage = (props) => {
  const [isCreateIdeaButtonHovered, setIsCreateIdeaButtonHovered] =
    useState(false);
  const [isFurnitureButtonHovered, setIsFurnitureButtonHovered] =
    useState(false);

  const images = [
    '/Home_Slider/1.jpg',
    '/Home_Slider/2.jpg',
    '/Home_Slider/3.jpg',
    '/Home_Slider/4.jpg',
    '/Home_Slider/5.jpg',
    '/Home_Slider/6.jpg',
    '/Home_Slider/7.jpg',
  ];

  const cardDataBrowse = [
    {
      image: '/Professionals/GeneralContractors.jpg',
      title: 'Construction Companies',
    },
    {
      image: '/Professionals/Architect.jpg',
      title: 'Architects',
    },
    {
      image: '/Professionals/InteriorDesigner.jpg',
      title: 'Interior Designers',
    },
    {
      image: '/Professionals/landscapeArchitects.jpg',
      title: 'Landscape Architects',
    },
    {
      image: '/Professionals/HomeBuilder.jpg',
      title: 'Home Builders',
    },
    {
      image: '/Professionals/carpenters.jpg',
      title: 'Carpenters',
    },
    {
      image: '/Professionals/painters.jpg',
      title: 'Painters',
    },
  ];

  const cardDataShopBy = [
    {
      image: '/ShopBy/Furniture.jpg',
      title: 'Furniture',
    },
    {
      image: '/ShopBy/hardware.jpg',
      title: 'Hardware',
    },
    {
      image: '/ShopBy/bathroom.png',
      title: 'Bathware',
    },
    {
      image: '/ShopBy/gardenware.jpeg',
      title: 'Gardenware',
    },
    {
      image: '/ShopBy/lighting.jpg',
      title: 'Lighting',
    },
  ];

  const cardDataRentItems = [
    {
      image: '/RentItems/heavyMachinery.webp',
      title: 'Heavy Machinery',
    },
    {
      image: '/RentItems/tools.jpg',
      title: 'Tools and Equipment',
    },
    {
      image: '/RentItems/portableMachines.jpg',
      title: 'Portable Machines',
    },
  ];

  const blogCardData = [
    {
      image: 'formBg.jpg',
      title: 'Estructura Furniture',
      user: {
        name: 'S.Akarawita',
        profilePic: '/User/user.png',
      },
    },
    {
      image: 'HomeOwnerBG.jpg',
      title: 'Gardening Tips',
      user: {
        name: 'P.Guruge',
        profilePic: '/User/user.png',
      },
    },
    {
      image: 'ForgotPasswordBG.jpg',
      title: 'Bathware Trends',
      user: {
        name: 'S.Umayangana',
        profilePic: '/User/user.png',
      },
    },
  ];
  const [hoveredIndexBrowse, setHoveredIndexBrowse] = useState(null);
  const [hoveredIndexShopBy, setHoveredIndexShopBy] = useState(null);
  const [hoveredIndexRentItems, setHoveredIndexRentItems] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleMLButtonClick = () => {
    window.location.href = '/findfurniture';
  };

  return (
    <>
    <Box>
      <Slider images={images} interval={5000} />

      <Box
        alignItems="flex-start"
        bgcolor="white"
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        marginTop="40px"
        padding="0 20px"
      >
        <Typography
          color="#435834"
          fontFamily="Poppins"
          fontSize="1.7rem"
          gutterBottom
          marginBottom="20px"
          marginLeft="10px"
          marginTop="20px"
          textAlign="left"
          variant="h5"
        >
          Explore Professionals
        </Typography>

        <HomepageCarousel cards={cardDataBrowse} />

        <Typography
          color="#435834"
          fontFamily="Poppins"
          fontSize="1.7rem"
          gutterBottom
          marginLeft="10px"
          marginTop="50px"
          textAlign="left"
          variant="h5"
        >
          Buy Products
        </Typography>

        <HomepageCarousel cards={cardDataShopBy} />

        <Typography
          color="#435834"
          fontFamily="Poppins"
          fontSize="1.7rem"
          gutterBottom
          marginLeft="10px"
          marginTop="50px"
          textAlign="left"
          variant="h5"
        >
          Rent Items
        </Typography>

        <Grid container spacing={2}>
          {cardDataRentItems.map((card, index) => (
            <Grid item key={index} sm={4} xs={12}>
              <Box
                sx={{
                  height: '300px',
                  marginTop: 4,
                  position: 'relative',
                }}
                onMouseEnter={() => setHoveredIndexRentItems(index)}
                onMouseLeave={() => setHoveredIndexRentItems(null)}
              >
                <img
                  style={{
                    borderRadius: 5,
                    filter:
                      hoveredIndexRentItems === index
                        ? 'brightness(60%)'
                        : 'none',
                    height: '100%',
                    marginLeft: '10px',
                    objectFit: 'cover',
                    transition: 'filter 0.3s ease',
                    width: '100%',
                  }}
                  alt={card.title}
                  src={card.image}
                />
                {hoveredIndexRentItems === index && (
                  <Box
                    sx={{
                      left: '50%',
                      position: 'absolute',
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <Typography color="white" variant="h6">
                      {card.title}
                    </Typography>
                  </Box>
                )}
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Create your own idea banner */}
        <Box height="400px" marginTop="40px" position="relative" width="100%">
          <img
            style={{
              height: '100%',
              marginLeft: '10px',
              objectFit: 'cover',
              width: '100%',
            }}
            alt="Banner"
            src="BannerImage.jpg"
          />
          <Box
            alignItems="center"
            bgcolor="rgba(243, 243, 243, 0.7)"
            display="flex"
            justifyContent="center"
            left="10%"
            maxWidth="400px"
            p={4}
            position="absolute"
            textAlign="center"
            top="30%"
            transform="translate(-50%, -50%)"
            width="80%"
            zIndex="1"
          >
            <Box>
              <Typography
                color="#304422"
                fontFamily="Poppins"
                fontSize="1.7rem"
                paragraph
                variant="h4"
              >
                Missing that special touch?
              </Typography>
              <Typography
                color="#435834"
                fontFamily="Poppins"
                fontSize="1.1rem"
                marginBottom="30px"
                paragraph
              >
                Let us know your one-of-a-kind idea!
              </Typography>
              <Button
                style={{
                  color: isCreateIdeaButtonHovered ? '#FFFFFF' : '#9D6432',
                }}
                color="secondary"
                onMouseEnter={() => setIsCreateIdeaButtonHovered(true)}
                onMouseLeave={() => setIsCreateIdeaButtonHovered(false)}
                size="large"
                variant={isCreateIdeaButtonHovered ? 'contained' : 'outlined'}
              >
                Create your own idea
              </Button>
            </Box>
          </Box>
        </Box>

        {/* ML furniture suggestion */}
        <Box height="500px" marginTop="40px" position="relative" width="100%">
          <img
            style={{
              height: '100%',
              marginLeft: '10px',
              objectFit: 'cover',
              width: '100%',
            }}
            alt="Banner"
            src="MLsuggestionBanner.jpg"
          />
          <Box
            alignItems="center"
            bgcolor="rgba(243, 243, 243, 0.7)"
            display="flex"
            justifyContent="center"
            maxWidth="400px"
            p={4}
            position="absolute"
            right="10%"
            textAlign="center"
            top="20%"
            transform="translate(-50%, -50%)"
            width="80%"
            zIndex="1"
          >
            <Box>
              <Typography
                color="#304422"
                fontFamily="Poppins"
                fontSize="1.5rem"
                paragraph
                variant="h4"
              >
                Elevate your room&apos;s vibe with exclusive furniture!
              </Typography>
              <Typography
                color="#435834"
                fontFamily="Poppins"
                fontSize="1.1rem"
                marginBottom="30px"
                paragraph
              >
                Discover unique twists that perfectly match your interior.
              </Typography>
              <Typography
                color="#435834"
                fontFamily="Poppins"
                fontSize="1.1rem"
                marginBottom="30px"
                paragraph
              >
                Click here for a stylish upgrade!
              </Typography>
              <Button
                style={{
                  color: isFurnitureButtonHovered ? '#FFFFFF' : '#9D6432',
                }}
                color="secondary"
                onClick={handleMLButtonClick}
                onMouseEnter={() => setIsFurnitureButtonHovered(true)}
                onMouseLeave={() => setIsFurnitureButtonHovered(false)}
                size="large"
                variant={isFurnitureButtonHovered ? 'contained' : 'outlined'}
              >
                Get Started!
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Blog articles */}
        <Box height="400px" marginTop="10px" position="relative" width="100%">
          <Box marginLeft="10px" marginTop="50px" textAlign="center">
            <Typography
              color="#435834"
              fontFamily="Poppins"
              fontSize="1.8rem"
              paragraph
              variant="h4"
            >
              Looking for more inspiration?
            </Typography>
            <Typography
              paragraph
              fontSize="1.3rem"
              fontFamily="Poppins"
              color="#435834"
              marginBottom="30px"
            >
              Check out our blog for the latest stories!
            </Typography>
            <Grid container spacing={2}>
              {blogCardData.map((card, index) => (
                <Grid item key={index} marginBottom="40px" sm={4} xs={12}>
                  <Card
                    onMouseEnter={() => {
                      setHoveredIndex(index);
                      setShowOverlay(true);
                    }}
                    onMouseLeave={() => {
                      setHoveredIndex(null);
                      setShowOverlay(false);
                    }}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      justifyContent: 'space-between',
                      position: 'relative',
                      transform:
                        hoveredIndex === index ? 'scale(0.9)' : 'scale(1)',
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    <CardMedia
                      alt={card.title}
                      component="img"
                      height="300"
                      image={card.image}
                      sx={{ objectFit: 'cover' }}
                    />
                    {showOverlay && hoveredIndex === index && (
                      <Paper
                        sx={{
                          alignItems: 'center',
                          backgroundColor: 'rgba(0, 0, 0, 0.5)',
                          display: 'flex',
                          flexDirection: 'column',
                          height: '100%',
                          justifyContent: 'center',
                          left: 0,
                          padding: '16px',
                          position: 'absolute',
                          top: 0,
                          width: '100%',
                        }}
                      >
                        <Typography
                          color="white"
                          sx={{ textAlign: 'center' }}
                          variant="h5"
                        >
                          {card.title}
                        </Typography>
                        <Box
                          sx={{
                            alignItems: 'center',
                            display: 'flex',
                            flexDirection: 'row',
                            marginBottom: '16px',
                          }}
                        >
                          <img
                            style={{
                              borderRadius: '50%',
                              height: '40px',
                              marginRight: '16px',
                              width: '40px',
                            }}
                            alt={card.user.name}
                            src={card.user.profilePic}
                          />

                          <Typography color="white" variant="h7">
                            {card.user.name}
                          </Typography>
                        </Box>
                      </Paper>
                    )}
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
    </>
  );
};

export default HomePage;
