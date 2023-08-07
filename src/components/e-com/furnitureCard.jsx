import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Box } from '@mui/material';
import StyleIcon from '@mui/icons-material/Style';
import "../../assets/font.css"

function MultiActionAreaCard(props) {
  const { key, image, title, price, type } = props;

  return (
    <Card sx={{
      maxWidth: 345,
      borderRadius: '15px',
      transition: 'transform 0.2s',
      '&:hover': {
        transform: 'translateY(-4px)',
      }
    }}>
      <CardActionArea sx={{}}>
        <Box sx={{ position: 'relative', borderRadius: '12px', overflow: 'hidden' }}>
          <CardMedia
            component="img"
            height="250"
            image={image}
            alt="Furniture"
            style={{
              objectFit: 'cover',
              width: '100%',
            }}
          />
          <Box sx={{
            position: 'absolute',
            top: '0',
            left: '0',
            backgroundColor: 'primary.light',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '5px 10px',
            fontSize: '0.9rem',
            fontFamily: 'Poppins',
            borderRadius: '0 12px 12px 0',
            opacity: '0.85',
            letterSpacing: 1.5
          }}>
            <StyleIcon sx={{ fontSize: '1.2rem', marginRight: '5px' }} />
            {price}
          </Box>
        </Box>
        <CardContent>
          <Typography variant="h5" component="div" sx={{ fontFamily: "Poppins", textAlign: 'center' }}>
            {title}
          </Typography>
          <Typography sx={{textAlign: 'center', color: 'grey', fontSize:12 }}>
            {'( '}{type}{' )'}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Box display="flex" justifyContent="center" p={2}>
        <Button variant="contained" color="primary" size="medium" onClick={() => alert('View the item!')}>
          View Item
        </Button>
      </Box>
    </Card>
  );
}

export default MultiActionAreaCard;