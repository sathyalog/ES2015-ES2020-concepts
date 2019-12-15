let oldCar = {
    make: 'Toyota',
    model: 'Tercel',
    year: '1996'
};

for (let key in oldCar) {
    console.log(`${key} --> ${oldCar[key]}`);
}

//Example 2
const object = {a: 1, b: 2, c: 3};

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}