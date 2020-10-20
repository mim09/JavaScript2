/**

** Exercise 3: Guess the output **
Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/
let a = 10;
const x = (function () {
  a = 12;
  return function () {
    alert(a);
  };
})();

x();

The output is 12 because the value of a is changed to 12 in side the function which 
replaces the above value that was declared on the global scope,
  so the return function returns 12 since that is the nearest scope. 