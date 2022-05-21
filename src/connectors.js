import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";

// const key = "17d97eeb779e4a09865898f0513c904c";
// const url = `https://mainnet.infura.io/v3/${key}`;
const figmentKey = "ae158e453ade34b1da20c77f43e80c53";

const rpcNetwork = "matic-mumbai--rpc";
const rpcUrl = `https://${rpcNetwork}.datahub.figment.io/apikey/${figmentKey}`;

const coinbaseWallet = new WalletLinkConnector({
  url: rpcUrl,
  appName: "hackathon project",
  supportedChainIds: [1, 3, 4, 5, 42, 56, 137],
});

const walletConnect = new WalletConnectConnector({
  rpcUrl: rpcUrl,
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
});

const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
});

export const connectors = {
  injected,
  walletConnect,
  coinbaseWallet,
};
