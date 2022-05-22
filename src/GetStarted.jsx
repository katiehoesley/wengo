import NFTCollection from './NFTCollection.jsx'
import Coinbase from './Coinbase.jsx'
import Leaderboard from './Leaderboard.jsx';

function GetStarted() {
    const text = "wengo provides land nfts that pay to engage in activities that promote both physical and mental health grow land for access to beneficial resources and exclusive events hold land to build community & contribute to local organizations watch wengro progress based on each holder’s growth and self care as a result of staying active irl land frens, get out."
    return(
        <div id="get-started">
            <h1 id="title">welcome to wengo!</h1>
                <div id="homepage-text">
                    <h1>not just an nft that pays you $matic</h1>
                    <h4>{text}</h4>
                </div>
            <h4>TO GET STARTED, CONNECT TO YOUR WALLET</h4>
            <Coinbase />
        </div>
    )
}

export default GetStarted; 