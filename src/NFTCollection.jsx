import SingleNFT from "./SingleNFT.jsx";
import lizards from "./images/contemplative-reptile.jpg";
import dolphin from "./images/download-1.jpg";
import "./styles.css";
import Leaderboard from "./Leaderboard.jsx";
import UpcomingEvents from "./UpcomingEvents.jsx";

function NFTCollection() {
  const nft_collection = [
    { id: 1, 
      title: "one", 
      decription: "lizards rock!", 
      img: "https://demo.storj-ipfs.com/ipfs/QmWD8C75SfRwuSs7nJbBk2L5U5rBs7V6UmWVkUZYE1HbvE"
    },
    {
      id: 2,
      title: "two",
      decription: "what a cute dolphin",
      img: "https://demo.storj-ipfs.com/ipfs/QmR1y8yBXuJGqqo2zAJ2X5ycdDT5a165fQZiuERwbnoLFa",
    },
    { 
      id: 3,
       title: "three", 
       decription: "lizards rock!", 
       img: "https://demo.storj-ipfs.com/ipfs/QmXLdfusrez8k72PqEzpgPf6oHjCJFz59S7DRjJTxTWU64"
      },
    {
      id: 4,
      title: "four",
      decription: "what a cute dolphin",
      img: "https://demo.storj-ipfs.com/ipfs/Qmc22sL1qDuUSxZW1TM58Fu7mqYGnGLPGvtDF9wBuLCQBz",
    },
    {
      id: 5,
      title: "five",
      decription: "what a cute dolphin",
      img: "https://demo.storj-ipfs.com/ipfs/QmeMAHmks13whQFjUtgXkfbHBd2KN47Hvi7LryYLUrNBvu",
    },
    { 
      id: 6, 
      title: "six", 
      decription: "lizards rock!", 
      img: "https://demo.storj-ipfs.com/ipfs/QmQBBSkyJ5uweYMhFoiTgdVQt4snFghxMvYwo2KuDaydQN" 
    },
    {
      id: 7,
      title: "seven",
      decription: "what a cute dolphin",
      img: "https://demo.storj-ipfs.com/ipfs/QmRsSs1o2U7tEpUhsDoQaVMKxMVv3ED5k31RMhWyue1tcj",
    },
    { 
      id: 8, 
      title: "eight", 
      decription: "lizards rock!", 
      img: "https://demo.storj-ipfs.com/ipfs/QmTKERiXzz3iF6gsa278GcFXbrfZ3iCyZkZtWPALM8H3Fg"
    },
  ];

  const nfts = nft_collection.map((nft) => {
    return <SingleNFT nft={nft} />;
  });

  return (
    <div id="home-container">
      <UpcomingEvents/>
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
