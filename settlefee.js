const { ethers } = require("ethers");
const { createZGServingNetworkBroker } = require("@0glabs/0g-serving-broker");

async function main() {
  const provider = new ethers.JsonRpcProvider("https://evmrpc-testnet.0g.ai");

  // Step 1: Create a wallet with a private key
  const privateKey = "INPUT_PRIVATE_KEY_HERE";
  const wallet = new ethers.Wallet(privateKey, provider);

  // Step 2: Initialize the broker
  try {
    const broker = await createZGServingNetworkBroker(wallet);
    const fee = 0.000000001;
    // console.log(signer);
    // console.log("broker", broker);
    await broker.settleFee("ACCOUNT_ADDRESS", "MODEL_NAME", 0.00000000001);
  } catch (e) {
    console.log(e);
  }
}
main();
