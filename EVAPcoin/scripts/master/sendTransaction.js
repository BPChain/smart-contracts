const EVAPCoin = artifacts.require('./EVAPCoin.sol')
module.exports = function (receiver, value) {
  let evap
  EVAPCoin.deployed()
    .then(function (instance) {
      evap = instance
      evap.transfer(receiver, value)
    })
    .then(function (result) {
      return result
    })
}
