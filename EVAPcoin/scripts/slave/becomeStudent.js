const EVAPCoin = require('./attachToContract')(process.argv[4], web3)

module.exports = function () {
  console.info(EVAPCoin.registerAsStudent())
}
