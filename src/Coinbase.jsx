import { useWeb3React } from "@web3-react/core";
import { connectors } from "./connectors.js";
import Button from '@mui/material/Button';

function Coinbase () {
    const { activate, deactivate, active, chainId, account } = useWeb3React();
    const imgSize = 26;
    
    return(
    <div>
        <Button variant="outlined" id="connect-button"
            onClick={() => {
                activate(connectors.coinbaseWallet);
            } }
        >
        <img
            alt=""
            src="https://demo.storj-ipfs.com/ipfs/QmZDf4LrzsJfEreeFFx3dbEg4e345EqMMascmf5VvoXpJP"
            height={imgSize}
            width={imgSize} 
            />
            {/* <h2>Coinbase Wallet</h2> */}
            </Button>

            <Button variant="outlined" id="connect-button"
                onClick={() => {
                    activate(connectors.walletConnect);
                } }
            >
            <img
                alt=""
                src="https://demo.storj-ipfs.com/ipfs/QmWurqmXGPSoTQqwH7iDSGJuiXKoPA8n1f8kpZdX9hYoKQ"
                height={imgSize}
                width={imgSize} />
                {/* <h2>Wallet Connect</h2> */}
            </Button>
            
            <Button variant="outlined" id="connect-button"
                onClick={() => {
                    activate(connectors.injected);
                } }
            >
            <img
                alt=""
                src="https://demo.storj-ipfs.com/ipfs/Qmboo7p1D7oWaPhtKgugiavL9JrQ7Q24c1pU4xPTdmSKgZ"
                height={imgSize}
                width={imgSize} />
                {/* <h2>Metamask</h2> */}
            </Button>
        

            {active && <Button onClick={deactivate} variant="outlined">Disconnect</Button>}
            <div><h4>Connection Status: {active ? "CONNECTION SUCCESSFUL" : "NOT CONNECTED"}</h4></div>
            {active && (
                <>
                    <h4>Account: {account} | Network ID: {chainId}</h4>
                    <Button variant="contained"><h1>MINT YOUR FIRST NFT</h1></Button>
                </>
            )}

        </div>
)}

export default Coinbase