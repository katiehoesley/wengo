import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link, 
    useNavigate
  } from "react-router-dom";
import NFTCollection from './NFTCollection.jsx'


export default function NavBar( { NFTs }) {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          > 
            <MenuIcon>
                <Link to='/my-nft' style={{ textDecoration: 'none' }}>
                    <MenuItem>My NFT</MenuItem>
                </Link>
            </MenuIcon>
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


