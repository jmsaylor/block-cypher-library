const fetch = require("node-fetch");
const { tokenBlockCypher } = require("../../config/config");

const makeAddress = async (blockchain) => {
  console.log(tokenBlockCypher);
  try {
    let newAddress = await fetch(
      `https://api.blockcypher.com/v1/${blockchain}/main/addrs` +
        "?token=" +
        tokenBlockCypher,
      {
        method: "POST",
      }
    );
    newAddress = await newAddress.json();

    return newAddress;
  } catch (error) {
    console.error(error);
  }
};

module.exports = makeAddress;
