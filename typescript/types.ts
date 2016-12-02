namespace Types {
    let bool: boolean = false;

    let num: number = 100;
    let hex: number = 0xc00d;

    let name: string = 'Naresh Maharjan'
    let address: string = 'Balaju'
    let workPlace = `Leapfrog Technology inc.`;

    let details = `My name is ${name}, I live in ${address} and I work at ${workPlace}`;


    //array
    let arr = [1, 2, 3, 4, 5, 6, 7, 8]

    //tuple
    let tup: [string, number, boolean]
    tup = ['a', 1, false]

}

const usingVar = () => {
    var a = 100;
    if (true) {
        var a = 200
    }
    return a;
}

console.log(usingVar())

const usingLet = () => {
    let a = 100;
    if (true) {
        let a = 200;
    }
    return a;
}
console.log(usingLet())



//destructing

let nums = [1,2,3,4,5,6]
let [a, b, c] = nums