/**
** Exercise 4: Guess more **
Look at the bellow code snippet.Can you guess the output? 
Write out your reasoning in 50 words or less.
*/
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);

The output of f1(x) will be 10 because x is passed as an argument
and the value increases by 1 and it returns the new value which is 10.
The output of console.log(x) will be 9

const y = {
  x: 9
};

function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);

The out put of f2(y) will be { x: 10 } since x is the property of y
1 is added on the value of x and it returns oject y with a new value x.
The output of console.log(y) will be { x: 10 } since ye is an object and
the value of the property x is already changed on the above function.
