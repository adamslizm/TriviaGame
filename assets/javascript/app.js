

//variables

//timer: Countdown from 25 seconds to answer all questions
window.onload = function() {
  $("#start").on("click", stopwatch.start);
};
//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;
//prevents the clock from being sped up unnecessarily
var clockRunning = false;
// Our stopwatch object
var stopwatch = {
  time: 25,
  lap: 1,
  reset: function() {
    stopwatch.time = 25;
    stopwatch.lap = 1;
    $("#display").text("00:25");
    // DONE: Empty the "laps" div.
    $("#laps").text("");
  },
  start: function() {
    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
        intervalId = setInterval(stopwatch.count, 1000);
        clockRunning = true;
    }
  },
  stop: function() {
    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
  },
  recordLap: function() {
    // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
    //       and save the result in a variable.
    var converted = stopwatch.timeConverter(stopwatch.time);
    // DONE: Add the current lap and time to the "laps" div.
    $("#laps").append("<p>Lap " + stopwatch.lap + " : " + converted + "</p>");
    // DONE: Increment lap by 1. Remember, we can't use "this" here.
    stopwatch.lap++;
  },
  count: function() {
    // DONE: increment time by 1, remember we cant use "this" here.
    stopwatch.time--;
    // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
    //       and save the result in a variable.
    var converted = stopwatch.timeConverter(stopwatch.time);
    console.log(converted);
    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#display").text(converted);
  },
  timeConverter: function(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
  }
}

  



//questions with options for answers
//questions are true/false with 4 options for the correct answer
//user can only choose one answer to each question
//have to figure out how to add the inner HTML plus button choices


//if user chooses correct answer it goes to the correct answers section on the 
// end page that pops up after the timer is up

//else the user chooses incorrectly that is added to the incorrect answers on the end page

//how do we change the page once the timer is up and we need to see if the user won or lost the game?

//way to reset the game?