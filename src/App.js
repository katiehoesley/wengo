//import "./App.css";
import { useWeb3React } from "@web3-react/core";
import { connectors } from "./connectors.js";
import meta from "./pics/mm.png";
import coinbase from "./pics/cbw.png";
import wallet from "./pics/wc.png";
import NavBar from "./NavBar.jsx";
import Home from "./Home.jsx";
import "./styles.css";

function App() {
  const { activate, deactivate, active, chainId, account } = useWeb3React();
  const imgSize = 26;

  return (
    <div className="App">
      <NavBar />
      <Home />
      <button
        onClick={() => {
          activate(connectors.coinbaseWallet);
        }}
      >
        <img
          src={coinbase}
          height={imgSize}
          width={imgSize}
          borderRadius="50%"
        />
        Coinbase Wallet
      </button>
      <button
        onClick={() => {
          activate(connectors.walletConnect);
        }}
      >
        <img src={wallet} height={imgSize} width={imgSize} />
        Wallet Connect
      </button>
      <button
        onClick={() => {
          activate(connectors.injected);
        }}
      >
        <img src={meta} height={imgSize} width={imgSize} />
        Metamask
      </button>
      {active && <button onClick={deactivate}>Disconnect</button>}
      <div>Connection Status: {active ? "connected!" : "not connected"}</div>
      {active && (
        <>
          <div>Account: {account}</div>
          <div>Network ID: {chainId}</div>
        </>
      )}
    </div>
  );
}

export default App;
