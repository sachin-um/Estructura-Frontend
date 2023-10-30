// eslint-disable-next-line import/no-unresolved
import webLogo from '/Logo.png';
// eslint-disable-next-line import/no-unresolved
import avatarImg from '/User/user.png';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const pages = ['Professionals', 'Products', 'Blog'];
const settings = ['Profile', 'Account', 'Logout'];
const professionalsTopics = [
  'Architects',
  'Interior Designers',
  'Construction Companies',
  'Landscape Architects',
  'Home Builders',
  'Painters',
  'Carpenters',
];
const productsTopics = [
  'Furniture',
  'Hardware Items',
  'Gardening Items and Tools',
  'Bathware',
  'Lighting',
];

function CusTopBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElProfessionals, setAnchorElProfessionals] =
    React.useState(null);
  const [anchorElProducts, setAnchorElProducts] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
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

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseProfessionalsMenu = () => {
    setAnchorElProfessionals(null);
  };

  const handleCloseProductsMenu = () => {
    setAnchorElProducts(null);
  };

  return (
    // <AppBar position={isAppBarFixed ? 'fixed' : 'relative'} sx={{ backgroundColor: 'white', color: 'green', transition: 'position 0.2s ease-in-out', }}>
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
              justifyContent: 'flex-start', // Logo aligns to the left
            }}
            component="a"
            href="/"
            noWrap
            variant="h6"
          >
            <img src={webLogo} alt="" height={65}  />
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
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={avatarImg} />
              </IconButton>
            </Tooltip>
            <Menu
              anchorOrigin={{
                horizontal: 'right',
                vertical: 'top',
              }}
              transformOrigin={{
                horizontal: 'right',
                vertical: 'top',
              }}
              anchorEl={anchorElUser}
              id="menu-appbar"
              keepMounted
              onClose={handleCloseUserMenu}
              open={Boolean(anchorElUser)}
              sx={{ '& .MuiPaper-root': { minWidth: '200px' }, mt: '45px' }}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <ListItemIcon>
                    {/* Add Material-UI icons */}
                    {setting === 'Profile' && <PersonIcon color="grey" />}
                    {setting === 'Account' && <SettingsIcon color="grey" />}
                    {setting === 'Logout' && <ExitToAppIcon color="grey" />}
                  </ListItemIcon>
                  <Typography textAlign="center" sx={{ color: '#304422' }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Menu
            anchorEl={anchorElProfessionals}
            id="menu-appbar-professionals"
            onClose={handleCloseProfessionalsMenu}
            open={Boolean(anchorElProfessionals)}
            sx={{ '& .MuiPaper-root': { width: '30rem' }, mt: '45px' }}
          >
            <Grid container>
              {professionalsTopics.map((topic) => (
                <Grid item key={topic} xs={6}>
                  <MenuItem onClick={handleCloseProfessionalsMenu}>
                    <Typography textAlign="center" sx={{ color: '#304422' }}>
                      {topic}
                    </Typography>
                  </MenuItem>
                </Grid>
              ))}
            </Grid>
          </Menu>

          <Menu
            anchorEl={anchorElProducts}
            id="menu-appbar-products"
            onClose={handleCloseProductsMenu}
            open={Boolean(anchorElProducts)}
            sx={{ '& .MuiPaper-root': { width: '30rem' }, mt: '45px' }}
          >
            <Grid container>
              {productsTopics.map((topic) => (
                <Grid item key={topic} xs={6}>
                  <MenuItem onClick={handleCloseProductsMenu}>
                    <Typography textAlign="center" sx={{ color: '#304422' }}>
                      {topic}
                    </Typography>
                  </MenuItem>
                </Grid>
              ))}
            </Grid>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default CusTopBar;
