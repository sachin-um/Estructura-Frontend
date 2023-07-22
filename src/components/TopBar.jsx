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

const pages = ['Home', 'Professionals', 'Products', 'Blog'];
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
  // const [isAppBarFixed, setIsAppBarFixed] = React.useState(false);

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

  // React.useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     const isFixed = scrollTop > 0;
  //     setIsAppBarFixed(isFixed);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);


  return (
    // <AppBar position={isAppBarFixed ? 'fixed' : 'relative'} sx={{ backgroundColor: 'white', color: 'green', transition: 'position 0.2s ease-in-out', }}>
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
              justifyContent: 'flex-start', // Logo aligns to the left
            }}
          >
            <RouterLink to="/">
              <img src="/Logo.png" alt="" height={65} width={65} />  
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
                <Tooltip title="Sign In">
                <IconButton color="inherit" sx={{ fontSize: 16 }} aria-label="Sign In">
                  <PersonIcon color="secondary" />
                </IconButton>
                </Tooltip>
                <Typography variant="body1" color="primary" fontWeight={600} sx={{ mr: 2,mt:1 }} className="hover-button">
                    Sign In 
                </Typography>
            </Link>
            <Box sx={{ width: '10px' }} /> {/* Add a gap of 10px between the icons */}
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
                <Tooltip title="Sign Up">
                <IconButton color="inherit" sx={{ fontSize: 16 }} aria-label="Sign Up">
                  <ExitToAppIcon color="secondary" />
                </IconButton>
                </Tooltip>
                <Typography variant="body1" color="primary" fontWeight={600} sx={{ mt:1 }} className="hover-button">
                  Sign Up
                </Typography>
            </Link>      
            
          </Box>

          <Menu
            sx={{ mt: '45px', '& .MuiPaper-root': { width: '30rem' } }}
            id="menu-appbar-professionals"
            anchorEl={anchorElProfessionals}
            open={Boolean(anchorElProfessionals)}
            onClose={handleCloseProfessionalsMenu}
          >
            <Grid container>
              {professionalsTopics.map((item) => (
                <Link 
                  key={item.id}
                  component={RouterLink}
                  underline="hover"
                  to={item.link}
                  style={{
                    textDecoration:"none",
                    color:"inherit",
                    display:'flex',
                    }}
                >
                  <Grid item xs={6} >
                    <MenuItem onClick={handleCloseProfessionalsMenu}>
                      <Typography textAlign="center" sx={{ color: 'green' }}>
                        {item.title}
                      </Typography>
                    </MenuItem>
                  </Grid>
                </Link>
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
            <Grid container>
              {productsTopics.map((item) => (
                <Link 
                  key={item.id}
                  component={RouterLink}
                  underline="hover"
                  to={item.link}
                  style={{
                    textDecoration:"none",
                    color:"inherit",
                    display:'flex',
                    }}
                >
                  <Grid item xs={6} >
                    <MenuItem onClick={handleCloseProductsMenu}>
                      <Typography textAlign="center" sx={{ color: 'green' }}>
                        {item.title}
                      </Typography>
                    </MenuItem>
                  </Grid>
                </Link>
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
