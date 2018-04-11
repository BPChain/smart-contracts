const EVAPCoin = artifacts.require('./EVAPCoin.sol')


module.exports = function () {
  setInterval(function () {
    let evap
    console.info('---------------------in generate-------------------------')
    EVAPCoin.deployed()
      .then(function (instance) {
        evap = instance
        instance.generate(999999999999)
        return instance
      })
      .then(function (instance) {
        return instance.getStudents.call()
      })
      .then(function (students) {
        students.forEach(function (student) {
          evap.transfer(student, 1000)
        })
      })
      .then(function () {})
  }, 20000)
}


