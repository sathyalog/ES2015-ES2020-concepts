//Scenario 1 -  Default Values with new age property
const person = {
    name: 'Sathya Vakacharla',
    country: 'India'
};

// Assign default value of 25 to age if undefined
const { name, country, age = 30 } = person;

// Here I am using ES6 template literals
console.log(`I am ${name} from ${country} and I am ${age} years old.`);

//Scenario 2 - Using Different Variable Names

const { name: fullname, country: place, age: years = 25 } = person;

console.log(`I am ${fullname} from ${place} and I am ${years} years old.`);

//Scenario 3 - Nested Object Destructuring
const student = {
    sname: 'Honey',
    age: 12,
    scores: {
        maths: 94,
        english: 89
    }
};

// Assign default value of 80 to science if undefined
const { sname, scores: {maths, science = 80} } = student;

console.log(`${sname} scored ${maths} in Maths and ${science} in Elementary Science.`);