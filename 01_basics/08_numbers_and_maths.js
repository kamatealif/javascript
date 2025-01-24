let score = 100
console.log("score: ", score)

let balance = new Number(18540);
console.log("balance: ", balance)

//toString()
console.log(balance.toString().length)

//toFixed()
console.log(balance.toFixed(2))

//toPrecision()
let anotherNumber = 138.887
console.log(anotherNumber.toPrecision(3))

//toLocalString()
let numberOfStudents = 10000000
console.log(numberOfStudents.toLocaleString('en-IN'))

// Math library
console.log(Math)
console.log(Math.abs(-11)); // will conver -ve to +ve
console.log(Math.round(4.3)) // will convert to nearest integer
console.log(Math.ceil(4.2)) // will convert to next integer
console.log(Math.floor(4.9)) // will convert to previous integer

console.log(Math.min(2,3,2,3402,29,1,20,109,2093))

//======================================== Math.Random() ========================================

console.log(Math.random())
console.log(Math.random() * 10)
console.log(Math.round(Math.random() * 10) + 1) // 1 to 10

// formula for the range of random number
const minVal = 10
const maxVal = 20
console.log(Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal )
// this is the formula for generating the random number between the min value and max value 