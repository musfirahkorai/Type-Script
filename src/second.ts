let num:number = 10;
let pakistan:string = "musfira" 

let myFavNum = "musfira";

console.log(myFavNum.toString);

var age: number = 32; 
var aj: string = "John";
var isUpdated: boolean = true;

console.log(aj);
console.log(isUpdated);
console.log(age);

let myAge:number = 12;
let pi:number = 2.127;

// let invalidResult:number = myAge + " years ";
// let invalidValue: number = "!23"
let computedValue: number = Math.sqrt(12)

let myFullName = "Musifra Murtaza"
let myfirstName = "Musfira"
let myLatName   =  "Mustaza"

myFullName = myfirstName + myLatName
console.log(myFullName);
// let message:string = "Hello, TypeScript"

let sentence:string = "I'm learning"
let sentenceLenght:number = sentence.length;
console.log(sentenceLenght);


// todo   Substring: 
// Declare a variable longText of type string and assign it a long sentence. 
//Extract the first 10 characters from longText and store them in a variable called shortText.

let longText:string = "TypeScript, a powerful statically typed superset of JavaScript developed and maintained by Microsoft, offers developers enhanced tooling and improved code quality through features such as static type checking, which helps catch errors early in the development process, interfaces for enforcing contract-based design, classes and inheritance for better object-oriented programming practices, as well as advanced IDE support including autocompletion and refactoring capabilities, making it an increasingly popular choice for large-scale applications and teams seeking to maintain robust, scalable, and maintainable codebases."


let shortText: string = longText.substring(0, 10);

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

function areStringsEqual(str1: string, str2:string): boolean {
    return str1 === str2
}

let str1: string = "TypeScript, a powerful statically typed";
let str2: string = " superset of JavaScript";

console.log(areStringsEqual(str1, str2)); 
console.log(areStringsEqual(str1, str1)); 

//  todo   String Template: 
// Declare variables product and price of type string and number, respectively. 
//Create a string using template literals to display the product and its price in the format 
//"The product {product} is priced at {price} dollars.

// let product:string = "Pen"
// let price:number = "{7$}"


let product: string = "Pen";
let price: number = 7;

let message: string = `The product ${product} is priced at ${price} dollars.`;

console.log(message);

// TypeScript (TS) type annotations are a 
//powerful feature that allows developers to specify the types of variables, function parameters, and return values. This helps in catching errors during development and provides better documentation and tooling support. Here are some common type annotations in TypeScript

// Boolean
let isDone: boolean = false;

// Number

let decimal: number = 6;

// String

let color: string = "blue";

//Array

// let list: number[] = [1, 2, 3];

// let list: Array<number> = [1, 2, 3];

//Tuple

let x: [string, number];
x = ["hello", 10]

// Enum

enum Color {Red, Green, Blue}
let c: Color = Color.Green;

//Any

let notSure: any = 4;
notSure = "maybe a string instead";

//Void

function warnUser(): void {
    console.log("This is a warning message");
    
}

// Null and Undefined

let u: undefined = undefined;
let n: null = null;

//  Function Type Annotations

// Parameter and Return Types

function add(x:number, y:number): number {
    return x + y;
}

// Anonymous Function

let myAdd1 = function(x: number, y: number): number { return x + y; };

// Arrow Function

let myAdd = (x: number, y: number): number => x + y;
