import React from "react";
import {
  AppBar,
  Typography,
  IconButton,
  Box,
  Grid,
  Link,
} from "@mui/material";
import { Facebook, Twitter, Instagram, Mail, Phone, RssFeed, LinkedIn } from "@mui/icons-material";
import {  Link as RouterLink, useLocation } from "react-router-dom";

const Footer = () => {
  return (
    <AppBar position="static">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#f3f3f3",
          padding: "1rem",

        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                marginLeft: "1rem"
              }}
            >
              <RouterLink to="/">
                <img src="/Logo.png" alt="" height={90}  />  
              </RouterLink>
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{
              marginLeft: "2rem"
            }}>
              Estructura © {new Date().getFullYear()}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column", 
          }}>
            <Box sx={{ display: "flex",
             alignItems: "center",  
             marginTop:"2rem",
             marginBottom:"1rem",
             color:"#304422"}}>
              <IconButton >
                <Facebook />
              </IconButton>
              <IconButton >
                <Twitter />
              </IconButton>
              <IconButton>
                <Instagram />
              </IconButton>
              <IconButton >
                <LinkedIn />
              </IconButton>
              <IconButton >
              <RssFeed />
            </IconButton>
            
            </Box>
            <Typography variant="body2" sx={{ color:"#304422" }}>
              <Link
                href="/privacy-policy"
                style={{ textDecoration: "none",}}
                
              >
                Privacy Policy 
              </Link>
             
              <Link
                href="/terms-and-conditions"
                
                variant="body2"
                sx={{ textDecoration: "none", marginLeft: "0.5rem" }} 
              >
                |  Terms and Conditions
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} >
            <Box sx={{color:"#304422",marginLeft:"12rem",  marginTop:"2rem",}}>
            <IconButton >
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
