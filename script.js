//get elements from document
timeEl = document.querySelector(".time");
startEl = document.querySelector("#start-button");
stopEl = document.querySelector("#stop-button");
resetEl = document.querySelector("#reset-button");

//set variables
let currentTime = 0; //time in milliseconds currently
let running = false; //boolean for whether clock is running
let lastTime = 0;
let nowTime = 0;

const addTime = function () {
  var date = new Date();
  nowTime = date.getTime();
  if (running) {
    currentTime += nowTime - lastTime;
  }
  lastTime = nowTime;
  let minutes = Math.trunc(currentTime / 60000);
  let seconds = Math.trunc((currentTime - 60000 * minutes) / 1000);
  if (String(seconds).length === 1) {
    seconds = "0" + seconds;
  }
  let milliSeconds = currentTime % 1000;
  if (String(milliSeconds).length === 1) {
    milliSeconds = "00" + milliSeconds;
  } else if (String(milliSeconds).length === 2) {
    milliSeconds = "0" + milliSeconds;
  }
  timeEl.textContent = `${minutes}:${seconds}:${milliSeconds}`;
};

startEl.addEventListener("mousedown", function () {
  running = true;
  var date = new Date();
  lastTime = date.getTime();
});

stopEl.addEventListener("mousedown", function () {
  running = false;
});

resetEl.addEventListener("mousedown", function () {
  currentTime = 0;
  running = false;
});

setInterval(addTime, 1);
