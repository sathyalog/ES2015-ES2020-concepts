var dog = 'Ralf';

if (true) {
    var dog = 'Skip';
}

console.log(dog); // Skip

let dogName = 'Ralf';

if (true) {
    let dogName = 'Skip';
}

console.log(dogName); // Ralf

// const deals differently with arrays and objects. You can add values to array or object but you cannot reassign
const someArr = [3, 4, 5];

someArr.push(6); // [3,4,5,6]

console.log(someArr);

someArr = [5]; // Error: "someArr" is read-only

const someObj = {};

someObj.name = 'Sathya'; //name property with Sathya value adds into object

console.log(someObj);

someObj = {
    'test': 'test'
}

console.log(someObj);// Error: "someObj" is read-only