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
            src="https://demo.storj-ipfs.com/ipfs/QmaaWoX3our4L3BK7YZM4ihvP1MdKhjaLSpaHb1QkZie58"
            height={imgSize}
            width={imgSize}
            borderRadius="50%" />
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
        

            {active && <button onClick={deactivate}>Disconnect</button>}
            <div><h4>CONNECTION STATUS: {active ? "CONNECTION SUCCESSFUL" : "NOT CONNECTED"}</h4></div>
            {active && (
                <>
                    <div>Account: {account}</div>
                    <div>Network ID: {chainId}</div>
                </>
            )}

        </div>
)}

export default Coinbase