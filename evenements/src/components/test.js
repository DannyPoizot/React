class Parent {
    constructor(name) {
        console.log("Appel du constructeur parent", name);
        this.name = name;
        this.boisson = "Bière";
    }
}

class Enfant extends Parent {
    constructor(nameEnfant) {
        super(nameEnfant);
        this.age = 0;
    }
}


let danny = new Enfant("Danny");
let qqchose = danny.age;
let audrey = new Enfant("Audrey");
let qqchose2 = audrey.age;

// let mom = new Parent("Maman");
// console.log(danny.name);
// console.log(danny.age);
// console.log(mom.age);
// console.log(danny.boisson);
