import { Animal, Cat } from './animal.js';

let cat = new Animal('Cat', 4);
console.log(cat.legs); // 4
cat.legs = 3;
cat.makeNoise(); // Loud Noise
cat.makeNoise('Meow'); // Meow
console.log(cat.legs); // 3

let catNew = new Cat('cat', 4);

catNew.makeNoise(); // Meow Meow
console.log(Animal.return10()); // 10

// Another Example
export class Person {
    constructor(name) {
        this.name = name;
    }
    get fname() {
        return this.name.toUpperCase();
    }
    walk() {
        console.log(this.name + ' is walking.');
    }
    static test() {
        console.log('Using static will be even called without instantiaion of a class')
    }
}
            
Person.test(); // Person instantiation not done yet
let employee = new Person('Sathya');
console.log(employee.name);  // Outputs 'Sathya'
employee.walk();// Outputs 'Sathya is walking.'
console.log(employee.fname);// SATHYA
