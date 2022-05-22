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
import NFTCollection from './NFTCollection';

export default function NavBar() {
  return (
      <AppBar position="static" id="nav-bar-toolbar">
        <Toolbar > 
            <Link id="link-title" to='/home'  element={<GetStarted/>}><b>home</b></Link>
            <Link id="link-title" to="/my-nft" element={<UserPage />}><b>my nft</b></Link>
            <Link id="link-title" to='/community'  element={<NFTCollection/>}><b>community</b></Link>
        <SpaIcon id="spa-icon"/>
        </Toolbar>
      </AppBar>
  );
}
