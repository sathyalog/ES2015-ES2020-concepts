const incomes = [65000, 85000, 120000];

let total;
//ES5 forEach
incomes.forEach(function (value) {
    console.log(value);
});


// Scenario1 - ES6 Default usage with arrays
for(income of incomes) {
    console.log(income);
    total += income;
}

console.log(total);

// Scenario2 - You can use for of loop to read a string as well
const sentence = "Hey, Welcome to Incredible India!!"

for(char of sentence) {
    console.log(char);
}

//Scenario3 - Iterate over a map
const iterable = new Map([['a', 1], ['b', 2], ['c', 3]]);

for (const entry of iterable) {
  console.log('map',entry);
}

for (const [key, value] of iterable) {
    console.log('map',value);
}

//Iterating over a set
const iterableSets = new Set([1, 1, 2, 2, 3, 3]);

for (const value of iterableSets) {
  console.log('sets',value);
}