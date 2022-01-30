
// Loads current time on the page
window.onload = function () {
    DisplayCurrentTime();   
};

// Funciton that runs/updates clocl
function DisplayCurrentTime() {
    var date = new Date();
    var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    time = hours + ":" + minutes + ":" + seconds;
    var lblTime = document.getElementById("clock");
    lblTime.innerHTML = time;
};

// Updates clock every second
setInterval(DisplayCurrentTime, 1000);

// Displays time (function)
function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
        display = document.querySelector('#time')
        display.innerHTML = "Take a break!"
      }
  }, 1000);
}

// Takes inputvalue and starts timer
function loadTimer() {
  display = document.querySelector('#time');
  let tokenAmount = document.getElementById("numberInput").value * 60;
  startTimer(tokenAmount, display);
};
