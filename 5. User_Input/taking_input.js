const imported= require('./imported.js')
// the below line prints everything including paths and input given from command line
// console.log (process.argv)

// How to print specific line for example input
//console.log(process.argv[2])


// How to get input from users
const input= process.argv[2]
if(input=="add")
{
  console.log("We are gonna learn how to add numbers.")
}
else if(input=="subtract"){
  console.log("We are gonna learn how to subtract numbers.")
} 
else if(input=="multiply"){
  console.log("We are gonna learn how to multiply numbers.")
}
else if(input=="divide")
{
  console.log("We are gonna learn how to divide numbers.")
}
else{
  console.log("Enter a valid operation.")
}

