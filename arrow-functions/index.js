// No parameters
var func = () => {
    // Do stuff
};
// With parameters
let myFunc = (a, b) => {
    return a * b;
};

// Only 1 param, no need for parens
var myFunc1 = a => {
    return a * a;
};

//another way of declaration for above scenario
let myFunc2 = a => a * a;

//object literal
let myFunc3 = (first, last) =>
({ firstName: first, lastName: last });

//iterate array using arrow function
let materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];
console.log(materials.map(material => material.length));

let multiply = myFunc2(5);
console.log(multiply);

let displayName = myFunc3('sathya','vakacharla');
console.log(displayName);
  
