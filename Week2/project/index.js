/**
  In this week 's project you'll be making a Pomodoro Clock!
  A user can specify how many minutes the timer should be set, and with a click on the play button it starts counting down!If the user wants to pause the timer, they can do so by clicking the pause button.

  If the timer is running, the user can 't change the session length anymore
  Use at least 3 functions
  Display minutes and seconds
  If the timer finishes the timer should be replaced by the message: Time 's up!
 * 
 */
const decreaseTime = document.querySelector('#decrease-time');
const increaseTime = document.querySelector('#increase-time');
// let number = document.querySelectorAll('.number-to-manipulate');
let sessionLength = document.getElementById('session-length');
let timer = document.getElementById('timer');
num = parseInt(sessionLength.innerHTML);
let numberWithTwoDots = timer.innerHTML
let numbBeforeDecimal = timer.innerHTML.toString().split(':')[0];
let numbAfterDecimal = timer.innerHTML.toString().split(':')[1];
let pause = false;
let play = true;
//counts down the session value 
decreaseTime.addEventListener('click', function () {
  if (num > 0) {
    num--;
    sessionLength.innerHTML = ('0' + num).slice(-2);
    timer.innerHTML = ('0' + num).slice(-2) + (':00');
    numbBeforeDecimal = num;
    numbAfterDecimal = '00';
    if (num === 0) {
      timer.innerHTML = "TIME'S UP";
    }
  } else {
    sessionLength.innerHTML = ('0' + num).slice(-2);
    timer.innerHTML = "TIME'S UP";
    play = false;
  }
});
//counts up the session value
increaseTime.addEventListener('click', function () {
  num = num + 1;
  sessionLength.innerHTML = ('0' + num).slice(-2);
  timer.innerHTML = ('0' + num).slice(-2) + (':00');
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
  startTimer = setInterval(timerStarter, 1000);
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
    startTimer = setInterval(timerStarter, 1000);
  }
});

//timer counts down the second from 60 to 00 
// counts down the value of minutes when the second reaches 00 
let initial = 60;
function timerStarter() {
  if (play) {
    console.log(numbBeforeDecimal);
    if (numbAfterDecimal === '00') {
      initial = 60;
      numbBeforeDecimal = numbBeforeDecimal - 1;
      if (numbBeforeDecimal === '00') {
        clearInterval(startTimer);
        timer.innerHTML = "TIME'S UP";
      }
    }
    numbAfterDecimal = initial - 1;
    numbBeforeDecimal = ('0' + numbBeforeDecimal).slice(-2);
    numbAfterDecimal = ('0' + numbAfterDecimal).slice(-2);
    initial--;
    timer.innerHTML = numbBeforeDecimal + ':' + numbAfterDecimal;
  }
  increaseTime.disabled = true;
  decreaseTime.disabled = true;
}
// it resets the timer to the initial session value
function reset() {
  clearInterval(startTimer);
  numbAfterDecimal = '00';
  numbBeforeDecimal = num;
  timer.innerHTML = num + ':' + numbAfterDecimal;
  increaseTime.disabled = false;
  decreaseTime.disabled = false;
}
