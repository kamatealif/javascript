const accountId = 155232;
let accountEmail = 'alip@gmail.com'
var accountPassword = 'alip1234@'
accountCity = 'sangli'



// accountId = 13012; // this will give us an error. not allowed
// console.log(`account id : ${accountId}`);

accountEmail = 'John@gmail.com'
accountPassword = 'john123@lovesJane'
accountCity = 'Pune'
/*
Prefer not to use the var
because of the issues of the block scope functionality
*/

console.table({"Account id" : accountId, "Account email" : accountEmail, "Account password":accountPassword, "Account city": accountCity})

