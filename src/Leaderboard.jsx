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
      image: "https://demo.storj-ipfs.com/ipfs/QmTKERiXzz3iF6gsa278GcFXbrfZ3iCyZkZtWPALM8H3Fg",
      owner: "goodbyeKYLE",
    },
    {
      numOfLikes: 83,
      image: "https://demo.storj-ipfs.com/ipfs/QmeeDrJHhGV3eFhKbQe97eSgCfzenM1TNjWtBkvd9P2hAG",
      owner: "erikaJayne666",
    },
    {
      numOfLikes: 57,
      image: "https://demo.storj-ipfs.com/ipfs/QmRsSs1o2U7tEpUhsDoQaVMKxMVv3ED5k31RMhWyue1tcj",
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
        <div>user: {leader.owner}</div>
      </div>
    );
  }

  const leaders = nft_data.map((leader) => {
    return leaderFormatter(leader);
  });

  return (
    <div id="leaderboard">
      <h1>wengo leader board</h1>
      <h4>Check out the community's current favorite progressive NFTs</h4>
      <div id="leader-grid-container">{leaders}</div>
    </div>
  );
}

export default Leaderboard;
