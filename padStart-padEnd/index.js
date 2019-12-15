let myName = 'Sathya';

console.log(myName.padStart(15,'a'));

const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

console.log(maskedNumber); // expected output: "************5581"

const str1 = 'Breaded Mushrooms';

console.log(str1.padEnd(25, '.')); // expected output: "Breaded Mushrooms........"