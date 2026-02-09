// ** Depending on how data are stored and accessed from memory , there are two types of  data

// Primitive datatype(7 types)
    // Number -> Number
    // string -> string
    // Boolean -> boolean
    // Null -> object
    // Undefined -> undefined
    // synbol -> symbol
    // bigInt -> bigInt




// Non-Primitive  or Reference
    // Arrays -> object
    // Object -> Object
    // Function -> Function

/*
const score = 100
const scoreValue = 100.3
const outsideTemp = null
let userEmail;
const isLoggedIn = false

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId)


const bigInt= 12345678923456732490813n
console.log(typeof bigInt)
*/

// **************************************************************

/*
 const Arrays=["Shaktiman", "Naagraj", "Doga"]

let myObj={
            myName: "Hitesh",
            age: 22 }

let myFunction= {
                    console.log("Hello World");
                }

*/

///////////////////////////////// Memory ************************************************










// Stack ( Primitive) => Copy of data / original value will be there
//  Heap ( Non-Primitive) => refrence of data / change is done in original value

/*
let myYoutubename="hitesh"
let anothername=myYoutubename
console.log(anothername)

anothername="sanchita"
console.log(myYoutubename)
console.log(anothername)
*/


let userOne={ email: "hitesh@gmail.com",
        age: 22
}
let userTwo = userOne
console.log(userTwo)

userTwo.email="hitesh@google.com";

console.log(userOne.email)
console.log(userTwo.email)

