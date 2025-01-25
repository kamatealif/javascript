

let myDate = new Date();
// console.log(myDate) // this is not readable 

console.log(myDate.toString())
console.table([myDate.toISOString(),myDate.toJSON(),myDate.toLocaleString(),myDate.toTimeString()])

// let myCreatedDate = new Date(2025,0,25);
// let myCreatedDate = new Date(2025,0,25,8,48)
// let myCreatedDate = new Date("2025-01-25") // yyyy-mm-dd
let myCreatedDate = new Date("01-25-2025")
console.log(`my created Date: ${myCreatedDate}`)


// timestamp 

let myTimeStamp = Date.now()
console.log(myTimeStamp) // which is in a milisecond so lets convert it into a seconds
console.log(Math.round(myTimeStamp/1000)) // this will convert it into a seconds 

// methods of Date

let anotherDate = new Date();
console.table([anotherDate.getTime(),anotherDate.getHours(),anotherDate.getMinutes(),anotherDate.getSeconds(),anotherDate.getMonth(),anotherDate.getFullYear()])

// customizing the toLocaleString()

console.log(anotherDate.toLocaleString('default',{
    weekday:"short",
    day:"numeric",
    month:"short",
    year:"numeric"
}))