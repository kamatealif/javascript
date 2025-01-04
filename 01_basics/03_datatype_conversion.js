let score = "33abc";
console.log("type of score: ", typeof(score));
console.log("Type of score : ", typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber)
console.log(valueInNumber); // which gives an a NaN because "33abc" can not be converted into number

// "33" => 33
// "33abc" => NaN
// true => 1, false => 0;

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false;
// "" => false;
// "alif" => true;

let someNumber = 34;
let stringNumber = String(someNumber);
console.log(typeof stringNumber);