let score = "33abc";
// console.log("type of score: ", typeof(score));
// console.log("Type of score : ", typeof score);

let valueInNumber = Number(score);
// console.log(typeof valueInNumber)
// console.log(valueInNumber); // which gives an a NaN because "33abc" can not be converted into number

// "33" => 33
// "33abc" => NaN
// true => 1, false => 0;

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false;
// "" => false;
// "alif" => true;

let someNumber = 34;
let stringNumber = String(someNumber);
// console.log(typeof stringNumber);


//=======================OPERATIONS========================

let value = 3;
let negValue = -value;

// console.log(negValue);
//
// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2/2)
// console.log(2%4)

let str1 = "Hello";
let str2 = " World";
let str3 = str1 + str2;
// console.log(str3);
//
// console.log("1" + 2); // not converted => 12
// console.log(1 + "2"); // not converted => 12
// console.log("1" + 2 + 2); // not converted => 122
// console.log(1 + 2 + "2"); // will be converted => 1 + 2 = 3 + "2"; => 32;

console.log(true);
console.log(+true); // which results into true and true is 1 so it will produce 1;
console.log(+""); // which results into to false and false is 0 so it will produce 0

// not appreciated
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
console.log(num1,num2, num3);

//2.
let gameCounter = 100;
gameCounter++;
// ++gameCounter;
console.log(gameCounter);