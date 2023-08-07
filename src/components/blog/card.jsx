import { Avatar, Box, Button, CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import '../../assets/font.css';

function MultiActionAreaCard(props) {
  const { author, avatar, content, date, image, title } = props;

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
      <CardActionArea>
        <Box sx={{ borderRadius: '12px', margin: '15px', overflow: 'hidden' }}>
          <CardMedia
            style={{
              objectFit: 'cover',
              width: '100%',
            }}
            alt="green iguana"
            component="img"
            height="200"
            src={image} // Use the image prop
          />
        </Box>
        <CardContent>
          <Typography
            component="div"
            gutterBottom
            sx={{ fontFamily: 'Poppins' }}
            variant="h5"
          >
            {title} {/* Use the title prop */}
          </Typography>
          <Typography
            color="text.secondary"
            sx={{ fontFamily: 'Poppins' }}
            variant="body2"
          >
            {content} {/* Use the content prop */}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Box
        alignItems="center"
        display="flex"
        justifyContent="space-between"
        p={2}
      >
        <Box alignItems="center" display="flex">
          <Avatar src={avatar} /> {/* Use the avatar prop */}
          <Box ml={1}>
            <Typography color="text.secondary" fontSize={14} variant="body2">
              {author} {/* Use the author prop */}
            </Typography>
            <Typography color="text.secondary" fontSize={12} variant="body2">
              {date} {/* Use the date prop */}
            </Typography>
          </Box>
        </Box>
        <Button
          color="primary"
          onClick={() => alert('View the blog!')}
          size="small"
          variant="contained"
        >
          View Blog
        </Button>
      </Box>
    </Card>
  );
}

export default MultiActionAreaCard;
