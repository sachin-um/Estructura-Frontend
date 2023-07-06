import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, Button, Grid, Card, CardContent, CardMedia } from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { styled } from "@mui/system";
import TopBar from "../components/TopBar";

const StyledArrowBack = styled(ArrowBackIosNew)(({ theme }) => ({
  color: '#DBE1DD',
  fontSize: "4rem",
  cursor: "pointer",
  "&:hover": {
    transform: "scale(1.1)",
    transition: "transform 0.3s ease",
  },
}));

const StyledArrowForward = styled(ArrowForwardIos)(({ theme }) => ({
  color: '#DBE1DD',
  fontSize: "4rem",
  cursor: "pointer",
  "&:hover": {
    transform: "scale(1.1)",
    transition: "transform 0.3s ease",
  },
}));

const Slider = ({ images, interval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(goToNextSlide, interval);

    return () => {
      clearInterval(slideInterval);
    };
  }, [interval]);

  return (
    <>
    <TopBar title='Home' />
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100vw"
      position="relative"
    >
      <Box width="100%">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            style={{
              display: index === currentSlide ? "block" : "none",
              width: "100vw",
              maxHeight: "calc(112vh - 100px)",
              objectFit: "cover",
            }}
          />
        ))}
        <Box
          position="absolute"
          left="120px"
          top="200px"
          maxWidth="50%"
          color="white"
          zIndex="1"
        >
          <Typography variant="h5" paragraph fontFamily='Helvetica Neue' fontWeight='bold' fontSize='2rem' color='white'>
            Unleash your home’s potential with <br /> everything at your fingertips
          </Typography>
          <Box display="flex" alignItems="center" marginTop="80px">
            <TextField
              label="What service do you need?"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "white",
                },
                "& .MuiInputLabel-root": {
                  color: "grey",
                },
                width: '400px',
              }}
            />
            <Button variant="contained" color="primary" sx={{marginLeft: '8px', width: '200px', height:'50px', boxShadow: '0px 3px 5px rgba(0, 0, 0, 0, 3)', "&:hover":{boxShadow: '0px 5px 7px rgba(0, 0, 0, 0, 5)',},}}>
              Get Started
            </Button>
          </Box>
        </Box>
        <Box
          position="absolute"
          left="10px"
          top="50%"
          zIndex="2"
          display="flex"
          alignItems="center"
          cursor="pointer"
          onClick={goToPreviousSlide}
        >
          <StyledArrowBack />
        </Box>
        <Box
          position="absolute"
          right="10px"
          top="50%"
          zIndex="2"
          display="flex"
          alignItems="center"
          cursor="pointer"
          onClick={goToNextSlide}
        >
          <StyledArrowForward />
        </Box>
      </Box>
    </Box>
    </>
  );
};

const HomePage = () => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const images = [
    "/Home_Slider/1.jpg",
    "/Home_Slider/2.jpg",
    "/Home_Slider/3.jpg",
    "/Home_Slider/4.jpg",
    "/Home_Slider/5.jpg",
    "/Home_Slider/6.jpg",
    "/Home_Slider/7.jpg",
  ];

  const cardDataBrowse=[
    {
      image: '/Professionals/GeneralContractors.jpg',
      title: 'General Contractors',
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
      image: '/Professionals/HomeBuilder.jpg',
      title: 'Home Builders',
    },
  ]

  const cardDataShopBy=[
    {
      image: '/ShopBy/Furniture.jpg',
      title: 'Furniture',
    },
    {
      image: '/ShopBy/outdoorFurniture.jpg',
      title: 'Outdoor Funiture',
    },
    {
      image: '/ShopBy/bathroom.png',
      title: 'Bathroom Furniture',
    },
    {
      image: '/ShopBy/kitchen.jpg',
      title: 'Kitchen & Dining Furniture',
    },
  ]

  const blogCardData = [
    {
      image: 'formBg.jpg',
    },
    {
      image: 'HomeOwnerBG.jpg',
    },
    {
      image: 'ForgotPasswordBG.jpg',
    },
  ];
  const [hoveredIndexBrowse, setHoveredIndexBrowse] = useState(null);
  const [hoveredIndexShopBy, setHoveredIndexShopBy] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Box>
      <Slider images={images} interval={5000} />

      <Box
        display='flex'
        justifyContent='flex-start'
        alignItems='flex-start'
        flexDirection='column'
        marginTop='40px'
        padding='0 20px'
        bgcolor='white'
      >

        <Typography
          variant="h5"
          gutterBottom
          color="#435834"
          fontWeight="bold"
          fontSize="1.7rem"
          textAlign="left"
          marginTop="20px"
          marginBottom="20px"
          marginLeft="20px"
          fontFamily='Helvetica Neue'
        >
          Browse Professionals
        </Typography>

        <Grid container spacing={2}>
          {cardDataBrowse.map((card, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Card
                sx={{
                  position: 'relative',
                  "&:hover":{
                    cursor: 'pointer',
                    img: {
                      filter: 'brightness(70%)',
                    }
                  }
                }}
                onMouseEnter={() => setHoveredIndexBrowse(index)}
                onMouseLeave={() => setHoveredIndexBrowse(null)}
              >
                <CardMedia
                  component='img'
                  height='300'
                  image={card.image}
                  alt={card.title}
                  sx={{
                    objectFit: 'cover',
                    width: '100%',
                  }}   
                />
                {hoveredIndexBrowse === index && (
                  <CardContent
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      textAlign: 'center',
                      color: 'white',
                      padding: '16px',
                      width: '100%',
                    }}
                  >
                    <Typography variant='h6'>{card.title}</Typography>
                  </CardContent>
                )}
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography
          variant="h5"
          gutterBottom
          color="#435834"
          fontWeight="bold"
          fontSize="1.7rem"
          textAlign="left"
          marginTop="50px"
          marginLeft="20px"
          fontFamily='Helvetica Neue'
        >
          Shop By
        </Typography>

        <Grid container spacing={2}>
          {cardDataShopBy.map((card, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Card
                sx={{
                  position: 'relative',
                  "&:hover":{
                    cursor: 'pointer',
                    img: {
                      filter: 'brightness(70%)',
                    }
                  }
                }}
                onMouseEnter={() => setHoveredIndexShopBy(index)}
                onMouseLeave={() => setHoveredIndexShopBy(null)}
              >
                <CardMedia
                  component='img'
                  height='300'
                  image={card.image}
                  alt={card.title}
                  sx={{
                    objectFit: 'cover',
                    width: '100%',
                  }}   
                />
                {hoveredIndexShopBy === index && (
                  <CardContent
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      textAlign: 'center',
                      color: 'white',
                      padding: '16px',
                      width: '100%',
                    }}
                  >
                    <Typography variant='h6'>{card.title}</Typography>
                  </CardContent>
                )}
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box
        position="relative"
        height="400px"
        width='100%'
        marginTop='40px'
      >
        <img
          src="BannerImage.jpg"
          alt="Banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <Box
          position="absolute"
          top="30%"
          left="10%"
          transform="translate(-50%, -50%)"
          display="flex"
          alignItems="center"
          justifyContent='center'
          textAlign='center'
          zIndex="1"
          p={4}
          bgcolor="rgba(243, 243, 243, 0.7)"
          width='80%'
          maxWidth='400px'
        >
          <Box>
            <Typography variant="h4" paragraph fontFamily='Helvetica Neue'  fontWeight='bold' fontSize='2rem' color='#304422'>
              Missing that special touch?
            </Typography>
            <Typography variant="h6" paragraph fontFamily='Helvetica Neue' fontSize='1.2rem' color='#435834' marginBottom='30px'>
              Let us know your one-of-a-kind idea!
            </Typography>
            <Button 
              variant={isButtonHovered ? "contained" : "outlined"}
              color="secondary" 
              size="large" 
              style={{ color: isButtonHovered ? '#FFFFFF' : '#9D6432'}}
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
              >
              Create your own idea
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        position="relative"
        height="400px"
        width='100%'
        marginTop='10px'
      >
        <Box
          marginTop='50px'
          marginLeft='50px'
        >
            <Typography variant="h4" paragraph fontFamily='Helvetica Neue'  fontWeight='bold' fontSize='1.8rem' color='#9D6432'>
              Looking for more inspiration?
            </Typography>
            <Typography variant="h6" paragraph fontFamily='Helvetica Neue' fontSize='1.3rem' color='#AF7D51' marginBottom='30px'>
              Check out our blog for the latest stories!
            </Typography>

            <Grid container spacing={2}>
              {blogCardData.map((card, index) => (
                <Grid item key={index} xs={12} sm={4} marginBottom='40px'>
                  <Card
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      height: '100%',
                      transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)',
                      transition: 'transform 0.3s ease',
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                <CardMedia
                  component="img"
                  height="300"
                  image={card.image}
                  alt={card.title}
                  sx={{ objectFit: "cover" }}
                />
              </Card>
            </Grid>
          ))}
          </Grid>
          </Box>
          
        </Box>
    </Box>
  </Box>
  );
};

export default HomePage;