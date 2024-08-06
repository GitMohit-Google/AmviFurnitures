import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isExtraSmall = useMediaQuery(theme.breakpoints.down('xs'));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, mx:6 }}>
        SOLOX
      </Typography>
      <List>
        {['DEMO', 'ABOUT', 'PAGES', 'SERVICES', 'SHOP', 'NEWS', 'CONTACT'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" color="default" elevation={0} className="top-bar">
        <Container className="top-bar-container">
          <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
            <Box display="flex" alignItems="center">
              <Typography variant="body2" className="top-bar-item">
                <EmailIcon fontSize="small" /> needhelp@company.com
              </Typography>
              <Typography variant="body2" className="top-bar-item">
                <PhoneIcon fontSize="small" /> +92 8800 - 6830
              </Typography>
            </Box>
            <Typography variant="body2" className="top-bar-item">
              Mon to Sat: 9:00am - 6:00pm Sun: Closed
            </Typography>
            {/* <Box display="flex" alignItems="center">
              <IconButton color="inherit" className="top-bar-icon">
                <SearchIcon />
              </IconButton>
              <IconButton color="inherit" className="top-bar-icon">
                <ShoppingCartIcon />
              </IconButton>
            </Box> */}
          </Box>
        </Container>
      </AppBar>

      <AppBar position="static" className='navbar'>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <img src="/path/to/logo.png" alt="Logo" className="logo" />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 2 }}>
              SOLOX
            </Typography>
            {!(isMobile || isExtraSmall) ? (
              <Box display="flex" alignItems="center">
                <Button color="inherit" className="nav-link">DEMO</Button>
                <Button color="inherit" className="nav-link">ABOUT</Button>
                <Button color="inherit" className="nav-link">PAGES</Button>
                <Button color="inherit" className="nav-link">SERVICES</Button>
                <Button color="inherit" className="nav-link">SHOP</Button>
                <Button color="inherit" className="nav-link">NEWS</Button>
                <Button color="inherit" className="nav-link">CONTACT</Button>
                <IconButton color="inherit">
                  <ShoppingCartIcon />
                </IconButton>
              </Box>
            ) : (
              <>
                <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleDrawerToggle} sx={{p:1,bgcolor:'#fcfbd8'}}>
                  <MenuIcon className='menu-icon'/>
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

