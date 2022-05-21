
//import "./App.css";
import { useWeb3React } from "@web3-react/core";
import { connectors } from "./connectors.js";
import NavBar from "./NavBar.jsx";
import Home from "./Home.jsx";
import "./styles.css";
import UserPage from "./UserPage.jsx";
import About from "./About.jsx";



function App() {

  return (
    <div className="app">
      <NavBar />
      <Home />

      <UserPage />
      <About />

      <button
        onClick={() => {
          activate(connectors.coinbaseWallet);
        }}
      >
        <img
          src="https://demo.storj-ipfs.com/ipfs/QmaaWoX3our4L3BK7YZM4ihvP1MdKhjaLSpaHb1QkZie58"
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
        <img
          src="https://demo.storj-ipfs.com/ipfs/QmWurqmXGPSoTQqwH7iDSGJuiXKoPA8n1f8kpZdX9hYoKQ"
          height={imgSize}
          width={imgSize}
        />
        Wallet Connect
      </button>
      <button
        onClick={() => {
          activate(connectors.injected);
        }}
      >
        <img
          src="https://demo.storj-ipfs.com/ipfs/Qmboo7p1D7oWaPhtKgugiavL9JrQ7Q24c1pU4xPTdmSKgZ"
          height={imgSize}
          width={imgSize}
        />
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
