/**
 
 ** Exercise 1: Add Six **
 
Declare a function called `createBase`.The function takes a number as a parameter and
return a closure, that adds a number to the base number argument.

Call the function three times. The return values should be:
 15, 24, 33

 */
function createBase(num) {
  // create a function that adds the above argument num to number 6
  const addnum = () => {
    return num + 6; //returns the sum of num and number 6
  }
  return addnum();
}
const addSix = createBase(6);

// calling createBase function
createBase(9);
createBase(18);
createBase(27)