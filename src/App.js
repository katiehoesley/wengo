import "./App.css";
import Transak from "./Transak.jsx";
import { useWeb3React } from "@web3-react/core";
import { connectors } from "./connectors";

function App() {
  const { activate, deactivate, active, chainId, account } = useWeb3React();
  console.log(active, chainId, account);

  return (
    <div className="App">
      hi
      <Transak />
      <button
        onClick={() => {
          activate(connectors.coinbaseWallet);
        }}
      >
        Coinbase Wallet
      </button>
      <button
        onClick={() => {
          activate(connectors.walletConnect);
        }}
      >
        Wallet Connect
      </button>
      <button
        onClick={() => {
          activate(connectors.injected);
        }}
      >
        Metamask
      </button>
      <button onClick={deactivate}>Disconnect</button>
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
