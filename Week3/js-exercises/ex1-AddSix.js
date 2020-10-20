/** 
 ** Exercise 1: Add Six **
 
Declare a function called `createBase`.The function takes a number as a parameter and
return a closure, that adds a number to the base number argument.

Call the function three times. The return values should be:
 15, 24, 33
 */
let initial = 0;
// function that increments the adding value initial
function addInitial() {
  return initial = initial + 9;
}

function createBase(num) {
  // create a function that adds the above argument num to number 6
  return function () {
    return num + addInitial(); //returns the sum of num and the return value of addInitial function
  };
}

const addSix = createBase(6);
console.log(addSix());
console.log(addSix());
console.log(addSix());