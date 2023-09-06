import type { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

import Logout from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import type { UserState } from '../redux/UserAuthenticationReducer';

import API from '../lib/API';
import { clean, selectUser } from '../redux/UserAuthenticationReducer';

const pages: LinkedPage[] = [
  { main: { name: 'Home', path: '/' } },
  {
    main: { name: 'Professionals', path: '/' },
    subPages: [
      { name: 'All', path: '/Professionals/AllProfessionals' },
      { name: 'Architects', path: '/Professionals/ARCHITECT' },
      { name: 'Interior Designers', path: '/Professionals/INTERIORDESIGNER' },
      {
        name: 'Construction Companies',
        path: '/Professionals/CONSTRUCTIONCOMPANY',
      },
      {
        name: 'Landscape Architects',
        path: '/Professionals/LANDSCAPEARCHITECT',
      },
      { name: 'Home Builders', path: '/Professionals/MASONWORKER' },
      { name: 'Painters', path: '/Professionals/PAINTER' },
      { name: 'Carpenters', path: '/Professionals/CARPENTER' },
    ],
  },
  {
    main: { name: 'Products', path: '/' },
    subPages: [
      { name: 'All', path: '/shop' },
      { name: 'Furniture', path: '/shop/items/FURNITURE' },
      { name: 'Hardware Items', path: '/shop/items/HARDWARE' },
      { name: 'Gardening Items and Tools', path: '/shop/items/GARDENWARE' },
      { name: 'Bathware', path: '/shop/items/BATHWARE' },
      { name: 'Lighting', path: '/shop/items/LIGHTING' },
    ],
  },
  { main: { name: 'Blog', path: '/blogs' } },
];

function TopAppBar(props: TopAppBarProps) {
  const title = props.title ?? 'Estructura';

  const userInfo: UserState | null = useSelector(selectUser);

  const loggedIn = userInfo !== null;

  const MenuButtonRef = useRef<HTMLButtonElement>(null);
  const [MenuOpen, setMenuOpen] = useState(false);

  const middleRefs = useRef<HTMLButtonElement[]>([]);
  const [MiddleOpenArr, setMiddleOpenArr] = useState<boolean[]>([]);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [AvatarMenuOpen, setAvatarMenuOpen] = useState(false);
  const AvatarMenuButtonRef = useRef<HTMLButtonElement>(null);

  const Navigate = useNavigate();

  const SignInLink = encodeURI(
    '/SignIn?from=' + window.location.pathname + window.location.search,
  );

  const dispatch: ThunkDispatch<UserState, void, AnyAction> = useDispatch();
  return (
    <>
      {title && (
        <Helmet>
          <title>{title}</title>
        </Helmet>
      )}
      <AppBar
        position="static"
        sx={{ backgroundColor: 'white', color: 'green' }}
      >
        <Toolbar disableGutters>
          <Container
            sx={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'space-between',
              width: '100%',
            }}
            maxWidth="xl"
          >
            {/* Small screen Menu */}
            <Box
              sx={{
                display: { alignItems: 'center', md: 'none', xs: 'flex' },
              }}
            >
              <IconButton
                onClick={() => {
                  setMenuOpen(!MenuOpen);
                }}
                aria-label="menu"
                color="inherit"
                edge="start"
                ref={MenuButtonRef}
              >
                <MenuIcon />
              </IconButton>
            </Box>
            {/* Logo */}
            <Link style={{ alignItems: 'center', display: 'flex' }} to="/">
              <img alt="" height={65} src="/Logo.png" />
            </Link>
            {/* Small Screen Menu Menu */}
            <Box sx={{ display: { md: 'none', xs: 'flex' }, flexGrow: 1 }}>
              <Menu
                anchorOrigin={{
                  horizontal: 'left',
                  vertical: 'bottom',
                }}
                onClose={() => {
                  setMenuOpen(false);
                }}
                sx={{
                  display: { md: 'none', xs: 'block' },
                }}
                transformOrigin={{
                  horizontal: 'left',
                  vertical: 'top',
                }}
                anchorEl={MenuButtonRef.current}
                keepMounted
                open={MenuOpen}
              >
                {pages.map((page) => (
                  <MenuItem
                    onClick={() => {
                      Navigate(page.main.path);
                    }}
                    key={page.main.name}
                  >
                    <Typography
                      component="a"
                      href={page.main.path}
                      sx={{ color: 'green', textDecoration: 'none' }}
                      textAlign="center"
                    >
                      {page.main.name}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* Middle Menu drop downs */}
            <Box sx={{ display: { md: 'flex', xs: 'none' }, flexGrow: 0 }}>
              {pages.map((page, index) => {
                return (
                  <span key={page.main.name}>
                    <Button
                      onClick={() => {
                        if (page.subPages) {
                          const newMiddleOpenArr = [...MiddleOpenArr];
                          newMiddleOpenArr[index] = !newMiddleOpenArr[index];
                          setMiddleOpenArr(newMiddleOpenArr);
                        } else {
                          console.log('Navigate to ' + page.main.path);
                          Navigate(page.main.path);
                        }
                      }}
                      ref={(el) => {
                        if (el) {
                          middleRefs.current[index] = el;
                        }
                      }}
                      sx={{
                        color: 'green',
                        display: 'block',
                        fontSize: '16px',
                        letterSpacing: '0.1rem',
                        mx: 2,
                        my: 2,
                        textAlign: 'center',
                      }}
                      key={page.main.name}
                    >
                      {page.main.name}
                    </Button>
                    <Box
                      sx={{ display: { md: 'flex', xs: 'none' }, flexGrow: 1 }}
                    >
                      {page.subPages && (
                        <Menu
                          anchorOrigin={{
                            horizontal: 'left',
                            vertical: 'bottom',
                          }}
                          onClose={() => {
                            const newMiddleOpenArr = [...MiddleOpenArr];
                            newMiddleOpenArr[index] = false;
                            setMiddleOpenArr(newMiddleOpenArr);
                          }}
                          open={
                            (MiddleOpenArr[index] !== undefined
                              ? MiddleOpenArr[index]
                              : false) && !isSmallScreen
                          }
                          sx={{
                            marginTop: '2rem',
                          }}
                          anchorEl={middleRefs.current[index]}
                        >
                          <Grid container width={'40rem'}>
                            {page.subPages.map((subPage) => (
                              <Grid item key={subPage.name} xs={6}>
                                <MenuItem
                                  onClick={() => {
                                    Navigate(subPage.path);
                                  }}
                                >
                                  <Typography
                                    sx={{ color: 'green' }}
                                    textAlign="center"
                                  >
                                    {subPage.name}
                                  </Typography>
                                </MenuItem>
                              </Grid>
                            ))}
                          </Grid>
                        </Menu>
                      )}
                    </Box>
                  </span>
                );
              })}
            </Box>
            {/* Login and SignUp */}
            <Box sx={{ alignItems: 'center', display: 'flex', flexGrow: 0 }}>
              {loggedIn ? (
                <>
                  <Tooltip title={'View Profile'}>
                    <IconButton
                      onClick={() => {
                        setAvatarMenuOpen(true);
                      }}
                      ref={AvatarMenuButtonRef}
                      sx={{ color: 'green' }}
                    >
                      <Avatar
                        alt={
                          userInfo !== null && userInfo.ProfileImage !== null
                            ? userInfo.ProfileImage
                            : undefined
                        }
                        src={
                          userInfo !== null &&
                          userInfo.ProfileImageName !== null
                            ? `http://localhost:8080/files/profile-images/${userInfo.id}/${userInfo.ProfileImageName}`
                            : undefined
                        }
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    anchorOrigin={{
                      horizontal: 'right',
                      vertical: 'bottom',
                    }}
                    onClose={() => {
                      setAvatarMenuOpen(false);
                    }}
                    anchorEl={AvatarMenuButtonRef.current}
                    open={AvatarMenuOpen}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  >
                    <MenuItem
                      onClick={() => {
                        switch (userInfo?.role) {
                          case 'ADMIN':
                            Navigate('/admin/dashboard');
                            break;
                          case 'CONSTRUCTIONCOMPANY':
                          case 'ARCHITECT':
                          case 'CARPENTER':
                          case 'ELECTRICIAN':
                          case 'INTERIORDESIGNER':
                          case 'LANDSCAPEARCHITECT':
                          case 'MASONWORKER':
                          case 'PAINTER':
                          case 'RENTER':
                          case 'RETAILSTORE':
                            Navigate('/ServiceProvider/profile');
                            break;
                          case 'CUSTOMER':
                          case 'USER':
                            Navigate('/Customer/profile');
                            break;
                        }
                      }}
                      sx={{ display: 'flex', gap: '1rem' }}
                    >
                      <Avatar
                        alt={
                          userInfo !== null && userInfo.ProfileImage !== null
                            ? userInfo.ProfileImage
                            : undefined
                        }
                        src={
                          userInfo !== null &&
                          userInfo.ProfileImageName !== null
                            ? userInfo.ProfileImageName
                            : undefined
                        }
                      />
                      <span>Profile</span>
                    </MenuItem>
                    <Divider />
                    <MenuItem
                      onClick={async () => {
                        const logout = await API.get('/auth/logout');
                        const res = dispatch(clean());
                        console.table({
                          logout,
                          res,
                        });
                        Navigate('/');
                        Navigate(0);
                      }}
                    >
                      <ListItemIcon>
                        <Logout fontSize="small" />
                      </ListItemIcon>
                      Logout
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <Grid container spacing={2}>
                  <Grid component={Link} item to={SignInLink}>
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
                  </Grid>
                  <Grid component={Link} item to="/SignUp">
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
                      Sign Up
                    </Button>
                  </Grid>
                </Grid>
              )}
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}

interface LinkInfo {
  name: string;
  path: string;
}

interface LinkedPage {
  main: LinkInfo;
  subPages?: LinkInfo[];
}

interface TopAppBarProps {
  title?: string;
}

export default TopAppBar;
