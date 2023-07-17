import React, { useState } from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Link,
  Box,
  Button,
  Popover,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Helmet } from "react-helmet";
import { Link as RouterLink, useLocation } from "react-router-dom";

const pages = [
  { id: 0, title: "Home", link: "/" },
  { id: 1, title: "Professionals" },
  { id: 2, title: "Shop" },
  { id: 3, title: "Blog", link: "/ForgotPassword" },
  { id: 4, link: "/SignIn" },
  { id: 5, link: "/SignUp" },
];

function TopBar(props) {
  const [activeTab, setActiveTab] = useState(0);
  const [popoverAnchor1, setPopoverAnchor1] = useState(null);
  const [popoverAnchor2, setPopoverAnchor2] = useState(null);
  const location = useLocation();

  const title = props.title
    ? props.title
    : "Estructura: Creating Homes; Connecting Experts";

  const handleTabChange = (pageId) => {
    setActiveTab(pageId);
    setPopoverAnchor1(null);
    setPopoverAnchor2(null);
  };

  const handlePopoverOpen1 = (event) => {
    setPopoverAnchor1(event.currentTarget);
    setActiveTab(1);
  };
  const handlePopoverClose1 = (pageId) => {
    setActiveTab(pageId);
    setPopoverAnchor1(null);
  };

  const handlePopoverOpen2 = (event) => {
    setPopoverAnchor2(event.currentTarget);
    setActiveTab(2);
  };

  const handlePopoverClose2 = (pageId) => {
    setActiveTab(pageId);
    setPopoverAnchor2(null);
  };

  const isTabActive = (pageId) => {
    if (activeTab === 1 && pageId === 1) {
      return true;
    } else if (activeTab === 2 && pageId === 2) {
      return true;
    }
    return activeTab === pageId;
  };

  const buttons = [
    {
      text: "Login",
      url: "/SignIn",
      color: isTabActive(4) ? "#7A9F60" : "#435834",
      styles: {
        fontSize: "120%",
        fontWeight: "bold",
        fontFamily: "Arial",
        "&:hover": {
          color: "#FFFFFF",
          backgroundColor: "#435834",
        },
        ...(isTabActive(4) && {
          backgroundColor: "#668550",
          color: "#FFFFFF",
        }),
      },
    },
    {
      text: "Join",
      url: "/SignUp",
      color: isTabActive(5) ? "#7A9F60" : "#435834",
      styles: {
        fontSize: "120%",
        fontWeight: "bold",
        fontFamily: "Arial",
        "&:hover": {
          color: "#FFFFFF",
          backgroundColor: "#435834",
        },
        ...(isTabActive(5) && {
          backgroundColor: "#668550",
          color: "#FFFFFF",
        }),
      },
    },
  ];

  const popoverMenuItems1 = [
    
    "Construction Companies",
    "Landscape Architects",
    "Architects",
    "Home Builders",
    "Interior Designers",
    "Carpenters",
    "Painters",
  ];

  const popoverMenuItems2 = ["Furniture", "Hardware", "Bathware", "Gardenware", "Lighting", ];

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <AppBar
        position="sticky"
        sx={{
          width: "100%",
          height: 90,
          backgroundColor: "#fff",
          zIndex: 100,
        }}
      >
        <Container>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                marginLeft: -35,
              }}
            >
              <RouterLink to="/">
                <img
                  src={"/Logo.png"}
                  alt="Logo"
                  style={{ height: 90, width: 110 }}
                />
              </RouterLink>
            </Box>
            <Box sx={{ display: "flex", marginLeft: 95 }}>
              {pages.map((page) => (
                <React.Fragment key={page.id}>
                  {page.id === 1 || page.id === 2 ? (
                    <Link
                      component="div"
                      color="inherit"
                      underline="none"
                      onClick={page.id === 1 ? handlePopoverOpen1 : handlePopoverOpen2}
                      sx={{
                        fontSize: isTabActive(page.id) ? "137%" : "120%",
                        fontWeight: "bold",
                        fontFamily: "Arial",
                        color: isTabActive(page.id) ? "#7A9F60" : "#435834",
                        marginLeft: 8,
                        "&:hover": {
                          color: "#7A9F60",
                        },
                      }}
                    >
                      {page.title}
                    </Link>
                  ) : (
                    <Link
                      component={RouterLink}
                      to={page.link}
                      color="inherit"
                      underline="none"
                      onClick={() => handleTabChange(page.id)}
                      sx={{
                        fontSize: isTabActive(page.id) ? "137%" : "120%",
                        fontWeight: "bold",
                        fontFamily: "Arial",
                        color: isTabActive(page.id) ? "#7A9F60" : "#435834",
                        marginLeft: 8,
                        "&:hover": {
                          color: "#7A9F60",
                        },
                      }}
                    >
                      {page.title}
                    </Link>
                  )}
                </React.Fragment>
              ))}
              <Popover
                open={Boolean(popoverAnchor1)}
                anchorEl={popoverAnchor1}
                onClose={handlePopoverClose1}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <Box sx={{ p: 2 }}>
                  <Typography variant="h6">Meet Our Professionals</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: 2, // Adjust the gap between items (optional)
                    }}
                  >
                    <List>
                      {popoverMenuItems1.slice(0, 4).map((item) => (
                        <ListItem button key={item}>
                          <ListItemText primary={item} />
                        </ListItem>
                      ))}
                    </List>
                    <List>
                      {popoverMenuItems1.slice(4, 8).map((item) => (
                        <ListItem button key={item}>
                          <ListItemText primary={item} />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Box>
              </Popover>
              <Popover
                open={Boolean(popoverAnchor2)}
                anchorEl={popoverAnchor2}
                onClose={handlePopoverClose2}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <Box sx={{ p: 2 }}>
                  <Typography variant="h6">Popover Menu 2</Typography>
                  <List>
                    {popoverMenuItems2.map((item) => (
                      <ListItem button key={item}>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Popover>
            </Box>
            <Box sx={{ display: "flex", gap: 6, marginLeft: -10 }}>
              {buttons.map((button) => (
                <Button
                  key={button.text}
                  variant="outlined"
                  href={button.url}
                  sx={{ color: button.color, ...button.styles }}
                >
                  {button.text}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default TopBar;
export { pages };
