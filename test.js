const fetch = require("node-fetch");
const { token } = require("./config/config");

// console.log(token);

const getBlockchain = async () => {
  try {
    let response = await fetch("http://api.blockcypher.com/v1/doge/main");
    response = await response.json();
    return response;
  } catch (error) {}
};

const generateAddress = async (blockchain) => {
  try {
    let newAddress = await fetch(
      `https://api.blockcypher.com/v1/${blockchain}/main/addrs` +
        "?token=" +
        token,
      {
        method: "POST",
      }
    );
    newAddress = await newAddress.json();
    console.log(newAddress);
    return newAddress;
  } catch (error) {
    console.error(error);
  }
};

const print = async () => {
  console.log(await getBlockchain());
};

generateAddress();
// print();
