
window.onload = function () {
    DisplayCurrentTime();
   
};


function runTimer(min, sec) {
    var minute = min;
    var sec = sec;
    setInterval(function() {
      document.getElementById("timer").innerHTML = minute + " : " + sec;
      sec--;
      if (sec == 00) {
        minute --;
        sec = 60;
        if (minute == 0) {
          
        }
      }
    }, 1000);
  }

function DisplayCurrentTime() {
    var date = new Date();
    var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    time = hours + ":" + minutes + ":" + seconds;
    var lblTime = document.getElementById("clock");
    lblTime.innerHTML = time;
};

setInterval(DisplayCurrentTime, 1000);


const input = document.querySelector('input');
const log = document.getElementById('values');

input.addEventListener('input', updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}

function setMinuteValue() {
  let tokenAmount = document.getElementById("numberInput").value-1;
  runTimer(tokenAmount, 60);

}

var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 

/*
function addTwentyFive() {
    var date = new Date();
    var minutesToAdd = 25; 
    var futureDate = new Date(date.getTime() + minutesToAdd*60000);  
    console.log(futureDate);
    var lblFutureTime = document.getElementById("newTime");
    var lblparaShow = document.getElementById("timeShow");
    lblFutureTime.innerHTML = futureDate;
    lblparaShow.style.display = "block";   
}*/



