import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React, { useState } from 'react';

const StyledArrowBack = styled(ArrowBackIosNew)(({ theme }) => ({
  '&:hover': {
    transform: 'scale(1.1)',
    transition: 'transform 0.3s ease',
  },
  color: 'grey',
  cursor: 'pointer',
  fontSize: '1.4rem',
}));

const StyledArrowForward = styled(ArrowForwardIos)(({ theme }) => ({
  '&:hover': {
    transform: 'scale(1.1)',
    transition: 'transform 0.3s ease',
  },
  color: 'grey',
  cursor: 'pointer',
  fontSize: '1.4rem',
}));

const HomepageCarousel = ({ cards }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const visibleCards = cards
    .concat(cards)
    .slice(currentCardIndex, currentCardIndex + 4);

  const goToPreviousCard = () => {
    setCurrentCardIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length,
    );
  };

  const goToNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  return (
    <Box
      alignItems="center"
      display="flex"
      justifyContent="center"
      maxWidth="99%"
    >
      <Box position="relative" width="100%">
        <Box
          alignItems="center"
          display="flex"
          justifyContent="flex-end"
          marginBottom="10px"
        >
          <StyledArrowBack
            style={{
              marginRight: '10px',
            }}
            onClick={goToPreviousCard}
          />
          <StyledArrowForward onClick={goToNextCard} />
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          transform={`translateX(-${currentCardIndex * 25}%)`}
          transition="transform 0.5s"
        >
          {visibleCards.map((card, index) => (
            <Card
              sx={{
                '&:hover': {
                  '.overlay': {
                    opacity: 1,
                  },
                  cursor: 'pointer',
                  img: {
                    filter: 'brightness(70%)',
                  },
                },
                flex: '0 0 24%',
                margin: '0 10px',
                position: 'relative',
              }}
              key={index}
            >
              <CardMedia
                sx={{
                  '&:hover': {
                    filter: 'brightness(90%)',
                  },
                  objectFit: 'cover',
                  transition: 'filter 0.3s ease',
                }}
                alt={card.title}
                component="img"
                height="300"
                image={card.image}
              />
              <CardContent
                sx={{
                  color: 'white',
                  left: '50%',
                  opacity: 0,
                  position: 'absolute',
                  textAlign: 'center',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  transition: 'opacity 0.3s ease',
                }}
                className="overlay"
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
