import React from "react";
import { Button, Container, Grid, Typography, Box, Card, CardContent, CardActions } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function PreviousProjects() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} style={{ marginLeft: 'auto', marginTop: '2rem' }}>
          <Card sx={{ height: '100%' }}>
            <img src="BannerImage.jpg" alt="Project 1" style={{ width: '100%', height: '200px' }} />
            <CardContent>
              <Typography variant="subtitle1">Project Name 1</Typography>
              <Box display="flex" alignItems="center">
                <LocationOnIcon fontSize="small" />
                <Typography variant="body2" sx={{ marginLeft: 1 }}>Location 1</Typography>
              </Box>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button variant="outlined" startIcon={<EditIcon />} sx={{ marginRight: 2 }}>Edit</Button>
              <Button variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} style={{ marginLeft: 'auto', marginTop: '2rem' }}>
          <Card sx={{ height: '100%' }}>
            <img src="cover.jpg" alt="Project 2" style={{ width: '100%', height: '200px' }} />
            <CardContent>
              <Typography variant="subtitle1">Project Name 2</Typography>
              <Box display="flex" alignItems="center">
                <LocationOnIcon fontSize="small" />
                <Typography variant="body2" sx={{ marginLeft: 1 }}>Location 2</Typography>
              </Box>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button variant="outlined" startIcon={<EditIcon />} sx={{ marginRight: 2 }}>Edit</Button>
              <Button variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} style={{ marginLeft: 'auto', marginTop: '2rem' }}>
          <Card sx={{ height: '100%' }}>
            <img src="formBg.jpg" alt="Project 3" style={{ width: '100%', height: '200px' }} />
            <CardContent>
              <Typography variant="subtitle1">Project Name 3</Typography>
              <Box display="flex" alignItems="center">
                <LocationOnIcon fontSize="small" />
                <Typography variant="body2" sx={{ marginLeft: 1 }}>Location 3</Typography>
              </Box>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button variant="outlined" startIcon={<EditIcon />} sx={{ marginRight: 2 }}>Edit</Button>
              <Button variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4} style={{ marginLeft: 'auto', marginTop: '2rem' }}>
          <Card sx={{ height: '100%' }}>
            <img src="signupLandingBG.jpg" alt="Project 4" style={{ width: '100%', height: '200px' }} />
            <CardContent>
              <Typography variant="subtitle1">Project Name 4</Typography>
              <Box display="flex" alignItems="center">
                <LocationOnIcon fontSize="small" />
                <Typography variant="body2" sx={{ marginLeft: 1 }}>Location 4</Typography>
              </Box>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button variant="outlined" startIcon={<EditIcon />} sx={{ marginRight: 2 }}>Edit</Button>
              <Button variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} style={{ marginLeft: 'auto', marginTop: '2rem' }}>
          <Card sx={{ height: '100%' }}>
            <img src="signin.png" alt="Project 5" style={{ width: '100%', height: '200px' }} />
            <CardContent>
              <Typography variant="subtitle1">Project Name 5</Typography>
              <Box display="flex" alignItems="center">
                <LocationOnIcon fontSize="small" />
                <Typography variant="body2" sx={{ marginLeft: 1 }}>Location 5</Typography>
              </Box>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button variant="outlined" startIcon={<EditIcon />} sx={{ marginRight: 2 }}>Edit</Button>
              <Button variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} style={{ marginLeft: 'auto', marginTop: '2rem' }}>
          <Card sx={{ height: '100%' }}>
            <img src="homeownerBG" alt="Project 6" style={{ width: '100%', height: '200px' }} />
            <CardContent>
              <Typography variant="subtitle1">Project Name 6</Typography>
              <Box display="flex" alignItems="center">
                <LocationOnIcon fontSize="small" />
                <Typography variant="body2" sx={{ marginLeft: 1 }}>Location 6</Typography>
              </Box>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button variant="outlined" startIcon={<EditIcon />} sx={{ marginRight: 2 }}>Edit</Button>
              <Button variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container> 
  );
}

export default PreviousProjects;


