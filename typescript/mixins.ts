interface Skills {
    getSkills(): string[];
}


class DevOps implements Skills {

    getSkills(): string[] {
        return ['server setup', 'internet', 'cloud service management'];
    }

    serverManagement() {
        console.log("I am Dev Ops")
    }
}


class Qa implements Skills {

    getSkills(): string[] {
        return ['regression', 'Automation', 'Testing'];
    }

    qualityAssurance() {
        console.log("I am QA")
    }
}


class Developer implements Skills {

    getSkills(): string[] {
        return ['Coding'];
    }

    coding() {
        console.log("I am Devloper")
    }
}


class FullStackDeveloper implements DevOps, Qa, Developer{
    serverManagement(): any {
        return undefined;
    }
    getSkills(): string[] {
        return undefined;
    }

    qualityAssurance(): any {
        return undefined;
    }

    coding(): any {
        return undefined;
    }

}


applyMixins(FullStackDeveloper, [Developer, DevOps,Qa]);



let fullStackDev = new FullStackDeveloper();
fullStackDev.coding();
fullStackDev.qualityAssurance();
fullStackDev.serverManagement()


function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}