"use strict";
// Array's In TS 
//In TS, an array is a data type that can store multipule vlause of diffrent data types sequentially.
// Basic Array Declaration
// You can declare an array using the type[] syntax or the generic Array<type> syntax.
const numbers = [1, 2, 3, 4, 5, 6];
// b) Declare Using A=the Array constructor:
const numbers1 = new Array(1, 2, 3, 4, 5, 6);
//c) Declare Using the Array.of method:
const names = Array.of("musfira", "mustabshirah", "maryam");
//Opration: Accessing elements using index:
console.log(names[1]);
//Output:
//mustabshirah
//Opration: Finding lenght:
console.log(names.length);
//Array In Bluit Methods:
// push ()
//Adds one or more elements to the end of an array and returns the new length of the array.
let fruits = ["apple", "banana"];
// a) Adding elements to an array using push:
const newUpdatedfruits = fruits.push("Dragan Fruit");
console.log(newUpdatedfruits);
console.log(fruits);
// b) Removing any element using Pop()
const lastData = fruits.pop();
console.log(lastData);
//Array Itrations in TS using loop
//Using For loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// Using for....of loop
for (const fruit of fruits) {
    console.log(fruit);
}
//Map & Filter Methods in array using TS
const numbers2 = [1, 2, 3, 4, 5, 6];
//1: Doubling each number:
const doubleData = numbers.map((curVal) => curVal * 2);
console.log(doubleData);
//2: Converting numbers to strings
const number = [1, 2, 3, 4, 5]; // Example array of numbers
const numberToString = numbers.map(curElm => curElm.toString());
console.log(numberToString);
//Filter Method
//Filitiring even numbers
const evenNumbers = numbers.filter((curElm) => curElm % 2 == 0);
console.log(evenNumbers);
// Filtring numbers greater than 3
const numbersGreaterThanThree = numbers.filter((curElem) => curElem > 3);
console.log(numbersGreaterThanThree);
