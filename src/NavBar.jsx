import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SpaIcon from '@mui/icons-material/Spa';

import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import UserPage from './UserPage.jsx'
import Home from './Home.jsx'
import About from './About.jsx'


export default function NavBar( { NFTs }) {
  return (
      <AppBar position="static">
        <Toolbar> 
        <Router>
          <Routes>
            <Route path="/my-nft" component={UserPage}/>
            <Route path="/about" component={About}/>
            <Route path='/home'  component={Home}/>
          </Routes>
         </Router>

        <SpaIcon/>

        </Toolbar>
      </AppBar>
  );
}


