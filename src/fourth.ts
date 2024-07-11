// BigInt

// const maxNumber = Number.MAX_SAFE_INTEGER;
// console.log(maxNumber);

// let bigNumber: bigint = 1234567890123456789012345678901234567890n;
// let anotherBigNumber: bigint = BigInt("1234567890123456789012345678901234567890");

let bigNumber: bigint = 1234567890123456789012345678901234567890n;
let anotherBigNumber: bigint = BigInt("1234567890123456789012345678901234567890");

// let big1: bigint = 100000000000000000000n;
// let big2: bigint = 100000000000000000000n;

// let sum: bigint = big1 + big2; // Addition
// let diff: bigint = big2 - big1; // Subtraction
// let product: bigint = big1 * big2; // Multiplication
// let quotient: bigint = big2 / big1; // Division

// let num: number = 100;
// let bigNum: bigint = BigInt(num);

let aanotherBigNumber = BigInt("90071992547409925")
console.log(aanotherBigNumber);

let big1: bigint = 9007199383n;
console.log(big1);


function isDivisibleBu4And8() {
const isDivisibleBy4and8 = (x:number):boolean=>{
    // return x % 4 === 0 && x & == 0;
    return x % 4 === 0 && x % 8 === 0;
}
}
console.log(isDivisibleBu4And8);
