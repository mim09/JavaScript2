// Exercise 5: The cat walk
const cat = document.querySelector('img');
cat.style.left = '0px';
let catPos = 0; //declare a variable for cat position and initiate it to 0.
let pause = false; // declare a bolean pauze and initialize it to false
// declare a function for the second cat
function cat2() {
  pause = false;
  cat.setAttribute('class', 'cat2'); // add class cat2 which has new source to the cat
  setTimeout(() => {
    // does the following after 5 seconds
    cat.removeAttribute('class', 'cats'); // removes the new src added above
    catWalk(); // calls the original dancing cat function
  }, 5000);
}
// function to calculate half  of the screen width
function screenHalfCalc() {
  const newScreenValue = screen.width / 10; // divide the screen width by 10 because the cat walks 10 pixels each time to the left
  const screenHalf = parseInt(newScreenValue / 2) * 10; // divide the value that we got above and remove the numbers after the decimal point then multiply by 10
  return screenHalf; //returs the value of half of gthe screen
}
function catWalk() {
  pause = true; // changes the bolean to true
  cat.style.left = catPos + 'px'; // adds new position to the moving cat
  let screenValue = screenHalfCalc();
  // if the cat reaches to the center of the screen it calls the cat2 function
  if (screenValue === parseInt(catPos)) {
    cat2();
  }
  if (catPos >= screen.width) {
    catPos = 0; // cat position reset to 0 to the left when the cat reaches at the end of the screen
  }
  catPos = catPos + 10; // adds 10pixels to cats position
}
catWalk();
setInterval(() => {
  // cat walks 10pixel per 50microseconds only when the bolean pause is true
  if (pause == true) {
    catWalk();
  }
}, 50);
