const execa = require('execa')

function start () {
  execa('truffle', ['migrate', '--network=dev'])
    .then(function (result) {
      console.info(result)
      process.exit(0)
    })
    .catch(function (error) {
      console.info('Error while migrating')
      console.info(error)
      start()
    })
}

start()

