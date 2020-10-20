/* Exercise 2: The lottery machine **/

// WRITE YOUR FUNCTION HERE
// function accepts an array 
function removeDuplicates(array) {
  array = array.filter(function (value, index, array) {
    return array.indexOf(value) == index; // returns only unique elements 
  });
  console.log(array)
}

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

removeDuplicates(letters);
