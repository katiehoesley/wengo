import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import "./styles.css";
import SpaIcon from "@mui/icons-material/Spa";

export default function SingleNFT({ nft }) {
  const singleNFT = (
    <div className="grid-item" id="nft">
      <Card
        sx={{
          maxWidth: 345,
          background: "rgba(255, 255, 255, 0.7)",
          backdropFilter: "blur(10px)",
          color: "black",
        }}
      >
      <CardMedia component="img" height="300" src={nft.img} />
      </Card>
      <br/>
      <span>
        <SpaIcon color="white" />
      </span>
    </div>
  );

  return <div>{singleNFT}</div>;
}
