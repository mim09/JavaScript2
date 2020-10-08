// Exercise 4: What's the time?
const time = () => {
  let today = new Date(); // declare today
  // get  hour  minute and seconds in two digits
  let hr = ('0' + today.getHours()).slice(-2);
  let min = ('0' + today.getMinutes()).slice(-2);
  let sec = ('0' + today.getSeconds()).slice(-2);
  let timeNow = hr + ':' + min + ':' + sec; // assign to timeNow what we got above
  const h2 = document.querySelector('h2'); // select h2 from the html
  h2.innerText = timeNow; // display the value we got above through h2
}
window.onload = time; // calls the time function when page loads
 
setInterval(function () { //sets interval to see live time updates
    time();
}, 300);
