// nested scopes 
function one(){
		const username= 'john'

		function two(){
			const website = "youtube.com"
			console.log(username);
		}

	//	console.log(website();
		two()
}

//one()

if (true){
		const username = 'rohan'
		if(username === 'rohan'){
			const website = ' youtube.com'
			console.log(username + website);
		}
//	console.log(website)
}
// console.log(username);
//=============================== interesting =========

function addOne(value){
	return value + 1;
	}

console.log(addOne(5))

// addTwo(5) // we cannot do something like this 
const addTwo = function(num){
		return num + 2
}

addTwo(5)
