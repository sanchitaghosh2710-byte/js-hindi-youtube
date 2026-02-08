/*
let score = 33
console.log(typeof score)
console.log(typeof (score))
*/

/*
let scores = "33abc"
console.log(typeof scores)


let valueInNumber = Number(scores) // value to number
console.log(typeof valueInNumber)
console.log(valueInNumber)

let scores = null
let valueInNumber = Number(scores) // value to number
console.log(typeof valueInNumber) // number
console.log(valueInNumber)  // 0


let scores = undefined
let valueInNumber = Number(scores) // value to number
console.log(typeof valueInNumber)
console.log(valueInNumber)  // NaN


let scores = true
let valueInNumber = Number(scores) // value to number
console.log(typeof valueInNumber)
console.log(valueInNumber)   /// 1



let scores= "hitesh"
let valueInNumber = Number(scores) // value to number
console.log(typeof valueInNumber)
console.log(valueInNumber)  //NaN



// "33" => 33
// "33abc" => NaN
// "hitesh" => NaN
// "true" =>1 , false => 0

let loggedIn = 1
let loggedInIsboolean = Boolean(loggedIn)
console.log(loggedInIsboolean)


let someNumber=33
let stringNumber= String(someNumber)
console.log(typeof stringNumber)
console.log(stringNumber)

*/


//******************************** Operations(String to Number) // ******************************


/*
let value = 3
let negValue = -value
console.log(negValue)  // => -3
*/

/*
let str1 = "hello"
let str2 = "world"
let str3 = str1 + str2
console.log(str3)    // helloworld
*/

/*
console.log("1" + 2)   // => 12
console.log(1 + "2")   // =>12
console.log("1" + 2 + 2)  // => 122
console.log(1 + 2 + "2")  // =>32



console.log(true)  // => true
console.log(+true)  // => 1
// console.log(true+)  => error

console.log(+" ")   // => 0

let gameCounter=100
gameCounter++;
console.log(gameCounter)   // => 101
*/


// *************** Comparison of Datatypes ********************** //


/*
console.log(2 > 1)
console.log(2 >= 1)
console.log(2 < 1)
console.log(2 == 1)
console.log(2 != 1)

*/
/*
console.log("2" > 1)  // => true
console.log("02" > 1)  // => true

console.log(null > 0)  // => false
console.log(null == 0)   // => false
console.log(null >= 0)   // => true
*/
// same for undefined 
console.log("2" === 2)   // checks the datatype first before conversion