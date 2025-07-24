// #1 Create a one line function that adds two parameters
const add = (a, b) => a + b;

// Closure: What does the last line return?
const addTo = x => y => x + y;
const addToTen = addTo(10);
console.log(addToTen(3)); // ➡️ 13

// Currying: What does the last line return?
const sumFn = (a, b) => a + b;
const curriedSum1 = a => b => a + b;
console.log(curriedSum1(30)(1)); // ➡️ 31

// Currying: Reusing with different value
const curriedSum2 = a => b => a + b;
const add5Curried = curriedSum2(5);
console.log(add5Curried(12)); // ➡️ 17

// Composing: What does the last line return?
const compose = (f, g) => a => f(g(a));
const addOne = num => num + 1;
const addFive = num => num + 5;
console.log(compose(addOne, addFive)(10)); // ➡️ 16

// What are the two elements of a pure function?
// 1. No side effects
//    - It does not modify any external state or rely on it.
// 2. Deterministic output
//    - For the same input, it always returns the same output.
