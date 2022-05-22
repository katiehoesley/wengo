import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SpaIcon from '@mui/icons-material/Spa';

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import UserPage from './UserPage.jsx'
import Home from './GetStarted.jsx'
import About from './About.jsx'


export default function NavBar() {
  return (
      <AppBar position="static">
        <Toolbar> 
            <Link to="/my-nft" component={UserPage}>My NFT</Link>
            <Link to="/about" component={About}>About APPNAME</Link>
            <Link to='/home'  component={Home}>Home</Link>
        <SpaIcon/>

        </Toolbar>
      </AppBar>
  );
}


