//Scenario 1 - Basic Destructuring
const countries = ['India', 'UK', 'USA', 'Australia'];

let [homeCountry,hostCountry] = countries;

console.log(`I am working in ${hostCountry} and my home country is ${homeCountry}`);

// Scenario2 - Declaring Variables before Assingment
let greeting, name, wish, intro, pronoun;
    [greeting, name] = ["Hello", "Sathya" , "Iam", "Alexa"];

console.log(greeting, name);//"Hello Sathya"

//Scenario3 - Skipping Items in an Array
[greeting,,,wish] = ["Hello", "I am" , "Alexa", "How are you Friend?"];

console.log(greeting, wish);//"Hello How are you Friend?"

//Scenario4 - Assigning the rest of an array
[greeting,...intro] = ["Hello", "I am" , "Alexa", "How are you Friend?"];

console.log(greeting, intro); // "Hello" Array(3) ["I am" , "Alexa", "How are you Friend?"]

//Scenario5 - Destructuring Assignment with Functions
function getArray() {
    return ["Hello", "I" , "am", "Sathya"];
} 
[greeting,pronoun] = getArray();

    console.log(greeting);//"Hello"
    console.log(pronoun);//"I"
