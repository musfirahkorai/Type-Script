// Boolean Type

// Represents a logical entity and can have two values: true or false.

let isMyNamemusfira:boolean = true;
let isfinished:boolean = true;
let hasStarted:boolean = false;

console.log(isMyNamemusfira);
console.log(isfinished);
console.log(hasStarted);

function isEven(a:number):boolean{
    return a % 2 === 0
}

// func call

console.log(isEven(5));

// TODO : write a typescript function isDivisibleBy4and8 that takes a 
//number as a parameter and returns true if the number is divisible by both 4 and 8.

const isDivisibleBy4and8 = (x:number):boolean=>{
    // return x % 4 === 0 && x & == 0;
    return x % 4 === 0 && x % 8 === 0;
}


console.log(isDivisibleBy4and8);
