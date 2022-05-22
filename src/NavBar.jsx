import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SpaIcon from "@mui/icons-material/Spa";

import { BrowserRouter as Router, Link } from "react-router-dom";
import UserPage from "./UserPage.jsx";
import GetStarted from "./GetStarted.jsx";
import About from "./About.jsx";

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ background: "rgba(255, 255, 255, 0.4)" }}>
        <Link id="link" to="/my-nft" element={<UserPage />}>
          My NFT
        </Link>
        {/* <Link to="/about" element={<About/>}>About APPNAME</Link> */}
        <Link id="link" to="/home" element={<GetStarted />}>
          Home
        </Link>
        <SpaIcon />
      </Toolbar>
    </AppBar>
  );
}
