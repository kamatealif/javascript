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
