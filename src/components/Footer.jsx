import React from 'react';
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
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f3f3f3',
          padding: '1rem',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              noWrap
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <RouterLink to="/">
                <img src="/Logo.png" alt="" height={90} />
              </RouterLink>
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{
                marginTop: '1rem',
                textAlign: 'center',
              }}
            >
              Estructura © {new Date().getFullYear()}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '1rem',
                marginBottom: '1rem',
                color: '#304422',
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
              variant="body2"
              sx={{ color: '#304422', textAlign: 'center' }}
            >
              <Link href="/privacy-policy" style={{ textDecoration: 'none' }}>
                Privacy Policy &nbsp;
              </Link>
              <Link
                href="/terms-and-conditions"
                variant="body2"
                sx={{ textDecoration: 'none', marginTop: '0.5rem' }}
              >
                | Terms and Conditions
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
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
