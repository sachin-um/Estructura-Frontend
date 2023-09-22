import {
  Button,
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
} from '@mui/material';
import StoreIcon from '@mui/icons-material/Store';

function RetailItems() {
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
              <Typography variant="subtitle1">Retail Item 1</Typography>
              <Box display="flex" alignItems="center">
                <StoreIcon fontSize="small" />
                <Typography variant="body2" sx={{ marginLeft: 1 }}>
                  Store Name
                </Typography>
              </Box>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button variant="outlined" sx={{ marginBottom: '5px' }}>
                View Details
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
              <Typography variant="subtitle1">Retail Item 2</Typography>
              <Box display="flex" alignItems="center">
                <StoreIcon fontSize="small" />
                <Typography variant="body2" sx={{ marginLeft: 1 }}>
                  Store Name
                </Typography>
              </Box>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button variant="outlined" sx={{ marginBottom: '5px' }}>
                View Details
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
              <Typography variant="subtitle1">Retail Item 3</Typography>
              <Box display="flex" alignItems="center">
                <StoreIcon fontSize="small" />
                <Typography variant="body2" sx={{ marginLeft: 1 }}>
                  Store Name
                </Typography>
              </Box>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button variant="outlined" sx={{ marginBottom: '5px' }}>
                View Details
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
              <Typography variant="subtitle1">Retail Item 4</Typography>
              <Box display="flex" alignItems="center">
                <StoreIcon fontSize="small" />
                <Typography variant="body2" sx={{ marginLeft: 1 }}>
                  Store Name
                </Typography>
              </Box>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button variant="outlined" sx={{ marginBottom: '5px' }}>
                View Details
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
              <Typography variant="subtitle1">Retail Item 5</Typography>
              <Box display="flex" alignItems="center">
                <StoreIcon fontSize="small" />
                <Typography variant="body2" sx={{ marginLeft: 1 }}>
                  Store Name
                </Typography>
              </Box>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button variant="outlined" sx={{ marginBottom: '5px' }}>
                View Details
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
              <Typography variant="subtitle1">Retail Item 6</Typography>
              <Box display="flex" alignItems="center">
                <StoreIcon fontSize="small" />
                <Typography variant="body2" sx={{ marginLeft: 1 }}>
                  Store Name
                </Typography>
              </Box>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button variant="outlined" sx={{ marginBottom: '5px' }}>
                View Details
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default RetailItems;
