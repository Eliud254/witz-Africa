import React from 'react';
import { AppBar, Toolbar, Typography, Box, Menu, MenuItem, Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Image from 'next/image';

const Navbar = () => {
  const [phoneAnchorEl, setPhoneAnchorEl] = React.useState(null);
  const [laptopAnchorEl, setLaptopAnchorEl] = React.useState(null);

  const handlePhoneMenuOpen = (event) => setPhoneAnchorEl(event.currentTarget);
  const handlePhoneMenuClose = () => setPhoneAnchorEl(null);
  const handleLaptopMenuOpen = (event) => setLaptopAnchorEl(event.currentTarget);
  const handleLaptopMenuClose = () => setLaptopAnchorEl(null);

  return (
    <AppBar position="static" sx={{ backgroundColor: 'rgba(30, 9, 54, 0.8)', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <Image src="/logo.svg" alt="Witz Africa Logo" width={50} height={50} />
          <Typography variant="h4" component="div" sx={{ ml: 2, color: 'white', fontWeight: 700 }}>
            Witz Africa
          </Typography>
        </Box>
        <Button color="inherit">About</Button>
        <Button color="inherit">How Witz Works</Button>
        <Button color="inherit" endIcon={<KeyboardArrowDownIcon />} onClick={handlePhoneMenuOpen}>
          Phone Loans
        </Button>
        <Menu anchorEl={phoneAnchorEl} open={Boolean(phoneAnchorEl)} onClose={handlePhoneMenuClose}>
          <MenuItem onClick={handlePhoneMenuClose}>iPhone</MenuItem>
          <MenuItem onClick={handlePhoneMenuClose}>Samsung</MenuItem>
          <MenuItem onClick={handlePhoneMenuClose}>Google Pixel</MenuItem>
        </Menu>
        <Button color="inherit" endIcon={<KeyboardArrowDownIcon />} onClick={handleLaptopMenuOpen}>
          Laptop Loans
        </Button>
        <Menu anchorEl={laptopAnchorEl} open={Boolean(laptopAnchorEl)} onClose={handleLaptopMenuClose}>
          <MenuItem onClick={handleLaptopMenuClose}>MacBook</MenuItem>
          <MenuItem onClick={handleLaptopMenuClose}>Dell</MenuItem>
          <MenuItem onClick={handleLaptopMenuClose}>HP</MenuItem>
        </Menu>
        <Button color="inherit">Education Loan</Button>
        <Button color="inherit">Travel Finance</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;