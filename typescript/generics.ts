interface Inheritance {
    getName(): string;
}


namespace Generics {
    export class GrandFather implements Inheritance {
        constructor(public name: string) {
        }

        public getName(): string {
            return this.name;
        }
    }

    export class Father extends GrandFather{
        constructor(public name: string, public mobileNumber: number) {
            super(name);
        }

    }

    export class Son extends Father{
        constructor(public name: string, public mobileNumber: number, public twitterHandle: string) {
            super(name, mobileNumber);
        }
    }

}


function getNameDetail<T extends Inheritance>(obj: T) {
    return "My name is " + obj.getName();
}


let obj = {
    getName: function () {
        return "Naresh Maharjan"
    }
};


let gFather = new Generics.GrandFather("RamNath Thapa");
let f = new Generics.Father("Shyam Thapa", 123456789);
let s = new Generics.Son("Hari Thapa", 256256256, "Hary");

console.log(getNameDetail<Inheritance>(gFather))
console.log(getNameDetail<Inheritance>(f))
console.log(getNameDetail<Inheritance>(s))
console.log(getNameDetail<Inheritance>(obj))










interface customType{
    a :string;
}




function identity<T extends customType>(arg: T): string {
    return arg.a;
}

let data: customType;
data = {a:"1"};
let num = identity<customType>(data)