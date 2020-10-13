/**
  In this week 's project you'll be making a Pomodoro Clock!
  A user can specify how many minutes the timer should be set, and with a click on the play button it starts counting down!If the user wants to pause the timer, they can do so by clicking the pause button.

  If the timer is running, the user can 't change the session length anymore
  Use at least 3 functions
  Display minutes and seconds
  If the timer finishes the timer should be replaced by the message: Time 's up!
 * 
 */
const downArrowButton = document.querySelector('#left-arrow');
const upArrowButton = document.querySelector('#right-arrow');
let number = document.querySelectorAll('.number-to-manipulate');
num = parseInt(number[0].innerHTML);
let numberWithTwoDots = number[1].innerHTML
let numbBeforeDecimal = number[1].innerHTML.toString().split(':')[0];
let numbAfterDecimal = number[1].innerHTML.toString().split(':')[1];
let pause = false;
let play = true;
//counts down the session value 
downArrowButton.addEventListener('click', function () {
  if (num > 0) {
    num--;
    number[0].innerHTML = ('0' + num).slice(-2);
    number[1].innerHTML = ('0' + num).slice(-2) + (':00');
    numbBeforeDecimal = num;
    numbAfterDecimal = '00';
    if (num === 0) {
      number[1].innerHTML = "TIME'S UP";
    }
  } else {
    number[0].innerHTML = ('0' + num).slice(-2);
    number[1].innerHTML = "TIME'S UP";
    play = false;
  } 
});
//counts up the session value
upArrowButton.addEventListener('click', function () {
  num = num + 1;
  number[0].innerHTML = ('0' + num).slice(-2);
  number[1].innerHTML = ('0' + num).slice(-2) + (':00');
  numbBeforeDecimal = num;
  numbAfterDecimal = '00';
  play = true;
});
const playButton = document.querySelector('.play');
const stopButton = document.querySelector('.icon.hide-play-stop');
const pauseButton = document.querySelector('.pause');
let startTimer;
//starts the timer
playButton.addEventListener('click', function () {
  playButton.style.display = 'none';
  stopButton.style.display = 'inline';
  startTimer = setInterval(timer, 1000);
});
// stops the couting down
stopButton.addEventListener('click', function () {
  stopButton.style.display = 'none';
  playButton.style.display = 'inline';
  reset();
});
// pauses the counting down
pauseButton.addEventListener('click', function () {
  pause = !pause;
  if (pause) {
    clearInterval(startTimer);
  } else {
    startTimer = setInterval(timer, 1000);
  } 
});

//timer counts down the second from 60 to 00 
// counts down the value of minutes when the second reaches 00 
let initial = 60;
function timer() {
  if (play) {
    console.log(numbBeforeDecimal);
    if (numbAfterDecimal === '00') {
      initial = 60;
      numbBeforeDecimal = numbBeforeDecimal - 1;
      if (numbBeforeDecimal === '00') {
        clearInterval(startTimer);
        number[1].innerHTML.innerHTML = "TIME'S UP";
      }
    }    
    numbAfterDecimal = initial - 1;
    numbBeforeDecimal = ('0' + numbBeforeDecimal).slice(-2);
    numbAfterDecimal = ('0' + numbAfterDecimal).slice(-2);
    initial--;
    number[1].innerHTML = numbBeforeDecimal + ':' + numbAfterDecimal;
  }  
  upArrowButton.disabled = true;
  downArrowButton.disabled = true;
}
// it resets the timer to the initial session value
function reset() {
  clearInterval(startTimer);
  numbAfterDecimal = '00';
  numbBeforeDecimal = num;
  number[1].innerHTML = num + ':' + numbAfterDecimal;
  upArrowButton.disabled = false;
  downArrowButton.disabled = false;
 }
 