import StyleIcon from '@mui/icons-material/Style';
import { Box, Button, CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/font.css';

function MultiActionAreaCard(props) {
  const { image, key, price, title, type } = props;
  const Navigate = useNavigate();

  return (
    <Card
      sx={{
        '&:hover': {
          transform: 'translateY(-4px)',
        },
        borderRadius: '15px',
        maxWidth: 345,
        transition: 'transform 0.2s',
      }}
    >
      <CardActionArea sx={{}}>
        <Box
          sx={{
            borderRadius: '12px',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <CardMedia
            style={{
              objectFit: 'cover',
              width: '100%',
            }}
            alt="Furniture"
            component="img"
            height="250"
            image={image}
          />
          <Box
            sx={{
              alignItems: 'center',
              backgroundColor: 'primary.light',
              borderRadius: '0 12px 12px 0',
              color: 'white',
              display: 'flex',
              fontFamily: 'Poppins',
              fontSize: '0.9rem',
              justifyContent: 'center',
              left: '0',
              letterSpacing: 1.5,
              opacity: '0.85',
              padding: '5px 10px',
              position: 'absolute',
              top: '0',
            }}
          >
            <StyleIcon sx={{ fontSize: '1.2rem', marginRight: '5px' }} />
            {price}
          </Box>
        </Box>
        <CardContent>
          <Typography
            component="div"
            sx={{ fontFamily: 'Poppins', textAlign: 'center' }}
            variant="h5"
          >
            {title}
          </Typography>
          <Typography sx={{ color: 'grey', fontSize: 12, textAlign: 'center' }}>
            {'( '}
            {type}
            {' )'}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Box display="flex" justifyContent="center" p={2}>
        <Button
          color="primary"
          onClick={() => {Navigate('/shop/items/furniture');}}
          size="medium"
          variant="contained"
        >
          View Item
        </Button>
      </Box>
    </Card>
  );
}

export default MultiActionAreaCard;
