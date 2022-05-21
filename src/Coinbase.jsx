import { useWeb3React } from "@web3-react/core";
import { connectors } from "./connectors.js";
import Button from '@mui/material/Button';

function Coinbase () {
    const { activate, deactivate, active, chainId, account } = useWeb3React();
    const imgSize = 26;
    <>
        <Button
            onClick={() => {
                activate(connectors.coinbaseWallet);
            } }
        >
        <img
            src="https://demo.storj-ipfs.com/ipfs/QmaaWoX3our4L3BK7YZM4ihvP1MdKhjaLSpaHb1QkZie58"
            height={imgSize}
            width={imgSize}
            borderRadius="50%" />
            Coinbase Wallet
            </Button><Button
                onClick={() => {
                    activate(connectors.walletConnect);
                } }
            >
            <img
                src="https://demo.storj-ipfs.com/ipfs/QmWurqmXGPSoTQqwH7iDSGJuiXKoPA8n1f8kpZdX9hYoKQ"
                height={imgSize}
                width={imgSize} />
                Wallet Connect
            </Button><Button
                onClick={() => {
                    activate(connectors.injected);
                } }
            >
            <img
                src="https://demo.storj-ipfs.com/ipfs/Qmboo7p1D7oWaPhtKgugiavL9JrQ7Q24c1pU4xPTdmSKgZ"
                height={imgSize}
                width={imgSize} />
            Metamask
        </Button></>
            {active && <button onClick={deactivate}>Disconnect</button>}
            <div>Connection Status: {active ? "connected!" : "not connected"}</div>
            {active && (
        <>
            <div>Account: {account}</div>
            <div>Network ID: {chainId}</div>
        </>
  )}
}

export default Coinbase