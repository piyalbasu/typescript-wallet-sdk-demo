// import StellarSdk from "stellar-sdk";

export enum NETWORKS {
  PUBLIC = "PUBLIC",
  TESTNET = "TESTNET",
}

export class Wallet {
  network: NETWORKS = NETWORKS.TESTNET;

  constructor(network) {
    this.network = network;
  }

  anchor() {
    return "anchor";
  }
}
