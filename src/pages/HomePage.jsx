import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
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
              size="small"
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "white",
                },
                "& .MuiInputLabel-root": {
                  color: "grey",
                },
              }}
            />
            <Button variant="contained" color="primary" style={{ marginLeft: "8px" }}>
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
  const images = [
    "/Carousel/1.jpg",
    "/Carousel/2.jpg",
    "/Carousel/3.jpg",
    "/Carousel/4.jpg",
    "/Carousel/5.jpg",
    "/Carousel/6.jpg",
    "/Carousel/7.jpg",
  ];

  return (
    <Box>
      <Slider images={images} interval={5000} />
    </Box>
  );
};

export default HomePage;
