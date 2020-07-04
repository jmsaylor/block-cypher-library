const fetch = require("node-fetch");
const { tokenBlockCypher } = require("../../config/config");

const removeAddress = async (blockchain, name, address) => {
  //Remove endpoint only sends an empty 204 if successful
  const url = `https://api.blockcypher.com/v1/${blockchain}/main/wallets/${name}/addresses?token=${tokenBlockCypher}&address=${address}`;
  console.log(url);
  let updatedWallet = await fetch(url, {
    method: "DELETE",
    body: {},
  });

  updatedWallet = await updatedWallet.json();
  console.log(updatedWallet);
  return updatedWallet;
};

module.exports = removeAddress;
