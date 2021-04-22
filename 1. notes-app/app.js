const fs = require('fs')
//will write to file and erase the previous one
fs.writeFileSync('notes.txt', 'My name is Arvinder.')
//just append the data after the pevious one.
fs.appendFileSync('notes.txt', ' I live in Ellenabad.')
