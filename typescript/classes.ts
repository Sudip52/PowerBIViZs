export class FirstClass {

    static message = "This is first try";

    constructor(public greeting: string, public message: string) {}

    public greet(): string {
        return this.greeting + " " + this.message;
    }

    greetAgain = (): string => {
        return this.greeting + " " + this.message;
    }

    greetOnceAgain = (): string => this.greeting + " " + this.message;
}



console.log(FirstClass.message)

let firstClass = new FirstClass("Hello", "World");
const firstGreet = firstClass.greet();
const secondGreet = firstClass.greetAgain();
const thirdGreet = firstClass.greetOnceAgain();
console.log(firstGreet, secondGreet, thirdGreet);


/**
 * inheritance demo
 */

class GrandFather {
    constructor(public name: string) {
    }

    public getName(): string {
        return `My name is ${this.name}`;
    }
}

class Father extends GrandFather {
    constructor(public name: string, public mobileNumber: number) {
        super(name);
    }

    public getMobileNumber(): number {
        return this.mobileNumber;
    }
}

class Son extends Father {
    constructor(public name: string, public mobileNumber: number, public twitterHandle: string) {
        super(name, mobileNumber);
    }

    public getTwitterHandle(){
        return this.twitterHandle;
    }
}





let grandFather = new GrandFather("RamNath Thapa");

let father = new Father("Shyam Thapa", 123456789);

let son = new Son("Hari Thapa", 256256256, "Hary");

console.log(
    grandFather.getName(),
    father.getName(),
    son.getName(),
    father.getMobileNumber(),
    son.getMobileNumber(),
    son.getTwitterHandle()
);

/**
 * abastract class
 */

abstract class Employee{
    constructor(public name: string) {}
    abstract getDesgination(): string;
    getName():string{return "My name is "+ this.name;}
}

interface java{
    tools();
}

class Sudip implements java{
    tools() {

    }

}
class Naresh extends Employee{
    getDesgination(): string {
        return "My designation is Sr. Software Engineer.";
    }

}

//typehint the assignment variable

let naresh: Naresh = new Naresh(`Naresh Maharjan`);
console.log(naresh.getName(),naresh.getDesgination());



interface sample{
    x: number;
    y: number;
}