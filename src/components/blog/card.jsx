import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Avatar, Box } from '@mui/material';
import "../../assets/font.css"

function MultiActionAreaCard(props) {
  const { image, title, content, author, date, avatar } = props;

  return (
    <Card sx={{
      maxWidth: 345,
      borderRadius: '15px',
      transition: 'transform 0.2s',
      '&:hover': {
        transform: 'translateY(-4px)',
      }
    }}>
      <CardActionArea>
        <Box sx={{ margin: '15px', borderRadius: '12px', overflow: 'hidden' }}>
          <CardMedia
            component="img"
            height="200"
            src={image} // Use the image prop
            alt="green iguana"
            style={{
              objectFit: 'cover',
              width: '100%',
            }}
          />
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: "Poppins"}}>
            {title} {/* Use the title prop */}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{fontFamily: "Poppins"}}>
            {content} {/* Use the content prop */}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Box display="flex" alignItems="center" justifyContent="space-between" p={2}>
        <Box display="flex" alignItems="center">
          <Avatar src={avatar} /> {/* Use the avatar prop */}
          <Box ml={1}>
            <Typography variant="body2" color="text.secondary" fontSize={14}>
              {author} {/* Use the author prop */}
            </Typography>
            <Typography variant="body2" color="text.secondary" fontSize={12}>
              {date} {/* Use the date prop */}
            </Typography>
          </Box>
        </Box>
        <Button variant="contained" color="primary" size="small" onClick={() => alert('View the blog!')}>
          View Blog
        </Button>
      </Box>
    </Card>
  );
}

export default MultiActionAreaCard;