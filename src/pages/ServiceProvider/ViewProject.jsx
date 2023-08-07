import { Box, Button, Container, Grid, Typography } from "@mui/material";
import TopBar from "../../components/TopBar";
import Footer from "../../components/Footer";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import TopBar from '../../components/TopBar';

function ViewProject() {
  return (
    <>
      <TopBar title="" />
      <Container
        style={{
          alignItems: 'center',
          backgroundColor: '#f7f8f1',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: '100vh',
          padding: '1rem 3rem 3rem',
        }}
        maxWidth={false}
      >
        <Typography
          style={{
            fontSize: '1.5rem',
            lineHeight: '1',
            textAlign: 'center',
          }}
          variant="h4"
        >
          Project Title
        </Typography>

        <Box height="350px" marginTop="40px" position="relative" width="100%">
          <img
            style={{
              height: '100%',
              objectFit: 'cover',
              width: '100%',
            }}
            alt="main"
            src="cover.jpg"
          />
        </Box>

        <Grid container spacing={1}>
          <Grid item xs={4}>
            <Box
              height="150px"
              marginTop="30px"
              position="relative"
              width="100%"
            >
              <img
                style={{
                  height: '100%',
                  objectFit: 'cover',
                  width: '100%',
                }}
                alt="Banner"
                src="formBg.jpg"
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              height="150px"
              marginTop="30px"
              position="relative"
              width="100%"
            >
              <img
                style={{
                  height: '100%',
                  objectFit: 'cover',
                  width: '100%',
                }}
                alt="Banner"
                src="formBg.jpg"
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              height="150px"
              marginTop="30px"
              position="relative"
              width="100%"
            >
              <img
                style={{
                  height: '100%',
                  objectFit: 'cover',
                  width: '100%',
                }}
                alt="Banner"
                src="formBg.jpg"
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container justifyContent="center" spacing={4}>
          <Grid
            style={{
              marginTop: '2rem',
            }}
            item
            md={6}
            xs={12}
          >
            <Card sx={{ minHeight: 300, minWidth: 200 }}>
              <CardContent>
                <Typography variant="h8">Description</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid
            style={{
              marginTop: '2rem',
            }}
            item
            md={6}
            xs={12}
          >
            <Card sx={{ marginBottom: 7, minHeight: 120, minWidth: 200 }}>
              <CardContent>
                <Typography variant="h8">Budget</Typography>
              </CardContent>
            </Card>
            <Card sx={{ minHeight: 120, minWidth: 200 }}>
              <CardContent>
                <Typography variant="h8">Location</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
    </Container>
    <Footer />
  </>
);
}

export default ViewProject;
