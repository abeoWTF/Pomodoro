
window.onload = function () {
    DisplayCurrentTime();
   
};


function runTimer() {
    var minute = 24;
    var sec = 60;
    setInterval(function() {
      document.getElementById("timer").innerHTML = minute + " : " + sec;
      sec--;
      if (sec == 00) {
        minute --;
        sec = 60;
        if (minute == 0) {
          minute = 5;
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



