## ES2015 to ES2020 Useful Concepts and its features

#### How to run?

1. `npm install`
2. `parcel index.html` or `npm run dev` 
3.  Hit https://localhost:1234

___

### List of Concepts

1. Template Literals
2. Objects Destructuring
3. Arrays Destructuring
4. Object Literal
5. For of Loop
6. For in Loop(not ES6)
7. Spread Operator(ES8)
8. Rest Parameter/ Rest Operator(ES8)
9. Arrow Functions
10. Default Params
11. Includes
12. Let & Const
13. Import & Export
14. padStart & padEnd(ES7)
15. Classes
16. Async & Await(ES8)
17. Sets
18. Private Fields and Methods(ES2020) - https://github.com/tc39/proposal-private-methods
19. Optional Catch(ES2020)
    -Not using the exception? No need to bind it now! See 'No Params' in catch
    `try {
  return JSON.parse(await readFile(optionalConfigFilePath))
} catch {
  return {}
}`
20. Decorators(ES2020) - Function decorators allow you to enhance existing functions without modification to the original function.
More: https://github.com/tc39/proposal-decorators
21. Numeric Separator - This feature enables developers to make their numeric literals more readable by creating a visual separation between groups of digits.

    **Current behavior:** const AMOUNT = 1234500;

    **ES2020 Proposal:** let amount = 1_234_500; 
    More: https://github.com/tc39/proposal-numeric-separator

Please refer the screenshots to understand how I covered concepts in clear.

For a Glance ->
 ![ES6|Classes](/screenshots/15.classes.png)