const userEmail = "johndoe@gmail.com";

if (userEmail) {
  console.log("Email is valid");
} else if (userEmail === "") {
  console.log("Email is empty");
} else if (userEmail === undefined) {
  console.log("Email is undefined");
} else if (userEmail === null) {
  console.log("Email is not valid");
} else {
  console.log("Email is not valid");
}

// Truthy and Falsy Values

// Falsy values
// false, 0, -0, "", BigInt, null, undefined, NaN
// Truthy values
// true, 1, "0", " ", [], {}, function(){},

const username = [];

if (username.length === 0) {
  console.log("Username is empty");
} else {
  console.log("Username is not empty");
}

const emptyObject = {};
if (Object.keys(emptyObject).length === 0) {
  console.log("Object is empty");
}

// nullish coaliescing operator (??) :- null, undefined
// it will return the first value that is not null or undefined
let val1 ;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 10;
val1 = null ?? 10 ?? 20; // after the first null, it will not check the next value

console.log(val1); // 10


// Ternary Operator
// (condition) ? (if true) : (if false)

const iceTeaPrice = 100;
const budget = 80;
(iceTeaPrice > budget) ? console.log("I will buy it next time") : console.log("I will buy it now");
