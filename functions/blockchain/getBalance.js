const fetch = require("node-fetch");
const { tokenBlockCypher } = require("../../config/config");

const getBalance = async (blockchain, address) => {
  let balance = await fetch(
    `https://api.blockcypher.com/v1/${blockchain}/main/addrs/${address}/balance`
  );

  balance = await balance.json();

  console.log(balance);
  return balance;
};

module.exports = getBalance;
