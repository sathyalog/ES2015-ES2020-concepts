//ES5
function getLaptop(make, model, year) {
    return {
        make: make,
        model: model,
        year: year
    }
}

console.log(getLaptop("Apple", "MacBook", "2015"));// {make: "Apple", model: "MacBook", year: "2015"}

// ES6 Object Literal
// Object literals gives us the ability to if the keys are same as values variables, then we need to set those keys here like we did above in ES5
function getLaptop(make, model, year) {
    return {
        make,
        model,
        year
    }
}

console.log(getLaptop("Apple", "MacBook", "2015"));// {make: "Apple", model: "MacBook", year: "2015"}