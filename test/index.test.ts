import { walletSdk } from "../";

describe("SEP-24 flow", () => {
  it("should init a wallet with network and domain", () => {
    const Wal = new walletSdk.Wallet(walletSdk.NETWORKS.PUBLIC);
    const Anchor = Wal.anchor("anchor-domain");

    expect(Anchor.domain).toBe("anchor-domain");
  });
});
