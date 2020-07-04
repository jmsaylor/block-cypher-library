const fetch = require("node-fetch");
const { tokenBlockCypher } = require("../../config/config");

const getWallets = async (blockchain) => {
  let wallets = await fetch(
    `https://api.blockcypher.com/v1/${blockchain}/main/wallets?token=${tokenBlockCypher}`
  );
  wallets = await wallets.json();
  console.log(wallets);
  return wallets;
};

module.exports = getWallets;
