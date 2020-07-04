const fetch = require("node-fetch");
const { tokenBlockCypher } = require("../../config/config");

const transactMicro = (from_private, to_address, value_satoshis) => {
  const microtx = {
    from_private: from_private, //PRIVATE!!! not public
    to_address: to_address,
    value_satoshis: value_satoshis,
  };

    let transaction = await fetch(`https://api.blockcypher.com/v1/ltc/main/txs/micro?token=${tokenBlockCypher}`, {
        method: "POST"
        body: JSON.stringify(microtx)
    })
    transaction = await transaction.json()
    console.log(transaction)
    return transaction

};



//https://www.blockcypher.com/dev/bitcoin/#microtransaction-endpoint

//micro transactions still not quite worked out
