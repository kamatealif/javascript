const user ={
	username :"rohan",
	price: 999,

	welcomeMessage : function(){
		console.log(`${this.username}, welcome to the website!`) // this referce to the current context;
		console.log(this)
	}
}

// user.welcomeMessage()
// user.username = 'sam'
// user.welcomeMessage()
console.log(this)

//function HelloUser (){
	//let username = 'rajesh';
	//console.log(this.username)
	
//}
// HelloUser()

const helloUser = () =>{
	console.log(this)
}

helloUser()

// arrow functions 

// syntax : () => {}

const addTwoNumbers = (num1,num2) =>{
	return num1 + num2
}

console.log(addTwoNumbers(10,11))

// implicity return arrow function 

// const multiplyTwoNumber = (num1,num2) => num1 * num2
const multiplyTwoNumber = (num1,num2) => (num1 * num2);

console.log(multiplyTwoNumber(10,11))

// returning object 
const returnObject = () => ({username:"ramesh"})

console.log(returnObject)
