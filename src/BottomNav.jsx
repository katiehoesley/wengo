import "./styles.css";
import { BottomNavigation } from "@mui/material";
import * as React from "react";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";

function BottomNav() {
  const discord_image =
    "https://demo.storj-ipfs.com/ipfs/QmUKwoVWEmP9bG4QREF2LssEFfU7iFqMG4Eseto9w2ovpn";

  return (
    <div>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation id="bottomnav">
          <BottomNavigationAction
            id="bottom_nav_image"
            label="Favorites"
            icon={<img src={discord_image} height={"40px"} />}
          />
        </BottomNavigation>
      </Paper>
    </div>
  );
}

export default BottomNav;
