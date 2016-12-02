//Named function

function addition(x: number, y: number): number {
    return x + y;
}

console.log(addition(10, 11));

//anonymous function
const anon = function (a: number, b: number): number {
    return a + b;
}

console.log(anon(10, 11));


//arrow function

let add = (x: number, y: number): number => {
    return x + y
}
console.log(add(10, 11));


let add5 = (x: number, y = 5): number => {
    return x + y
}
console.log(add5(10)); //15


//optional parameter

let addOptional = (x: number, y?: number): number => {
    return x + y
}
console.log(addOptional(10)) //NaN


//rest paramters

let addNumbers = (first: number, ...numbers: number[]): number => {


    return first + numbers.reduce((acc, curVal) => {
        return acc + curVal;
    },10)
}

console.log(addNumbers(10, 1, 2, 3, 4, 5, 6, 7, 8, 9))

import * as cls from 'classes';