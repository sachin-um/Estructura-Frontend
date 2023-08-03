import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PersonIcon from '@mui/icons-material/Person';
import Grid from '@mui/material/Grid';
import { Link, Link as RouterLink, useLocation } from "react-router-dom";


const pages = ['Professionals', 'Products', 'Blog'];
const professionalsTopics = [
  { id: 0, title: "All", link: "/" },
  { id: 1, title: "Architects", link: "/" },
  { id: 2, title: "Interior Designers", link: "/" },
  { id: 3, title: "Construction Companies", link: "/" },
  { id: 4, title: "Landscape Architects", link: "/" },
  { id: 4, title: "Home Builders", link: "/" },
  { id: 4, title: "Painters", link: "/" },
  { id: 4, title: "Carpenters", link: "/" },
];
const productsTopics = [
  { id: 0, title: "All", link: "/e-com/Home" },
  { id: 1, title: "Furniture", link: "/" },
  { id: 2, title: "Hardware Items", link: "/" },
  { id: 3, title: "Gardening Items and Tools", link: "/" },
  { id: 4, title: "Bathware", link: "/" },
  { id: 4, title: "Lighting", link: "/" }
];

function TopBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElProfessionals, setAnchorElProfessionals] = React.useState(null);
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
    <AppBar position ="relative" sx={{ backgroundColor: 'white', color: 'green' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleOpenNavMenu}
            sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start', 
            }}
          >
            <RouterLink to="/">
              <img src="/Logo.png" alt="" height={65} />  
            </RouterLink>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={
                  page === 'Professionals' ? handleOpenProfessionalsMenu : page === 'Products' ? handleOpenProductsMenu : null
                }
                sx={{ my: 2, mx: 2, color: 'green', display: 'block', textAlign: 'center', fontSize: '16px', letterSpacing: '0.1rem' }}
              >
                {page==='Blog' ?
                  <Link 
                  component={RouterLink}
                  underline="hover"
                  to="/blog/"
                  style={{
                    textDecoration:"none",
                    color:"inherit",
                    fontSize: '16px',
                    display:'flex',
                    }}
                  >
                      {page}
                  </Link>
                  :
                  page
                }
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
              <Link 
                      component={RouterLink}
                      underline="hover"
                      to="/SignIn"
                      style={{
                        textDecoration:"none",
                        color:"inherit",
                        display:'flex',
                        }}
              >
                <Button
                  color='primary'
                  variant='outlined'
                  sx={{
                    fontSize: 16,
                    '&:hover': {
                      variant: 'contained',
                      backgroundColor:'#ddf0dd'
                    }
                  }}
                >
                  Sign In
                </Button>
              </Link>

            <Box sx={{ width: '15px' }} /> 

            <Link 
                component={RouterLink}
                underline="hover"
                to="/SignUp"
                style={{
                  textDecoration:"none",
                  color:"inherit",
                  display:'flex',
                  }}
            >
              <Button
                color='primary'
                variant='outlined'
                sx={{
                  fontSize: 16,
                  '&:hover': {
                    variant: 'contained',
                    backgroundColor:'#ddf0dd'
                  }
                }}
              >
                Sign Up
              </Button>
            </Link>
          </Box>

          <Menu
            sx={{ mt: '45px', '& .MuiPaper-root': { width: '30rem' } }}
            id="menu-appbar-professionals"
            anchorEl={anchorElProfessionals}
            open={Boolean(anchorElProfessionals)}
            onClose={handleCloseProfessionalsMenu}
          >
            <Grid container sx={{ display: 'flex', flexWrap: 'wrap' }}>
              {professionalsTopics.map((item) => (
                <Grid key={item.id} item xs={6}>
                  <Link
                    component={RouterLink}
                    underline="hover"
                    to={item.link}
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                      display: 'flex',
                    }}
                  >
                    <MenuItem onClick={handleCloseProfessionalsMenu}>
                      <Typography textAlign="center" sx={{ color: '#304422' }}>
                        {item.title}
                      </Typography>
                    </MenuItem>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Menu>

          <Menu
            sx={{ mt: '45px', '& .MuiPaper-root': { width: '28rem' } }}
            id="menu-appbar-products"
            anchorEl={anchorElProducts}
            open={Boolean(anchorElProducts)}
            onClose={handleCloseProductsMenu}
          >
            <Grid container sx={{ display: 'flex', flexWrap: 'wrap' }}>
              {productsTopics.map((item) => (
                <Grid key={item.id} item xs={6}>
                  <Link
                    component={RouterLink}
                    underline="hover"
                    to={item.link}
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                      display: 'flex',
                    }}
                  >
                    <MenuItem onClick={handleCloseProductsMenu}>
                      <Typography textAlign="center" sx={{ color: '#304422' }}>
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
