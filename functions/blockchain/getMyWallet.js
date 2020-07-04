const fetch = require("node-fetch");
const { tokenBlockCypher } = require("../../config/config");

const getMyWallet = async (blockchain, name) => {
  let wallet = await fetch(
    `https://api.blockcypher.com/v1/${blockchain}/main/wallets/${name}/addresses?token=${tokenBlockCypher}`
  );

  wallet = await wallet.json();

  console.log(wallet);
  return wallet;
};

module.exports = getMyWallet;
