const yargs = require('yargs')

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: function(){
    console.log("Adding a new note.")
  }
})