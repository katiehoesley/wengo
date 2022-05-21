import "./App.css";
import Transak from "./Transak.jsx";
import { useWeb3React } from "@web3-react/core";
import { connectors } from "./connectors";

function App() {
  const { activate, deactivate } = useWeb3React();

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
    </div>
  );
}

export default App;
