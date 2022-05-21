import { useWeb3React } from "@web3-react/core";
import { connectors } from "./connectors.js";
import meta from "./pics/mm.png";
import coinbase from "./pics/cbw.png";
import wallet from "./pics/wc.png";
import Button from '@mui/material/Button';

function Coinbase () {
    const { activate, deactivate, active, chainId, account } = useWeb3React();
    const imgSize = 26;

    <><Button variant="contained" id="button"
        onClick={() => {
            activate(connectors.coinbaseWallet);
        } }
    >
        <img
            alt=""
            src={coinbase}
            height={imgSize}
            width={imgSize}
            borderRadius="50%" />
        Coinbase Wallet
    </Button>
    
    <Button variant="contained" id="button"
        onClick={() => {
            activate(connectors.walletConnect);
        } }
    >
            <img src={wallet} height={imgSize} width={imgSize} />
            Wallet Connect
        </Button>
        
        <Button variant="contained" id="button"
            onClick={() => {
                activate(connectors.injected);
            } }
        >
            <img src={meta} height={imgSize} width={imgSize} />
            Metamask
        </Button></>
    {active && <Button variant="contained" id="button" onClick={deactivate}>Disconnect</Button>}
    <div>Connection Status: {active ? "connected!" : "not connected"}</div>
    {active && (
        <>
        <div>Account: {account}</div>
        <div>Network ID: {chainId}</div>
        </>
    )}
}

export default Coinbase