import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Paper
} from "@mui/material";
import { Link } from "react-router-dom";
import TopBar from "../components/TopBar";
import HomepageCarousel from "../components/Carousel/HomepageCarousel";
import "../assets/font.css"


const Slider = ({ images, interval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const slideInterval = setInterval(goToNextSlide, interval);

    return () => {
      clearInterval(slideInterval);
    };
  }, [interval]);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  return (
    <>
      <TopBar title="Home" />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        maxWidth="100vw"
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
                height: "100vw",
                maxHeight: "calc(110vh - 100px)",
                maxWidth: "100%",
                objectFit: "cover",
              }}
            />
          ))}
          {currentSlide === images.length - 1 && (
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
            </Box>
          )}

          <Box
            position="absolute"
            left="120px"
            top="200px"
            maxWidth="50%"
            color="white"
            zIndex="1"
          >
            <Typography
              variant="h5"
              paragraph
              fontFamily="Poppins" 
              fontSize="2rem"
              color="white"
            >
              Unleash your home’s potential with <br /> everything at your
              fingertips
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
                  width: "400px",
                }}
                InputLabelProps={{
                  shrink: false,
                }}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{
                  marginLeft: "8px",
                  width: "200px",
                  height: "50px",
                  boxShadow: "0px 3px 5px rgba(0, 0, 0, 0, 3)",
                  "&:hover": {
                    boxShadow: "0px 5px 7px rgba(0, 0, 0, 0, 5)",
                  },
                }}
              >
                Get Started
              </Button>
            </Box>
          </Box>
          <Box
            position="absolute"
            top="30%"
            right='20px'
            zIndex="2"
            display="flex"
            alignItems="center"
            cursor="pointer"
          >
          </Box>
          </Box>
          </Box>
          </>
  )
}

const HomePage = () => {
  const [isCreateIdeaButtonHovered, setIsCreateIdeaButtonHovered] = useState(false);
  const [isFurnitureButtonHovered, setIsFurnitureButtonHovered] = useState(false);

  const images = [
    "/Home_Slider/1.jpg",
    "/Home_Slider/2.jpg",
    "/Home_Slider/3.jpg",
    "/Home_Slider/4.jpg",
    "/Home_Slider/5.jpg",
    "/Home_Slider/6.jpg",
    "/Home_Slider/7.jpg",
  ];

  const cardDataBrowse = [
    {
      image: "/Professionals/GeneralContractors.jpg",
      title: "Construction Companies",
    },
    {
      image: "/Professionals/Architect.jpg",
      title: "Architects",
    },
    {
      image: "/Professionals/InteriorDesigner.jpg",
      title: "Interior Designers",
    },
    {
      image: "/Professionals/landscapeArchitects.jpg",
      title: "Landscape Architects",
    },
    {
      image: "/Professionals/HomeBuilder.jpg",
      title: "Home Builders",
    },
    {
      image: "/Professionals/carpenters.jpg",
      title: "Carpenters",
    },
    {
      image: "/Professionals/painters.jpg",
      title: "Painters",
    },
  ];

  const cardDataShopBy = [
    {
      image: "/ShopBy/Furniture.jpg",
      title: "Furniture",
    },
    {
      image: "/ShopBy/hardware.jpg",
      title: "Hardware",
    },
    {
      image: "/ShopBy/bathroom.png",
      title:"Bathware",
    },
    {
      image: "/ShopBy/gardenware.jpeg",
      title: "Gardenware",
    },
    {
      image: "/ShopBy/lighting.jpg",
      title: "Lighting",
    },
  ];

  const cardDataRentItems = [
    {
      image: "/RentItems/heavyMachinery.webp",
      title: "Heavy Machinery",
    },
    {
      image: "/RentItems/tools.jpg",
      title: "Tools and Equipment",
    },
    {
      image: "/RentItems/portableMachines.jpg",
      title: "Portable Machines",
    },
  ];
  

  const blogCardData = [
    {
      image: "formBg.jpg",
      title: 'Estructura Furniture',
      user: {
        profilePic: '/User/user.png',
        name: 'S.Akarawita',
      }
    },
    {
      image: "HomeOwnerBG.jpg",
      title: 'Gardening Tips',
      user: {
        profilePic: '/User/user.png',
        name: 'P.Guruge',
      }
    },
    {
      image: "ForgotPasswordBG.jpg",
      title: 'Bathware Trends',
      user: {
        profilePic: '/User/user.png',
        name: 'S.Umayangana',
      }
    },
  ];
  const [hoveredIndexBrowse, setHoveredIndexBrowse] = useState(null);
  const [hoveredIndexShopBy, setHoveredIndexShopBy] = useState(null);
  const [hoveredIndexRentItems, setHoveredIndexRentItems] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleMLButtonClick = () => {
    window.location.href = "/findfurniture";
  };

  return (
    <Box>
      <Slider images={images} interval={5000} />

      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-start"
        flexDirection="column"
        marginTop="40px"
        padding="0 20px"
        bgcolor="white"
      >
        <Typography
          variant="h5"
          gutterBottom
          color="#435834"
          fontFamily="Poppins" 
          fontSize="1.7rem"
          textAlign="left"
          marginTop="20px"
          marginBottom="20px"
          marginLeft='10px'
        >
          Explore Professionals
        </Typography>

        <HomepageCarousel 
          cards={cardDataBrowse}
        />

        <Typography
          variant="h5"
          gutterBottom
          color="#435834"
          fontSize="1.7rem"
          fontFamily="Poppins" 
          textAlign="left"
          marginTop="50px"
          marginLeft='10px'
        >
          Buy Products
        </Typography>

        <HomepageCarousel 
          cards={cardDataShopBy} 
        />

        <Typography
            variant="h5"
            gutterBottom
            color="#435834"
            fontSize="1.7rem"
            fontFamily="Poppins"
            textAlign="left"
            marginTop="50px"
            marginLeft='10px'
        >
          Rent Items
        </Typography>

        <Grid container spacing={2}>
          {cardDataRentItems.map((card, index) => (
            <Grid item key={index} xs={12} sm={4}>
              <Box
                onMouseEnter={() => setHoveredIndexRentItems(index)}
                onMouseLeave={() => setHoveredIndexRentItems(null)}
                sx={{
                  position: 'relative',
                  height: '300px',
                  marginTop: 4,
                }}
              >
                <img 
                  src={card.image}
                  alt={card.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    marginLeft: '10px',
                    filter: hoveredIndexRentItems === index ? 'brightness(60%)' : 'none',
                    transition: 'filter 0.3s ease',
                    borderRadius: 5,
                  }}
                />
                {hoveredIndexRentItems === index && (
                  <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                  >
                    <Typography variant='h6' color='white'>
                      {card.title}
                    </Typography>
                  </Box>
                )}
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Create your own idea banner */}
        <Box
          position="relative"
          height="400px"
          width="100%"
          marginTop="40px"
        >
          <img
            src="BannerImage.jpg"
            alt="Banner"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              marginLeft: '10px'
            }}
          />
          <Box
            position="absolute"
            top="30%"
            left="10%"
            transform="translate(-50%, -50%)"
            display="flex"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            zIndex="1"
            p={4}
            bgcolor="rgba(243, 243, 243, 0.7)"
            width="80%"
            maxWidth="400px"
          >
            <Box>
              <Typography
                variant="h4"
                paragraph
                fontFamily="Poppins" 
                fontSize="1.7rem"
                color="#304422"
              >
                Missing that special touch?
              </Typography>
              <Typography
                paragraph
                fontSize="1.1rem"
                fontFamily="Poppins" 
                color="#435834"
                marginBottom="30px"
              >
                Let us know your one-of-a-kind idea!
              </Typography>
              <Button
                variant={isCreateIdeaButtonHovered ? "contained" : "outlined"}
                color="secondary"
                size="large"
                style={{
                  color: isCreateIdeaButtonHovered ? "#FFFFFF" : "#9D6432",
                }}
                onMouseEnter={() => setIsCreateIdeaButtonHovered(true)}
                onMouseLeave={() => setIsCreateIdeaButtonHovered(false)}
              >
                Create your own idea
              </Button>
            </Box>
          </Box>
        </Box>

        {/* ML furniture suggestion */}
        <Box
          position="relative"
          height="500px"
          width="100%"
          marginTop="40px"
        >
          <img
            src="MLsuggestionBanner.jpg"
            alt="Banner"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              marginLeft: '10px'
            }}
          />
          <Box
            position="absolute"
            top="20%"
            right="10%"
            transform="translate(-50%, -50%)"
            display="flex"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            zIndex="1"
            p={4}
            bgcolor="rgba(243, 243, 243, 0.7)"
            width="80%"
            maxWidth="400px"
          >
            <Box>
              <Typography
                variant="h4"
                paragraph
                fontFamily="Poppins" 
                fontSize="1.5rem"
                color="#304422"
              >
                Elevate your room's vibe with exclusive furniture!
              </Typography>
              <Typography
                paragraph
                fontSize="1.1rem"
                fontFamily="Poppins" 
                color="#435834"
                marginBottom="30px"
              >
                Discover unique twists that perfectly match your interior.
              </Typography>
              <Typography
                paragraph
                fontSize="1.1rem"
                fontFamily="Poppins" 
                color="#435834"
                marginBottom="30px"
              >
                Click here for a stylish upgrade!
              </Typography>
              <Button
                variant={isFurnitureButtonHovered ? "contained" : "outlined"}
                color="secondary"
                size="large"
                style={{
                  color: isFurnitureButtonHovered ? "#FFFFFF" : "#9D6432",
                }}
                onMouseEnter={() => setIsFurnitureButtonHovered(true)}
                onMouseLeave={() => setIsFurnitureButtonHovered(false)}
                onClick={handleMLButtonClick}
              >
                Get Started!
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Blog articles */}
        <Box
          position="relative"
          height="400px"
          width="100%"
          marginTop="10px"
        >
          <Box marginTop="50px" marginLeft="10px" textAlign="center">
            <Typography
              variant="h4"
              paragraph
              fontFamily="Poppins" 
              fontSize="1.8rem"
              color="#435834"
            >
              Looking for more inspiration?
            </Typography>
            <Typography
              paragraph
              fontSize="1.3rem"
              fontFamily="Poppins" 
              color="#AF7D51"
              marginBottom="30px"
            >
              Check out our blog for the latest stories!
            </Typography>
            <Grid container spacing={2}>
              {blogCardData.map((card, index) => (
                <Grid item key={index} xs={12} sm={4} marginBottom="40px">
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "100%",
                      transform:
                        hoveredIndex === index ? "scale(0.9)" : "scale(1)",
                      transition: "transform 0.3s ease",
                      position: 'relative',
                    }}
                    onMouseEnter={() => {
                      setHoveredIndex(index);
                      setShowOverlay(true);
                    }}
                    onMouseLeave={() => {
                      setHoveredIndex(null);
                      setShowOverlay(false);
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="300"
                      image={card.image}
                      alt={card.title}
                      sx={{ objectFit: "cover" }}
                    />
                    {showOverlay && hoveredIndex === index && (
                      <Paper
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          backgroundColor: 'rgba(0, 0, 0, 0.5)',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: '16px',
                        }}
                      >
                        <Typography variant="h5" color="white" sx={{ textAlign: "center" }}> 
                          {card.title}
                        </Typography>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "row", 
                            alignItems: "center", 
                            marginBottom: "16px", 
                          }}
                        >
                          <img
                            src={card.user.profilePic}
                            alt={card.user.name}
                            style={{
                              width: "40px",
                              height: "40px",
                              borderRadius: "50%",
                              marginRight: '16px',

                            }}
                          />
    
        
                          <Typography variant="h7" color="white">
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
  );
};

export default HomePage;
