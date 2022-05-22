import * as React from "react";
import "./styles.css";
import SpaIcon from "@mui/icons-material/Spa";
import lizards from "./images/contemplative-reptile.jpg";
import dolphin from "./images/download-1.jpg";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Leaderboard() {
  const nft_data = [
    {
      numOfLikes: 127,
      image: lizards,
      owner: "goodbyeKYLE",
    },
    {
      numOfLikes: 83,
      image: dolphin,
      owner: "erikaJayne666",
    },
    {
      numOfLikes: 57,
      image: lizards,
      owner: "lisaVanDerPumpRules",
    },
  ];

  function leaderFormatter(leader) {
    return (
      <div className="leader-grid-item" id="nft">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            width="140"
            image={leader.image}
          />
        </Card>
        <SpaIcon color="white" />
        <span sx={{ color: "white" }}>{leader.numOfLikes}</span>
      </div>
    );
  }

  const leaders = nft_data.map((leader) => {
    return leaderFormatter(leader);
  });


    return (
        <div id="leaderboard">
          <h1>Leader Board</h1>
          <h4>Check out the community's current favorite progressive NFTs</h4>
        
            <div id="leader-grid-container">
                { leaders }
            </div>
            <div id="leader-grid-container">{leaders}</div>
       </div>
  );
}

export default Leaderboard;
