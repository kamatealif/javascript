// Arrays

myArray = [1,2,3,4,'alif',true,5.5];
console.log(myArray); 

let myHeros = ['spiderman', 'batman', 'superman', 'ironman', 'thor','hulk','captain america']
console.log(myHeros[2])

// Array Methods
console.log('lenght of myHeros array: ', myHeros.length)

// push() - add element at the end of the array 
myHeros.push('black panther')
myHeros.push('black widow')
console.log(myHeros)

// pop() - remove element from the end of the array
myHeros.pop()
console.log(myHeros)

// unshift() - add element at the beginning of the array
myHeros.unshift('loki')
console.log('unshift: ',myHeros)

// shift() - remove element from the beginning of the array
myHeros.shift()
console.log('shift: ',myHeros)


// includes - check if element is present in the array
console.log(myHeros.includes('ironman'))

// indexOf() - find the index of the element in the array
console.log(myHeros.indexOf('thor'))

// join - join the elements of the array into a string

let newArr = myHeros.join();
// console.log(myHeros)
// console.log(newArr)

// slice - slice the array from the given index
let slicedArr = myHeros.slice(1,3)
console.log(slicedArr)
console.log('A ',myHeros)

// splice - remove elements from the array
let removedArr = myHeros.splice(1,3)
console.log(removedArr)
console.log('B ',myHeros)