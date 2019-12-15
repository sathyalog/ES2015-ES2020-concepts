// Last parameter i.e., otherNames is rest parameter here.
function myFunc(name1,name2,...otherNames) {
    console.log("name1", name1); 
    console.log("name2", name2);
    console.log("otherNames", otherNames); 
}
myFunc('Sathya', 'Vihaan', 'Chandra', 'Honey', 'Sweety');

//array used as rest parameter
function myFunc2(...restNames) {
    console.log('restNames',restNames);
}
  
let names = ['Sathya', 'Vihaan', 'Chandra'];
myFunc2(names);

//Another way of using rest parameter
function sum(...theArgs) {
    return theArgs.reduce((previous, current) => {
      return previous + current;
    });
}
console.log(sum(1, 2, 3));// output: 6
  
console.log(sum(1, 2, 3, 4));// output: 10
