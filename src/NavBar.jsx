import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SpaIcon from '@mui/icons-material/Spa';
import './styles.css'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import UserPage from './UserPage.jsx'
import GetStarted from './GetStarted.jsx'
import About from './About.jsx'
import NFTCollection from './NFTCollection';

export default function NavBar() {
  return (
      <AppBar position="static" id="nav-bar-toolbar">
        <Toolbar > 
            <Link id="link-title" to='/home'  element={<GetStarted/>}>HOME</Link>
            <Link id="link-title" to="/my-nft" element={<UserPage />}>MY NFT</Link>
            <Link id="link-title" to='/gallery'  element={<NFTCollection/>}>COMMUNITY</Link>
        <SpaIcon id="spa-icon"/>
        </Toolbar>
      </AppBar>
  );
}
