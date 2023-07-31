import { DisplaySettings } from '@mui/icons-material';
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
import { type AnyAction, type ThunkDispatch } from '@reduxjs/toolkit';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import API from '../lib/API';
import {
  UserState,
  clean,
  selectUser,
} from '../redux/UserAuthenticationReducer';

interface LinkInfo {
  name: string;
  path: string;
}

interface LinkedPage {
  main: LinkInfo;
  subPages?: LinkInfo[];
}

const pages: LinkedPage[] = [
  { main: { name: 'Home', path: '/' } },
  {
    main: { name: 'Professionals', path: '/' },
    subPages: [
      { name: 'Architects', path: '/' },
      { name: 'Interior Designers', path: '/' },
      { name: 'Construction Companies', path: '/' },
      { name: 'Landscape Architects', path: '/' },
      { name: 'Home Builders', path: '/' },
      { name: 'Painters', path: '/' },
      { name: 'Carpenters', path: '/' },
    ],
  },
  {
    main: { name: 'Products', path: '/' },
    subPages: [
      { name: 'Furniture', path: '/' },
      { name: 'Hardware Items', path: '/' },
      { name: 'Gardening Items and Tools', path: '/' },
      { name: 'Bathware', path: '/' },
      { name: 'Lighting', path: '/' },
    ],
  },
  { main: { name: 'Blog', path: '/' } },
];
function TopAppBar() {
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

  const dispatch: ThunkDispatch<UserState, void, AnyAction> = useDispatch();
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: 'green' }}>
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
            <img alt="" height={65} src="/Logo.png" width={65} />
          </Link>
          {/* Middle Menu */}
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
                <MenuItem key={page.main.name}>
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
                        anchorEl={middleRefs.current[index]}
                      >
                        <Grid container>
                          {page.subPages.map((subPage) => (
                            <Grid item key={subPage.name} xs={6}>
                              <MenuItem
                                onClick={() => {
                                  console.log(subPage.path);
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
                <Tooltip title={'Open Settings'}>
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
                        userInfo !== null && userInfo.ProfileImageName !== null
                          ? userInfo.ProfileImageName
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
                      Navigate('/?profile=true');
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
                        userInfo !== null && userInfo.ProfileImageName !== null
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
                <Grid component={Link} item to="/SignIn">
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
                    Login
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
  );
}

export default TopAppBar;
