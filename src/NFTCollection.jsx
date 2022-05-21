import SingleNFT from './SingleNFT.jsx'
import lizards from "./images/contemplative-reptile.jpg"
import dolphin from "./images/download-1.jpg"
import './styles.css'

function NFTCollection () { 
    const nft_collection = [
        { id: 1, title: "one", decription: "lizards rock!", id: 1, img: lizards }, 
        { id: 2, title: "two", decription: "what a cute dolphin", id: 1, img: dolphin }, 
        { id: 3, title: "three", decription: "lizards rock!", id: 1, img: lizards }, 
        { id: 4, title: "four", decription: "what a cute dolphin", id: 1, img: dolphin },     
        { id: 5, title: "five", decription: "what a cute dolphin", id: 1, img: dolphin }, 
        { id: 6, title: "six", decription: "lizards rock!", id: 1, img: lizards }, 
        { id: 7, title: "seven", decription: "what a cute dolphin", id: 1, img: dolphin }, 
        { id: 8, title: "eight", decription: "lizards rock!", id: 1, img: lizards }, 
    ]

    const nfts = nft_collection.map(nft => { 
        return (
        <SingleNFT nft={nft}/>
        )
    })

    return(
        <div id="home-container">
            <div id="leaderboard">
                <h1>Leader Board</h1>
                <h3>Check out the community's current favorite progressive NFTs</h3>
                <div id="board">
                    
                </div>
            </div>
            <div id="gallery">
                <h1>NFT Gallery</h1>
                <h3>Check out the NFTs other folx have earned & grown on APPNAME:</h3>
                <div className="grid-container">
                    {nfts}
                </div>
            </div>
        </div>
    )
}

export default NFTCollection; 