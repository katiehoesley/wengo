import SingleNFT from './SingleNFT.jsx'

function NFTCollection ({ nft_collection }) { 
    console.log(nft_collection)
    const nfts = nft_collection.map(nft => { 
        return (
        <SingleNFT nft={nft}/>
        )
    })
    
    return(
        <div>
            <h1>NFT Gallery</h1>
            <div>{nfts}</div>
        </div>
    )
}

export default NFTCollection; 