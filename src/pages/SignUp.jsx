import { Box, Button, Container, Grid, Typography } from "@mui/material";
import TopBar from "../components/TopBar";

function SignUp() {
    return (
    <>
      <TopBar title="Register to Estructura" />
        <Box
          sx={{
            backgroundColor: "#f7f8f1",
            minHeight: "85vh",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            paddingTop: '2rem',
          }}
        >
        <Container maxWidth="lg">
          <Grid container spacing={8}>
          <Grid item xs={12} md={6} sx={{marginTop: '2rem'}}>
            <Box
              sx={{
                backgroundColor: "#fff",
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                textAlign: "center",
                height: '500px',
              }}
            >
            <img
              src="homeOwner.jpg"
              alt="Home Owner"
              style={{ width: "100%", height: '60%', marginBottom: "2rem" }}
            />
            <Typography variant="h4" sx={{ mb: "0.5rem", color: '#435834'}}>
              I am a Homeowner
            </Typography>
            <Typography variant="h6" sx={{ color: '#435834', fontSize: '1.2rem' }}>
              I want to build my dream house
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              sx={{ width: "50%", mt: "2rem", color: "#fff" }}
              href="/SignUp/HomeOwner"
            >
              Sign up as a Homeowner
            </Button>
          </Box>
        </Grid>
          <Grid item xs={12} md={6} sx={{marginTop: '2rem'}}>
            <Box
              sx={{
                backgroundColor: "#fff",
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                textAlign: "center",
                height: '500px'
              }}
            >
            <img
              src="serviceProvider.webp"
              alt="Service Provider"
              style={{ width: "100%", height: '60%', marginBottom: "2rem" }}
            />
            <Typography variant="h4" sx={{ mb: "0.5rem", color: '#435834'}}>
              I am a Service Provider
            </Typography>
            <Typography variant="h6" sx={{ color: '#435834', fontSize: '1.2rem' }}>
              I provide services related to home improvement, sell/rent necessary items
            </Typography>
            <Button
              variant="contained"
              sx={{ width: "50%", mt: "1rem", color: "#fff" }}
              color="secondary"
              href="/SignUp/ServiceProvider"
            >
              Sign up as a Service Provider
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
  </>
);
}

export default SignUp;








