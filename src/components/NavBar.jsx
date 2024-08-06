import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { navLinks } from "../constants/navLink";
import { Link } from "react-router-dom";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 400,
      md: 660,
      lg: 1280,
      xl: 1920,
      custom1: 800,
      custom2: 1100,
    },
  },
});

export const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isExtraSmall = useMediaQuery(theme.breakpoints.down("xs"));
  const isTab = useMediaQuery(theme.breakpoints.down("md"));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, mx: 6 }}>
        AMVI
      </Typography>
      <List>
        {navLinks.map((text) => (
          <ListItem button key={text} component={Link} to={`/${text.toLowerCase().replace(/\s+/g, '')}`}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {!isTab ? (
        <AppBar
          position="static"
          color="default"
          elevation={0}
          className="top-bar"
        >
          <Container className="top-bar-container">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
            >
              <Box
                display="flex"
                alignItems="center"
                className="contact-wrapper"
              >
                <Typography variant="body2" className="top-bar-item">
                  <EmailIcon fontSize="small" className="header-icon" style={{ marginRight: '8px' }}/>{" "}
                  info@amvifurniture.com
                </Typography>
                <Typography variant="body2" className="top-bar-item">
                  <PhoneIcon fontSize="small" className="header-icon" style={{ marginRight: '8px' }}/> 
                  +91 78xxxxxxxx
                </Typography>
              </Box>
              <Typography variant="body2" className="top-bar-item">
                Mon to Sat: 9:00am - 6:00pm, Sun: Closed
              </Typography>
              <Box
                display="flex"
                className="social-media-icon-wrapper"
                alignItems="center"
              >
                <IconButton color="inherit" className="top-bar-icon">
                  <WhatsAppIcon />
                </IconButton>
                <IconButton color="inherit" className="top-bar-icon">
                  <InstagramIcon />
                </IconButton>
              </Box>
            </Box>
          </Container>
        </AppBar>
      ) : (
        <></>
      )}

      <AppBar position="static" className="navbar">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <img src="/ambi logo.png" alt="Logo" className="logo" />
            {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 2, color:"black" }}>
              SOLOX
            </Typography> */}
            {!(isMobile || isExtraSmall) ? (
              <Box
                display="flex"
                alignItems="center"
                className="nav-btn-wrapper"
              >
                {navLinks.map((link,index)=>{
                  return(
                    <Button key={index} color="inherit" className="nav-link" component={Link} to={`/${link.toLowerCase().replace(/\s+/g, '')}`}>
                      {link}
                    </Button>
                  )
                })}
              </Box>
            ) : (
              <>
                <IconButton
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleDrawerToggle}
                  sx={{ p: 1, bgcolor: "#fcfbd8" }}
                  className="menu-icon-wrapper"
                >
                  <MenuIcon className="menu-icon" />
                </IconButton>
                <Drawer
                  anchor="right"
                  open={drawerOpen}
                  onClose={handleDrawerToggle}
                >
                  {drawer}
                </Drawer>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
