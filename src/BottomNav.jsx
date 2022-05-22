import NavBar from "./NavBar.jsx";
import "./styles.css";
import UserPage from "./UserPage.jsx";
import GetStarted from "./GetStarted.jsx";
import NFTCollection from "./NFTCollection.jsx";
import { BottomNavigation } from '@mui/material';
import * as React from 'react';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import {
  BrowserRouter as Router,
  Route,
  Routes, 
  Switch
} from "react-router-dom";

function BottomNav() {
    const discord_image="https://demo.storj-ipfs.com/ipfs/QmUKwoVWEmP9bG4QREF2LssEFfU7iFqMG4Eseto9w2ovpn"

    return(
        <div id="bottomnav">
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation>
                    <BottomNavigationAction id="bottom_nav_image" label="Favorites" icon={<img src={discord_image} height={"40px"} />}/>
                </BottomNavigation>
            </Paper>
        </div>
    )
}

export default BottomNav;