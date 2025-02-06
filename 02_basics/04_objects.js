// singleton object
// const tinderUser = new Object()

const tinderUser  = {}
tinderUser.id = "aa1256"
tinderUser.name = "rajesh"
tinderUser.isLoggedIn = false
tinderUser.email = "rajesh@tesla.com"

// console.log(tinderUser);

let regularUser = {
    email : "rajesh@tesla.com",
    fullname:{
        userfullname:{
            firstname:'rajesh',
            lastname:'riyal'
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

let obj1 = {1 : "a", 2 : "b"}
let obj2 = {3 : "c", 4 : "d"}

// let returnedObject = {obj1,obj2}

// let returnedObject = Object.assign({}, obj1, obj2)

// most of the time your using this 
let returnedObject = {...obj1, ...obj2}
// console.log(returnedObject)

let user =[
    {
        id: 1,
        name: "john"
    },
    {
        id :2 ,
        name : "jane"
    },
    {
        id:3,
        name : "Sarah"
    }
]

console.log(user[1].name)

console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedIn'))