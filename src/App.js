import './App.css';
import Transak from './Transak.jsx'
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";

function App() {
  return (
    <div className="App">
      hi
      <Transak/>
    </div>
  );
}

export default App;
