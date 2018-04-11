const WebSocket = require('ws')
const iterationTime = process.argv[2]

function start () {
  const ws = new WebSocket('ws://eth_contract_deployer:40000')
  ws.on('message', function incoming (address) {
    console.info('-------------------------Address-------------')
    console.info(address)
    require('./simulateContract')(address, iterationTime)
      .catch(function (error) {
        setTimeout(function () {
          console.info('Starting simulation failed')
          console.info(error)
          start()
        }, 10000)
      })
  })
  ws.onerror = function () {
    console.info('Contract address WebSocket not reachable')
    ws.close()
  }

  ws.onclose = function () {
    setTimeout(function () {
      start()
    }, 10000)
  }

}
start()

