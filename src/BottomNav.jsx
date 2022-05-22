import "./styles.css";
import { BottomNavigation } from '@mui/material';
import * as React from 'react';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';


function BottomNav() {
  const discord_image =
    "https://demo.storj-ipfs.com/ipfs/QmUKwoVWEmP9bG4QREF2LssEFfU7iFqMG4Eseto9w2ovpn";
    return(
        <div>
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
                <BottomNavigation>
                    <BottomNavigationAction id="bottom_nav_image" label="Favorites" icon={<img src={discord_image} height={"40px"} />}/>
                    
                    <div id="copy-icons">
                    <BottomNavigationAction id="copy-icon-num" label="Favorites" icon="0xf745...0c67" height={"40px"} />
                    <BottomNavigationAction id="copy-icon-pic" label="Favorites" icon={<ContentCopyIcon/>} height={"40px"} />
                    </div>
                </BottomNavigation>
        </Paper>
      </div>
    );
}

export default BottomNav;
