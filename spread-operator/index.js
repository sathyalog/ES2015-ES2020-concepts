//copying an array, Spreading elements together with an individual element
const example1 = [1,2,3,4,5,6];

let example2 = [...example1,7,8,9];

example2.push(10);

console.log('example1', example1);

console.log('example2', example2);

//spreading for object literals
const object1 = {
    name: 'Sathya',
    age: 32,
    professsion: 'engineer'
}

let object2 = {
    ...object1,
    city:'Bengaluru'
}

console.log('object1', object1);
console.log('object2', object2);
//Spreading elements on function calls

let fruits = ['Apple','Orange','Banana'];

var getFruits = (f1, f2, f3) => {
    console.log(`Fruits: ${f1}, ${f2} and ${f3}`) 
};

getFruits(...fruits); // Fruits: Apple, Orange and Banana
//concatenating arrays
let arr1 = ['A', 'B', 'C'];

let arr2 = ['X', 'Y', 'Z'];

let result = [...arr1, ...arr2];

console.log(result); // ['A', 'B', 'C', 'X', 'Y', 'Z']

