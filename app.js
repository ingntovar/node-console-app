const argv = require('./config/yargs')
const {calculateTimes}=require('./helpers/helpers')


console.clear()

calculateTimes(argv.b, argv.l, argv.u)
  .then(response=>console.log(response))

