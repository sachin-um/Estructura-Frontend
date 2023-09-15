import {
  Facebook,
  Instagram,
  LinkedIn,
  Mail,
  Phone,
  RssFeed,
  Twitter,
} from '@mui/icons-material';
import { AppBar, Box, Grid, IconButton, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <AppBar position="static">
      <Box
        sx={{
          alignItems: 'center',
          backgroundColor: '#f3f3f3',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '1rem',
        }}
      >
        <Grid container spacing={2}>
          <Grid item sm={4} xs={12}>
            <Typography
              sx={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
              }}
              noWrap
              variant="h6"
            >
              <RouterLink to="/">
                <img alt="" height={90} src="/Logo.png" />
              </RouterLink>
            </Typography>
            <Typography
              sx={{
                marginTop: '1rem',
                textAlign: 'center',
              }}
              color="textSecondary"
              variant="body2"
            >
              Estructura © {new Date().getFullYear()}
            </Typography>
          </Grid>
          <Grid
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
            }}
            item
            sm={4}
            xs={12}
          >
            <Box
              sx={{
                alignItems: 'center',
                color: '#304422',
                display: 'flex',
                marginBottom: '1rem',
                marginTop: '1rem',
              }}
            >
              <IconButton>
                <Facebook />
              </IconButton>
              <IconButton>
                <Twitter />
              </IconButton>
              <IconButton>
                <Instagram />
              </IconButton>
              <IconButton>
                <LinkedIn />
              </IconButton>
              <IconButton>
                <RssFeed />
              </IconButton>
            </Box>
            <Typography
              sx={{ color: '#304422', textAlign: 'center' }}
              variant="body2"
            >
              <Link href="/privacy-policy" style={{ textDecoration: 'none' }}>
                Privacy Policy &nbsp;
              </Link>
              <Link
                href="/terms-and-conditions"
                sx={{ marginTop: '0.5rem', textDecoration: 'none' }}
                variant="body2"
              >
                | Terms and Conditions
              </Link>
            </Typography>
          </Grid>
          <Grid item sm={4} xs={12}>
            <Box
              sx={{
                color: '#304422',
                marginTop: '1rem',
                textAlign: 'center',
              }}
            >
              <IconButton>
                <Mail />
              </IconButton>
              <span>estructura@gmail.com</span> <br />
              <IconButton>
                <Phone />
              </IconButton>
              <span>+94 12 345 6789</span>
              <br />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </AppBar>
  );
};

export default Footer;
