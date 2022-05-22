import NFTCollection from './NFTCollection.jsx'
import Coinbase from './Coinbase.jsx'
import Leaderboard from './Leaderboard.jsx';

function GetStarted() {
    return(
        <div id="get-started">
            <h1>welcome to wengo!</h1>
            <h4>TO GET STARTED, CONNECT TO YOUR WALLET</h4>
            <Coinbase />
        </div>
    )
}

export default GetStarted; 