import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Avatar, Box, Divider } from '@mui/material';

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="formBg.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Smart Furniture
          </Typography>
          <Typography variant="body2" color="text.secondary">
            The Corridor Media Console is engineered for functionality but the exquisite craftsmanship cannot be denied.
            In fact, the Corridor is our best-selling media console.
          </Typography>
        </CardContent>
      </CardActionArea>
      <Divider />
      <Box display="flex" alignItems="center" justifyContent="space-between" p={2}>
        <Box display="flex" alignItems="center">
          <Avatar src="User/user.png" />
          <Box ml={1}>
            <Typography variant="body2" color="text.secondary" fontSize={14}>
              S. Akarawita
            </Typography>
            <Typography variant="body2" color="text.secondary" fontSize={12}>
              16th of July 2023
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
