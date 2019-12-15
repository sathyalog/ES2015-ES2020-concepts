add = (x, y = 3) => {
    console.log(x + y);
}
    
add(3, 9); // 12
add(3) // 6
add(12, undefined) // 15
add(undefined, 8); // NaN, x doesn't have a default value

//with default parameter
function addToGuestList(guests, list = []) {
    console.log([...guests, ...list]);
}
  
addToGuestList(['Bob', 'Andy']); // ['Bob', 'Andy']
addToGuestList(['Bob', 'Andy'], ['Roger']); // ['Bob', 'Andy', Roger]

//without default parameter
function addToGuestListWithoutDefault(guests, list) {
    console.log([...guests, list]); // Please notice we removed spread operator for list. Else it will throw error as non-iterable instance
}
  
addToGuestListWithoutDefault(['Bob', 'Andy']); // ['Bob', 'Andy', undefined]
addToGuestListWithoutDefault(['Bob', 'Andy'], ['Roger']); // ['Bob', 'Andy', Roger]

//below example will throw error if you do not pass default params. Replace numArray=[] with numArray to see error. Hence using defaultParams is a best practise.
addTotal = (numArray = []) => {
    let total = 0;
    for(element of numArray) {
        total += element;
    }
    console.log(total);
}

addTotal();
  
  