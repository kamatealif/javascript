// datatypes  
// 1. Primitive Datatypes 
// 2. Non-Primitive Datatypes

// Primitive Datatypes: are call by value 
// 1. Number
// 2. String 
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt

// non-primitive datatypes : reference types 
// 1. Objects
// 2. Arrays
// 3. Functions

// 1. Number
let num = 10;
console.log("Actual number : " ,num);
console.log("Type of number : " ,typeof num); // we can also typeof(num)

// 2. String
let name = "John Doe";
console.log("Actual name : " ,name);
console.log("Type of name : " ,typeof name);

// 3. Boolean
let isStudent = true;
console.log("Actual isStudent : " ,isStudent);
console.log("Type of isStudent : " ,typeof isStudent);

// 4. Undefined
let a;
console.log("Actual a : " ,a);
console.log("Type of a : " ,typeof a);

// 5. Null
let b = null;
console.log("Actual b : " ,b);
console.log("Type of b : " ,typeof b);

// 6. Symbol
let sym = Symbol("This is a symbol");
let sym2 = Symbol("This is a symbol");
console.log("Actual sym : " ,sym);
console.log("Type of sym : " ,typeof sym);
console.log(sym == sym2); // false, becauce symbol is always unique

// 7. BigInt
// while assigning a big int always remember to add 'n' at the end of the number
let bigInt = 1234567890123456789012345678901234567890n;
console.log("Actual bigInt : " ,bigInt);
console.log("Type of bigInt : " ,typeof bigInt);


// Non-Primitive Datatypes
// 1. Objects
let obj = {
    name: "john",
    age: 25,
    email:"johndoe@gmail.com",
    isStudent: true
    }

console.table(obj);

// 2. Arrays
// Array of superhero names
let heros = ["Superman", "Batman", "Spiderman", "Ironman"];

// Display the array in a table format in the console
console.table(heros);

// Display the type of the 'heros' variable (which is an object, specifically an array)
console.log("Type of heros : ", typeof heros);

// Display the first element of the 'heros' array
console.log("First heros: ", heros[0]);

// 3. Functions

// Define a function named 'greet' that logs "Hello World" to the console
function greet() {
    console.log("Hello World");
}

// Call the 'greet' function
greet();

// Display the type of the 'greet' function (which is a function)
console.log("Type of greet : ", typeof greet);

// Arrow function to add two values
let add_two_values = (a, b) => {
    return a + b;
}

// Call the 'add_two_values' function with arguments 10 and 20, and store the result in 'result'
let result = add_two_values(10, 20);

// Display the result of the addition
console.log("Result : ", result);

// Display the type of the 'add_two_values' variable (which is a function)
console.log("Type of add_two_values : ", typeof add_two_values);