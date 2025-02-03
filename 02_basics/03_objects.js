// singleton objects
// Object.create

// object literals
const mySym = Symbol("Key1")


const JsUser = {
    name: 'rajesh',
   age : 20,
    // mySym: "myKey1", // we cannot do like this
    [mySym] : "myKey1", // this is right syntax
    email :" rajesh@tesla.com",
    location : "india",
    isLoggedIn : false,
    lastLoginDays : ["monday","tuesday"]
    }

    console.log(JsUser.name)

    // we can also access the values as an a python dictionary
    console.log(JsUser["name"])

    console.log( typeof JsUser[mySym])
    console.log(JsUser[mySym])

    // creating object with the funciton
    JsUser.greeting = function () {
        console.log(" greetings from () hello world");
    }
    JsUser.greeting()

    JsUser.greetingTwo = function (){
    console.log(`Hello js User, ${this.name}`)
}
    JsUser.greetingTwo()
    // we can also freeze the object
    Object.freeze(JsUser)
    JsUser.email = "rajesh@openai.com"
    console.log(JsUser)