import React, { useState, useEffect } from "react";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";

const HomepageCarousel = ({ cards }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const visibleCards = cards.concat(cards).slice(
    currentCardIndex,
    currentCardIndex + 3
  );

  const goToNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  useEffect(() => {
    const intervalId = setInterval(goToNextCard, 3000);
    return () => clearInterval(intervalId);
  }, [currentCardIndex]);

  return (
    <Box position="relative" overflow="hidden" marginBottom={5}>
      <Box
        display="flex"
        justifyContent="space-between"
        transition="transform 0.5s"
        transform={`translateX(-${currentCardIndex * 33.33}%)`}
      >
        {visibleCards.map((card, index) => (
          <Card
            key={index}
            sx={{
              flex: "0 0 33.33%",
              borderRadius: "0px",
              position: "relative",
            }}
          >
            <CardMedia
              component="img"
              image={card.image}
              alt={card.title}
              sx={{
                objectFit: "cover",
                width: "100%",
                height: "16rem",
                filter: "brightness(60%)",
              }}
            />
            <CardContent
              className="overlay"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "1.2rem",
                fontWeight: "bold",
                padding: "10px",
              }}
            >
              <Typography variant="h6">{card.title}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default HomepageCarousel;