import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link, Link as RouterLink } from 'react-router-dom';

const pages = ['Professionals', 'Products', 'Blog'];
const professionalsTopics = [
  { id: 0, link: '/', title: 'All' },
  { id: 1, link: '/', title: 'Architects' },
  { id: 2, link: '/', title: 'Interior Designers' },
  { id: 3, link: '/', title: 'Construction Companies' },
  { id: 4, link: '/', title: 'Landscape Architects' },
  { id: 4, link: '/', title: 'Home Builders' },
  { id: 4, link: '/', title: 'Painters' },
  { id: 4, link: '/', title: 'Carpenters' },
];
const productsTopics = [
  { id: 0, link: '/e-com/Home', title: 'All' },
  { id: 1, link: '/', title: 'Furniture' },
  { id: 2, link: '/', title: 'Hardware Items' },
  { id: 3, link: '/', title: 'Gardening Items and Tools' },
  { id: 4, link: '/', title: 'Bathware' },
  { id: 4, link: '/', title: 'Lighting' },
];

function TopBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElProfessionals, setAnchorElProfessionals] =
    React.useState(null);
  const [anchorElProducts, setAnchorElProducts] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenProfessionalsMenu = (event) => {
    setAnchorElProfessionals(event.currentTarget);
  };

  const handleOpenProductsMenu = (event) => {
    setAnchorElProducts(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseProfessionalsMenu = () => {
    setAnchorElProfessionals(null);
  };

  const handleCloseProductsMenu = () => {
    setAnchorElProducts(null);
  };

  return (
    <AppBar
      position="relative"
      sx={{ backgroundColor: 'white', color: 'green' }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            aria-label="menu"
            color="inherit"
            edge="start"
            onClick={handleOpenNavMenu}
            sx={{ display: { md: 'none', xs: 'block' }, mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexGrow: 1,
              justifyContent: 'flex-start',
            }}
            component="a"
            href="/"
            noWrap
            variant="h6"
          >
            <RouterLink to="/">
              <img src="/Logo.png" alt="" height={65} />  
            </RouterLink>
          </Typography>

          <Box sx={{ display: { md: 'none', xs: 'flex' }, flexGrow: 1 }}>
            <Menu
              anchorOrigin={{
                horizontal: 'left',
                vertical: 'bottom',
              }}
              sx={{
                display: { md: 'none', xs: 'block' },
              }}
              transformOrigin={{
                horizontal: 'left',
                vertical: 'top',
              }}
              anchorEl={anchorElNav}
              id="menu-appbar"
              keepMounted
              onClose={handleCloseNavMenu}
              open={Boolean(anchorElNav)}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { md: 'flex', xs: 'none' }, flexGrow: 1 }}>
            {pages.map((page) => (
              <Button
                onClick={
                  page === 'Professionals'
                    ? handleOpenProfessionalsMenu
                    : page === 'Products'
                    ? handleOpenProductsMenu
                    : null
                }
                sx={{
                  color: 'green',
                  display: 'block',
                  fontSize: '16px',
                  letterSpacing: '0.1rem',
                  mx: 2,
                  my: 2,
                  textAlign: 'center',
                }}
                key={page}
              >
                {page === 'Blog' ? (
                  <Link
                    style={{
                      color: 'inherit',
                      display: 'flex',
                      fontSize: '16px',
                      textDecoration: 'none',
                    }}
                    component={RouterLink}
                    to="/blog/"
                    underline="hover"
                  >
                    {page}
                  </Link>
                ) : (
                  page
                )}
              </Button>
            ))}
          </Box>

          <Box sx={{ alignItems: 'center', display: 'flex', flexGrow: 0 }}>
            <Link
              style={{
                color: 'inherit',
                display: 'flex',
                textDecoration: 'none',
              }}
              component={RouterLink}
              to="/SignIn"
              underline="hover"
            >
              <Button
                sx={{
                  '&:hover': {
                    variant: 'contained',
                  },
                  fontSize: 16,
                }}
                color="primary"
                variant="outlined"
              >
                Sign In
              </Button>
            </Link>

            <Box sx={{ width: '15px' }} />

            <Link
              style={{
                color: 'inherit',
                display: 'flex',
                textDecoration: 'none',
              }}
              component={RouterLink}
              to="/SignUp"
              underline="hover"
            >
              <Button
                sx={{
                  '&:hover': {
                    backgroundColor: '#ddf0dd',
                    variant: 'contained',
                  },
                  fontSize: 16,
                }}
                color="primary"
                variant="outlined"
              >
                Sign Up
              </Button>
            </Link>
          </Box>

          <Menu
            anchorEl={anchorElProfessionals}
            id="menu-appbar-professionals"
            onClose={handleCloseProfessionalsMenu}
            open={Boolean(anchorElProfessionals)}
            sx={{ '& .MuiPaper-root': { width: '30rem' }, mt: '45px' }}
          >
            <Grid container sx={{ display: 'flex', flexWrap: 'wrap' }}>
              {professionalsTopics.map((item) => (
                <Grid item key={item.id} xs={6}>
                  <Link
                    style={{
                      color: 'inherit',
                      display: 'flex',
                      textDecoration: 'none',
                    }}
                    component={RouterLink}
                    to={item.link}
                    underline="hover"
                  >
                    <MenuItem onClick={handleCloseProfessionalsMenu}>
                      <Typography sx={{ color: 'green' }} textAlign="center">
                        {item.title}
                      </Typography>
                    </MenuItem>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Menu>

          <Menu
            anchorEl={anchorElProducts}
            id="menu-appbar-products"
            onClose={handleCloseProductsMenu}
            open={Boolean(anchorElProducts)}
            sx={{ '& .MuiPaper-root': { width: '28rem' }, mt: '45px' }}
          >
            <Grid container sx={{ display: 'flex', flexWrap: 'wrap' }}>
              {productsTopics.map((item) => (
                <Grid item key={item.id} xs={6}>
                  <Link
                    style={{
                      color: 'inherit',
                      display: 'flex',
                      textDecoration: 'none',
                    }}
                    component={RouterLink}
                    to={item.link}
                    underline="hover"
                  >
                    <MenuItem onClick={handleCloseProductsMenu}>
                      <Typography sx={{ color: 'green' }} textAlign="center">
                        {item.title}
                      </Typography>
                    </MenuItem>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default TopBar;

export { pages };
