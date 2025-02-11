// {} this is also called as an scope 
// var c = 3000; // this is appriciable 

let a = 3000;

if (true){
	let a = 10;
	const b = 20;
	var c = 30;
	
	console.log("..innner",a)
	}

let array = [10,20,30,40,50]
for (let i = 0; i < array.length; i++){
	const element = array[i]
	console.log(element)
}

console.log(a)
//console.log(b)
console.log(c)
