// syntax
// while(condiion){
    // code to be executed
// } 
let i = 1
while( i < 5) {
    console.log("i is: " + i);
    i++;
}

// exaple 2
// loop until the user enters a correct number(simulated)
let answer = "";

while( answer !=="yes")
{
    // answer = prompt("Do you want to continue? (yes/no)"); // we cann ot use promp
    console.log("You answered: " + answer);
}
