"use strict";
let num = 10;
let pakistan = "musfira";
let myFavNum = "musfira";
console.log(myFavNum.toString);
var age = 32;
var aj = "John";
var isUpdated = true;
console.log(aj);
console.log(isUpdated);
console.log(age);
let myAge = 12;
let pi = 2.127;
// let invalidResult:number = myAge + " years ";
// let invalidValue: number = "!23"
let computedValue = Math.sqrt(12);
let myFullName = "Musifra Murtaza";
let myfirstName = "Musfira";
let myLatName = "Mustaza";
myFullName = myfirstName + myLatName;
console.log(myFullName);
// let message:string = "Hello, TypeScript"
let sentence = "I'm learning";
let sentenceLenght = sentence.length;
console.log(sentenceLenght);
// todo   Substring: 
// Declare a variable longText of type string and assign it a long sentence. 
//Extract the first 10 characters from longText and store them in a variable called shortText.
let longText = "TypeScript, a powerful statically typed superset of JavaScript developed and maintained by Microsoft, offers developers enhanced tooling and improved code quality through features such as static type checking, which helps catch errors early in the development process, interfaces for enforcing contract-based design, classes and inheritance for better object-oriented programming practices, as well as advanced IDE support including autocompletion and refactoring capabilities, making it an increasingly popular choice for large-scale applications and teams seeking to maintain robust, scalable, and maintainable codebases.";
let shortText = longText.substring(0, 10);
console.log(longText);
console.log(shortText);
//  todo   String Comparison: 
// Declare two variables str1 and str2 of type string and assign them different sentences. 
//Compare the two strings and store the result (true or false) in a variable called areEqual.
// let str1:string = "TypeScript, a powerful statically typed"
// let str2:string = " superset of JavaScript"
// console.log(areStringsEqual(string1, string2)); // Output: true
// console.log(areStringsEqual(string1,)); // Output: false
// function areStringsEqual(str1: string, str2: string): boolean {
//     return str1 === str2;
// }
// let str1: string = "TypeScript, a powerful statically typed";
// let str2: string = " superset of JavaScript";
// console.log(areStringsEqual(str1, str2)); 
// console.log(areStringsEqual(str1, str1)); 
function areStringsEqual(str1, str2) {
    return str1 === str2;
}
let str1 = "TypeScript, a powerful statically typed";
let str2 = " superset of JavaScript";
console.log(areStringsEqual(str1, str2));
console.log(areStringsEqual(str1, str1));
//  todo   String Template: 
// Declare variables product and price of type string and number, respectively. 
//Create a string using template literals to display the product and its price in the format 
//"The product {product} is priced at {price} dollars.
// let product:string = "Pen"
// let price:number = "{7$}"
let product = "Pen";
let price = 7;
let message = `The product ${product} is priced at ${price} dollars.`;
console.log(message);
// TypeScript (TS) type annotations are a 
//powerful feature that allows developers to specify the types of variables, function parameters, and return values. This helps in catching errors during development and provides better documentation and tooling support. Here are some common type annotations in TypeScript
// Boolean
let isDone = false;
// Number
let decimal = 6;
// String
let color = "blue";
//Array
// let list: number[] = [1, 2, 3];
// let list: Array<number> = [1, 2, 3];
//Tuple
let x;
x = ["hello", 10];
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
//Any
let notSure = 4;
notSure = "maybe a string instead";
//Void
function warnUser() {
    console.log("This is a warning message");
}
// Null and Undefined
let u = undefined;
let n = null;
//  Function Type Annotations
// Parameter and Return Types
function add(x, y) {
    return x + y;
}
// Anonymous Function
let myAdd1 = function (x, y) { return x + y; };
// Arrow Function
let myAdd = (x, y) => x + y;
