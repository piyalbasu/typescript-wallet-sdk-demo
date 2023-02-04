import { walletSdk } from "../";

describe("SEP-24 flow", () => {
  it("should init a wallet with network", () => {
    const Wal = new walletSdk.Wallet(walletSdk.NETWORKS.PUBLIC);
    expect(Wal.anchor()).toBe("anchor");
  });
});
