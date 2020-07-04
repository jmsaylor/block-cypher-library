const fetch = require("node-fetch");
const { tokenBlockCypher } = require("../../config/config");

const makeWallet = async (blockchain, name, address) => {
  const info = {
    name: name,
    addresses: [address],
  };
  const theString = JSON.stringify(info);
  //   console.log(theString);
  try {
    let wallet = await fetch(
      `https://api.blockcypher.com/v1/${blockchain}/main/wallets?token=${tokenBlockCypher}`,
      {
        method: "POST",
        body: theString,
      }
    );
    wallet = await wallet.json();

    return wallet;
  } catch (error) {
    console.error(error);
  }
};

module.exports = makeWallet;
