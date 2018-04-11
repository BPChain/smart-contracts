const EVAPCoin = artifacts.require('./EVAPCoin.sol')

module.exports = function () {
  let evap
  EVAPCoin.deployed()
    .then(function (instance) {
      evap = instance
      return evap.abi
    })
    .then(function (result) {
      console.info(JSON.stringify(result))
    })
}
