import LocationOnIcon from '@mui/icons-material/LocationOn';
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const projectsFetch = []; // TODO: Change 1 to user id

function previousprojects() {
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
              <Typography variant="subtitle1">Project Name 1</Typography>
              <Box display="flex" alignItems="center">
                <LocationOnIcon fontSize="small" />
                <Typography variant="body2" sx={{ marginLeft: 1 }}>
                  Location 1
                </Typography>
              </Box>
            </CardContent>
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
              <Typography variant="subtitle1">Project Name 2</Typography>
              <Box display="flex" alignItems="center">
                <LocationOnIcon fontSize="small" />
                <Typography variant="body2" sx={{ marginLeft: 1 }}>
                  Location 2
                </Typography>
              </Box>
            </CardContent>
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
              <Typography variant="subtitle1">Project Name 3</Typography>
              <Box display="flex" alignItems="center">
                <LocationOnIcon fontSize="small" />
                <Typography variant="body2" sx={{ marginLeft: 1 }}>
                  Location 3
                </Typography>
              </Box>
            </CardContent>
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
              src="https://images.adsttc.com/media/images/5cde/9f86/284d/d164/0900/0043/large_jpg/012.jpg?1558093648"
              alt="Project 4"
              style={{ width: '100%', height: '200px' }}
            />
            <CardContent>
              <Typography variant="subtitle1">Project Name 4</Typography>
              <Box display="flex" alignItems="center">
                <LocationOnIcon fontSize="small" />
                <Typography variant="body2" sx={{ marginLeft: 1 }}>
                  Location 4
                </Typography>
              </Box>
            </CardContent>
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
              <Typography variant="subtitle1">Project Name 5</Typography>
              <Box display="flex" alignItems="center">
                <LocationOnIcon fontSize="small" />
                <Typography variant="body2" sx={{ marginLeft: 1 }}>
                  Location 5
                </Typography>
              </Box>
            </CardContent>
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
              <Typography variant="subtitle1">Project Name 6</Typography>
              <Box display="flex" alignItems="center">
                <LocationOnIcon fontSize="small" />
                <Typography variant="body2" sx={{ marginLeft: 1 }}>
                  Location 6
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default previousprojects;
