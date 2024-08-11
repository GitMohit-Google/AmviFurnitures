import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import { ToastContainer, toast } from "react-toastify";
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
import AOS from "aos";
import "aos/dist/aos.css";
import ProductExpansionPanel from "./ProductExpansionPanel";
import { products } from "../constants/productData";

AOS.init({
  duration: 1000,
  offset: 120,
  easing: "ease-in-out",
});

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 400,
      md: 660,
      lg: 1280,
      xl: 1920,
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

  const handleEmailClick = () => {
    const email = "info@amvifurniture.com";
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    window.open(mailtoLink, "_blank");
  };

  const handleCopyContact = () => {
    navigator.clipboard.writeText("+91 7497036847");
    toast.success("Contact number copied to clipboard!");
  };

  const items = document.querySelectorAll(".submenu-item");

  items.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      const card = item.querySelector(".product-card");
      // console.log(card);
      card.style.display = "block";
    });

    item.addEventListener("mouseleave", () => {
      const card = item.querySelector(".product-card");
      card.style.display = "none";
    });
  });
  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, mx: 6 }}>
        AMVI
      </Typography>
      <List>
        {navLinks.map((text) =>
          text == "PRODUCTS" ? (
            <div>
              <ProductExpansionPanel products={products} />
            </div>
          ) : (
            <div onClick={handleDrawerToggle} className="menu-btns">
              <ListItem
                button
                key={text}
                component={Link}
                to={`/${text.toLowerCase().replace(/\s+/g, "")}`}
              >
                <ListItemText primary={text} />
              </ListItem>
            </div>
          )
        )}
      </List>
    </Box>
  );

  return (
    <div className="nav-bar-wrapper">
      <ToastContainer />
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
                <Typography
                  onClick={handleEmailClick}
                  variant="body2"
                  className="top-bar-item"
                  sx={{ cursor: "pointer" }}
                >
                  <EmailIcon
                    fontSize="small"
                    className="header-icon"
                    style={{ marginRight: "8px" }}
                  />{" "}
                  info@amvifurniture.com
                </Typography>
                <Typography
                  variant="body2"
                  className="top-bar-item"
                  onClick={handleCopyContact}
                  sx={{ cursor: "pointer" }}
                >
                  <PhoneIcon
                    fontSize="small"
                    className="header-icon"
                    style={{ marginRight: "8px" }}
                  />
                  +91 7497036847
                </Typography>
              </Box>
              <Box variant="body2" className="top-bar-item">
                <div className="flex flex-row items-center gap-2">
                  <p>Shop Now</p>
                  <a href="https://www.amazon.com" target="_blank">
                    <img
                      src="/pngwing.com.png"
                      alt="Amazon"
                      className="h-8 w-16"
                    />
                  </a>
                  <a href="https://www.flipkart.com" target="_blank">
                    <img
                      src="Flipkart.png"
                      alt="Flipkart"
                      className="h-5 w-24"
                    />
                  </a>
                </div>
              </Box>
              <Box
                display="flex"
                className="social-media-icon-wrapper"
                alignItems="center"
              >
                <a href="https://wa.me/7497036847" target="_blank">
                  <IconButton color="inherit" className="top-bar-icon">
                    <WhatsAppIcon />
                  </IconButton>
                </a>
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

      <AppBar position="static" className="navbar" sx={{ height: "70px" }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ position: "static" }}>
            <img
              src="/ambi logo.png"
              alt="Logo"
              className="logo"
              style={{ height: "60px" }}
            />

            {!(isMobile || isExtraSmall) ? (
              <Box
                display="flex"
                alignItems="center"
                sx={{ pt: 1 }}
                className="nav-btn-wrapper"
              >
                {navLinks.map((link, index) =>
                  link === "PRODUCTS" ? (
                    <div key={index} className="dropdown">
                      <Button color="inherit" className="nav-link dropbtn">
                        {link} +
                      </Button>
                      <ul className="submenu">
                        {products.map((product, index) => (
                          <li key={index} className="submenu-item">
                            <a
                              href={product.title}
                              data-aos="fade-up"
                              data-aos-delay={index * 250}
                            >
                              {product.title}
                            </a>
                            <div className="product-card">
                              <img
                                src={"demoImg.png"}
                                alt={product.name}
                                className="product-image"
                              />
                              <h4>{product.title}</h4>
                              <p>Dummy data here</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Button
                      key={index}
                      color="inherit"
                      className="nav-link"
                      component={Link}
                      to={`/${link.toLowerCase().replace(/\s+/g, "")}`}
                    >
                      {link}
                    </Button>
                  )
                )}
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
    </div>
  );
};
