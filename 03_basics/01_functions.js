console.log("a");
console.log("l");
console.log("i");
console.log("p");

function sayMyName(){
	console.log("a");
	console.log("l");
	console.log("i");
	console.log("p");
}

sayMyName()


function addTwoNumbers(num1, num2){
	if ((typeof num1 )=== 'number'  && (typeof num2) === 'number'){
			return num1 + num2;
			console.log("alif"); // this will not be executed
	}
	else{
		console.log("Please enter a number")
	}
}

let result = addTwoNumbers(2,5)

console.log(result);

function loginUserMessage(username = 'user'){
	if (username){
		return (`${username} just logged in`)
	}
	else{
		return ("Please enter a username")
	}
}

// console.log(loginUserMessage("rajesh"))
console.log(loginUserMessage())