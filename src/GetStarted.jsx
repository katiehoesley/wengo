import NFTCollection from './NFTCollection.jsx'
import Coinbase from './Coinbase.jsx'
import Leaderboard from './Leaderboard.jsx';

function GetStarted() {
    return(
        <div id="get-started">
            <h1>Welcome to Whatever</h1>
            <h2>To get started, connect using your Coinbase Wallet</h2>
            <Coinbase />
            <Leaderboard/>
            <NFTCollection/>
        </div>
    )
}

export default GetStarted; 