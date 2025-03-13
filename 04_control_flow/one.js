// if
const isUserLoggedIn = true;
const temprature = 41

if (temprature > 40){
    console.log("it is too hot outside");
}else{
    console.log("Temprature is greater than 41")
}

console.log("Executed")

// comparision operators 
// <, >, <=, >=, ==, !=, ===, !==

const score = 200
if ( score > 100) {
    const power = "fly"
    console.log(`user power: ${power}`)
}

//  short hand for if 
// const balance = 1000
// if (balance > 500) console.log("Test"),console.log("Test2") // dont do this 
/*
if(balance < 500) {
    console.log("Less than 500")
}  else if ( balance < 750) {
    console.log("Less than 750")
} else if ( balance < 950) {
    console.log("Less than 950")
} else {
    console.log("Greater than 950")
}
*/

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard){
    console.log("Allow to buy course")
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in")
}