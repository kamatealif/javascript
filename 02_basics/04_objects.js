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

console.log(regularUser.fullname.userfullname.firstname);