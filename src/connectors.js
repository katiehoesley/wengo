import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";

const key = "17d97eeb779e4a09865898f0513c904c";

const coinbaseWallet = new WalletLinkConnector({
  url: `https://mainnet.infura.io/v3/${key}`,
  appName: "Web3-react Demo",
  supportedChainIds: [1, 3, 4, 5, 42, 56, 137],
});

const walletConnect = new WalletConnectConnector({
  rpcUrl: `https://mainnet.infura.io/v3/${key}`,
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
