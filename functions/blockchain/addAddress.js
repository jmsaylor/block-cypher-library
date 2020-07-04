const fetch = require("node-fetch");
const { tokenBlockCypher } = require("../../config/config");

const addAddress = async (blockchain, address, name) => {
  const newAddress = {
    addresses: [address],
  };

  let updatedWallet = await fetch(
    `https://api.blockcypher.com/v1/${blockchain}/main/wallets/${name}/addresses?token=USERTOKEN`,
    {
      method: "POST",
      body: JSON.stringify(newAddress),
    }
  );
  updatedWallet = updatedWallet.json();
  console.log(updatedWallet);
  return updatedWallet;
};

module.exports = addAddress;
