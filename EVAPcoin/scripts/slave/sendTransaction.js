const EVAPCoin = require('./attachToContract')(process.argv[4], web3)
const receiver = process.argv[5]
const value = process.argv[6]
module.exports = function () {
  const result = EVAPCoin.transfer(receiver, value)
  console.info(result)
}
