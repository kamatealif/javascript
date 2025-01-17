let name = "John";
let repoCount = 10;

// this is not a good way to concatenate strings
console.log(name +" " +  repoCount + " " + "Repo") 

// this is a better way to concatenate strings
console.log(`Hello my name is ${name.toUpperCase()} and I have ${repoCount} Repo`)


let gameName = new String("justt-alif")
console.log(gameName) // this will print the string object

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(`lenght ${gameName.length}`)

console.log(`to upper case ${gameName.toUpperCase()}`)

console.log("2 char at: ", gameName.charAt(2))

console.log(`index of: ${gameName.indexOf("B")}`);

let newString = gameName.substring(0, 5);
console.log('new sliced string: ' ,newString)

let anotherString = gameName.slice(-10,-5)
console.log('another sliced string: ', anotherString)

let splitString = gameName.split('-')
console.log('split string: ', splitString)

let removeTrillingSpace = "    hello world    "
console.log(`remove trailing spaces:`, removeTrillingSpace.trim())

let url = 'https://www.google.com%20john%20doe'
console.log(`decode URI: ${decodeURI(url)}`)
console.log('replace %20 with space: ', url.replace('%20', '-'))

console.log('includes: ', gameName.includes('justt'))

let rawString = "Create a string with a template literal"

console.log('split: ', rawString.split(' '))
