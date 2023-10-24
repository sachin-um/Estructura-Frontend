import {
  Button,
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
  IconButton,
} from '@mui/material';
import { Delete, Visibility } from '@mui/icons-material';

function Plans() {
  return (
    <Container style={{ marginBottom: '2rem' }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={4}
          style={{ marginLeft: 'auto', marginTop: '2rem' }}
        >
          <Card sx={{ height: '100%' }}>
            <img
              src="BannerImage.jpg"
              alt="Project 1"
              style={{ width: '100%', height: '200px' }}
            />
            <CardContent>
              <Typography variant="body1" fontFamily="Poppins">
                Plan Title 1
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button variant="outlined" sx={{ marginBottom: '5px' }}>
                <Visibility /> View Plan
              </Button>
              <Button variant="outlined" sx={{ marginBottom: '5px' }}>
                <Delete /> Remove Plan
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          style={{ marginLeft: 'auto', marginTop: '2rem' }}
        >
          <Card sx={{ height: '100%' }}>
            <img
              src="cover.jpg"
              alt="Project 2"
              style={{ width: '100%', height: '200px' }}
            />
            <CardContent>
              <Typography variant="subtitle1" fontFamily="Poppins">
                Plan Title 2
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button variant="outlined" sx={{ marginBottom: '5px' }}>
                <Visibility /> View Plan
              </Button>
              <Button variant="outlined" sx={{ marginBottom: '5px' }}>
                <Delete /> Remove Plan
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          style={{ marginLeft: 'auto', marginTop: '2rem' }}
        >
          <Card sx={{ height: '100%' }}>
            <img
              src="formBg.jpg"
              alt="Project 3"
              style={{ width: '100%', height: '200px' }}
            />
            <CardContent>
              <Typography variant="subtitle1" fontFamily="Poppins">
                Plan Title 3
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button variant="outlined" sx={{ marginBottom: '5px' }}>
                <Visibility /> View Plan
              </Button>
              <Button variant="outlined" sx={{ marginBottom: '5px' }}>
                <Delete /> Remove Plan
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid
          item
          xs={12}
          sm={4}
          style={{ marginLeft: 'auto', marginTop: '2rem' }}
        >
          <Card sx={{ height: '100%' }}>
            <img
              src="https://images.pexels.com/photos/259580/pexels-photo-259580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Project 4"
              style={{ width: '100%', height: '200px' }}
            />
            <CardContent>
              <Typography variant="subtitle1" fontFamily="Poppins">
                Plan Title 4
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button variant="outlined" sx={{ marginBottom: '5px' }}>
                <Visibility /> View Plan
              </Button>
              <Button variant="outlined" sx={{ marginBottom: '5px' }}>
                <Delete /> Remove Plan
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          style={{ marginLeft: 'auto', marginTop: '2rem' }}
        >
          <Card sx={{ height: '100%' }}>
            <img
              src="BannerImage.jpg"
              alt="Project 5"
              style={{ width: '100%', height: '200px' }}
            />
            <CardContent>
              <Typography variant="subtitle1" fontFamily="Poppins">
                Plan Title 5
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button variant="outlined" sx={{ marginBottom: '5px' }}>
                <Visibility /> View Plan
              </Button>
              <Button variant="outlined" sx={{ marginBottom: '5px' }}>
                <Delete /> Remove Plan
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          style={{ marginLeft: 'auto', marginTop: '2rem' }}
        >
          <Card sx={{ height: '100%' }}>
            <img
              src="formBg.jpg"
              alt="Project 6"
              style={{ width: '100%', height: '200px' }}
            />
            <CardContent>
              <Typography variant="subtitle1" fontFamily="Poppins">
                Plan Title 6
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button variant="outlined" sx={{ marginBottom: '5px' }}>
                <Visibility /> View Plan
              </Button>
              <Button variant="outlined" sx={{ marginBottom: '5px' }}>
                <Delete /> Remove Plan
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Plans;
