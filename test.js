const fetch = require("node-fetch");
const { token } = require("./config/config");

//blockchain
//ltc for litecoin, btc for bitcoin

// console.log(token);

const getBlockchain = async (blockchain) => {
  try {
    let response = await fetch(
      `http://api.blockcypher.com/v1/${blockchain}/main`
    );
    response = await response.json();
    console.log(response);
    return response;
  } catch (error) {}
};

//return address as such:
// {
//   private: 'c14c0d938f1a1b51d0c5cc29783ea7277c0aaa5dc48bff48ef8a0c8eb293cdd7',
//   public: '0248717340d283c3e29ea8d89ec9c746d2b2400025ebb9c9aadd679e7ff374c003',
//   address: 'LUeynTpxgeWsaYZa7ASv4Jr4bhvpxKerhB',
//   wif: 'T9Xio8BjxT7PofiPH5eznMu2vzp7W4KUwSPwQ4uR86aTHgCefvdD'
// }

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

// returns *needs to accept multiple addresses
// {
//   token: 'c505de12fb10433ebf1354733aa0d05d',
//   name: 'jm',
//   addresses: [ 'LUeynTpxgeWsaYZa7ASv4Jr4bhvpxKerhB' ]
// }
const createWallet = async (blockchain, name, address) => {
  const info = {
    name: name,
    addresses: [address],
  };
  const theString = JSON.stringify(info);
  //   console.log(theString);
  try {
    let wallet = await fetch(
      `https://api.blockcypher.com/v1/${blockchain}/main/wallets?token=${token}`,
      {
        method: "POST",
        body: theString,
      }
    );
    wallet = await wallet.json();
    console.log(wallet);
    return wallet;
  } catch (error) {
    console.error(error);
  }
};

//not working
const showWallets = async (blockchain, walletToken) => {
  try {
    let result = await fetch(
      `'https://api.blockcypher.com/v1/${blockchain}/main/wallets?token=${walletToken}`
    );
    result = await result.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
};

const print = async () => {
  console.log(await getBlockchain());
};

// generateAddress("ltc");
// getBlockchain("ltc");
// createWallet("ltc", "jm", "LUeynTpxgeWsaYZa7ASv4Jr4bhvpxKerhB");
// showWallets(`ltc`, "c505de12fb10433ebf1354733aa0d05d");
