function calculateCartPrice(...num1){
	return num1;
}

console.log(calculateCartPrice(100,200,300))

//some people also do something like this 
function calculateCartPrice1(val1, val2, ...num){
	return num
}

console.log(calculateCartPrice1(200,300,1000,2000))

const user ={
	username: "alif",
	price : 100
}

function handleObject(obj){
	console.log(`username is ${obj.username} and price is ${obj.price}`)

handleObject(user)}

// we can also do something like this 
//handleObject({
//	username :"rajesh",
//	price: 099
//})

const myarr = [10,20,30,40]
function returnSecondValue(getArray){
	return getArray[1]
}

console.log(returnSecondValue(myarr))

// we can also do something like this 
console.log(returnSecondValue([100,200,300,400]))
