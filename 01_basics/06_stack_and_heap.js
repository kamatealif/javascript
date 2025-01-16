let github_name = "John Doe";
let another_name = github_name; // getting the copy of the github_name value

// now lets change the another_name;
another_name = "Jane Doe";

console.log(another_name)
console.log(github_name) // same as before because it is giving the copy of the value not a real value


// heap 

let userOne = {
    name : "John Doe",
    upi : "johndoe@upi",
    password : "john123"
}

let userTwo = userOne; // here we are not getting the copy of the value, we are getting the reference of the value  
userTwo.name = "Jane Doe";
userTwo.upi = "janedoe@upi";
userTwo.password = "jane123";

console.log('User One ...')
console.table(userOne)
console.log('User Two ...')
console.table(userTwo) // here we can see that the userOne is also changed because we are getting the reference of the value not the copy of the value