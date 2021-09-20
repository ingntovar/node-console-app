const argv=require('yargs')
                    .option('b',{
                      alias: 'base',
                      type:'number',
                      demandOption: true
                    })
                    .check((argv,options)=>{
                      if(isNaN(argv.b)){
                        throw 'Base must be a NUMBER'
                      }
                      return true
                    })
                    .option('l',{
                      alias: 'list',
                      type: 'boolean',
                      default: false
                    })
                    .option('u',{
                      alias: 'until',
                      type: 'number',
                      default: 10
                    })
                    .argv

module.exports=argv