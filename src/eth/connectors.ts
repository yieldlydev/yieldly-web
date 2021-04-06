import { InjectedConnector } from "@web3-react/injected-connector";
// import { NetworkConnector } from "@web3-react/network-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
// import { WalletLinkConnector } from "@web3-react/walletlink-connector";
// import { LedgerConnector } from "@web3-react/ledger-connector";
// import { TrezorConnector } from "@web3-react/trezor-connector";
// import { FrameConnector } from "@web3-react/frame-connector";
// import { AuthereumConnector } from "@web3-react/authereum-connector";
// import { FortmaticConnector } from "@web3-react/fortmatic-connector";
// import { PortisConnector } from "@web3-react/portis-connector";
// import { SquarelinkConnector } from "@web3-react/squarelink-connector";
// import { TorusConnector } from "@web3-react/torus-connector";

const POLLING_INTERVAL = 12000;
const RPC_URLS: { [chainId: number]: string } = {
  56: "https://bsc-dataseed.binance.org/" as string,
};

export const injected = new InjectedConnector({
  supportedChainIds: [56],
});

export const walletconnect = new WalletConnectConnector({
  rpc: { 56: RPC_URLS[1] },
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
  pollingInterval: POLLING_INTERVAL,
});
