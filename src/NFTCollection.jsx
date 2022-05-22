import SingleNFT from "./SingleNFT.jsx";
import lizards from "./images/contemplative-reptile.jpg";
import dolphin from "./images/download-1.jpg";
import "./styles.css";
import Leaderboard from "./Leaderboard.jsx";

function NFTCollection() {
  const nft_collection = [
    { id: 1, 
      title: "one", 
      decription: "lizards rock!", 
      img: lizards 
    },
    {
      id: 2,
      title: "two",
      decription: "what a cute dolphin",
      img: "https://demo.storj-ipfs.com/ipfs/QmZDf4LrzsJfEreeFFx3dbEg4e345EqMMascmf5VvoXpJP",
    },
    { 
      id: 3,
       title: "three", 
       decription: "lizards rock!", 
       img: lizards 
      },
    {
      id: 4,
      title: "four",
      decription: "what a cute dolphin",
      id: 1,
      img: dolphin,
    },
    {
      id: 5,
      title: "five",
      decription: "what a cute dolphin",
      id: 1,
      img: dolphin,
    },
    { 
      id: 6, 
      title: "six", 
      decription: "lizards rock!", 
      img: lizards 
    },
    {
      id: 7,
      title: "seven",
      decription: "what a cute dolphin",
      id: 1,
      img: dolphin,
    },
    { 
      id: 8, 
      title: "eight", 
      decription: "lizards rock!", 
      img: lizards 
    },
  ];

  const nfts = nft_collection.map((nft) => {
    return <SingleNFT nft={nft} />;
  });

  return (
    <div id="home-container">
      <Leaderboard />
      <br />
      <br />
      <div id="gallery">
        <h1>wengo community</h1>
        <h4>Check out the NFTs other folx have earned & grown on wengo!</h4>
        <div className="grid-container">{nfts}</div>
      </div>
    </div>
  );
}

export default NFTCollection;
