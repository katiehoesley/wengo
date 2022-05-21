import NFTCollection from './NFTCollection.jsx'
import Coinbase from './Coinbase.jsx'

function Home() {
    return(
        <div>
            <h1>Welcome to Whatever</h1>
            <h2>To get started, connect using your Coinbase Wallet</h2>
            <Coinbase />
            <NFTCollection/>
        </div>
    )
}

export default Home; 