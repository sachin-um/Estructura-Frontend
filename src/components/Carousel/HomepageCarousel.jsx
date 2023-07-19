import React, { useState } from "react";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { styled } from "@mui/system";

const StyledArrowBack = styled(ArrowBackIosNew)(({ theme }) => ({
  color: "grey",
  fontSize: "1.4rem",
  cursor: "pointer",
  "&:hover": {
    transform: "scale(1.1)",
    transition: "transform 0.3s ease",
  },
}));

const StyledArrowForward = styled(ArrowForwardIos)(({ theme }) => ({
  color: "grey",
  fontSize: "1.4rem",
  cursor: "pointer",
  "&:hover": {
    transform: "scale(1.1)",
    transition: "transform 0.3s ease",
  },
}));

const HomepageCarousel = ({ cards }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const visibleCards = cards.concat(cards).slice(
    currentCardIndex,
    currentCardIndex + 4
  );

  const goToPreviousCard = () => {
    setCurrentCardIndex((prevIndex) =>
      (prevIndex - 1 + cards.length) % cards.length
    );
  };

  const goToNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" maxWidth="99%">
      <Box width="100%" position="relative">
        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          marginBottom="10px"
        >
          <StyledArrowBack
            onClick={goToPreviousCard}
            style={{
              marginRight: "10px",
            }}
          />
          <StyledArrowForward
            onClick={goToNextCard}
          />
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          transform={`translateX(-${currentCardIndex * 25}%)`}
          transition="transform 0.5s"
        >
          {visibleCards.map((card, index) => (
            <Card
              key={index}
              sx={{
                flex: "0 0 24%",
                position: "relative",
                margin: "0 10px",
                "&:hover": {
                  cursor: "pointer",
                  img: {
                    filter: "brightness(70%)",
                  },
                  ".overlay": {
                    opacity: 1,
                  },
                },
              }}
            >
              <CardMedia
                component="img"
                height="300"
                image={card.image}
                alt={card.title}
                sx={{
                  objectFit: "cover",
                  transition: "filter 0.3s ease",
                  "&:hover": {
                    filter: "brightness(90%)",
                  },
                }}
              />
              <CardContent
                className="overlay"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                  color: "white",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                }}
              >
                <Typography variant="h6">{card.title}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default HomepageCarousel;













