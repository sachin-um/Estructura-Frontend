import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';

const HomePageCarousel = ({
  cards,
}: {
  cards: {
    image: string;
    title: string;
  }[];
}) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const visibleCards = cards.concat(cards).slice(0, cards.length);

  const goToNextCard = useCallback(() => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % (cards.length - 2));
  }, [cards.length]);

  useEffect(() => {
    const intervalId = setInterval(goToNextCard, 3000);
    return () => clearInterval(intervalId);
  }, [goToNextCard, currentCardIndex]);

  return (
    <Box marginBottom={5} overflow="hidden" position="relative">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          transform: `translateX(-${currentCardIndex * 33.33}%)`,
          transition: 'transform 0.5s',
        }}
      >
        {visibleCards.map((card, index) => (
          <Card
            sx={{
              borderRadius: '0px',
              flex: '0 0 33.33%',
              position: 'relative',
            }}
            key={index}
          >
            <CardMedia
              sx={{
                filter: 'brightness(60%)',
                height: '16rem',
                objectFit: 'cover',
                width: '100%',
              }}
              alt={card.title}
              component="img"
              image={card.image}
            />
            <CardContent
              sx={{
                alignItems: 'center',
                background: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                display: 'flex',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                height: '100%',
                justifyContent: 'center',
                left: 0,
                padding: '10px',
                position: 'absolute',
                top: 0,
                width: '100%',
              }}
              className="overlay"
            >
              <Typography variant="h6">{card.title}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default HomePageCarousel;
