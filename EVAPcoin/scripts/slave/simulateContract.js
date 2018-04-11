const execa = require('execa')
module.exports = function (address, iterationTime) {
  return execa('truffle', ['exec', 'becomeStudent.js', address, '--network=dev'])
    .then(function (result) {
      console.info(result)
      return result
    })
    .then(function () {
      require('./simulateTransactions')(address, iterationTime)
    })
}

