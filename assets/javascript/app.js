//variables

//start screen
	  $("#answerPage").hide();
	  $(".jumbotron").hide();
	  $("#Game").hide();
      $("#start").click(function () {
      $("#SplashScreen").hide();
      $("#Game").show();
      $(".jumbotron").show();
      $("#done").click(function () {
      $(".jumbotron").hide();
      $("#SplashScreen1").show();
      $("#answerPage").show();
});
    });

//timer: Countdown from 25 seconds to answer all questions
window.onload = function() {
    $("#start").on("click", timer.start);
};
var intervalId;

var clockRunning = false;
// timer object
var timer = {
    time: 30,

    start: function() {
        if (!clockRunning) {
            intervalId = setInterval(timer.count, 1000);
            clockRunning = true;
        }
    },
    stop: function() {
        clearInterval(intervalId);
        clockRunning = false;
       $("#answerPage").show();
    },

    count: function() {
        
        if (clockRunning) {
        	timer.time--;
        	var converted = timer.timeConverter(timer.time);
        	console.log(converted);
     
       	$("#display").text(converted);
	}
    },
    
    timeConverter: function(t) {
        var seconds = t;

        if (seconds === 0) {
            seconds = "00";
            clockRunning = false;
            clearInterval(intervalId);
            stop();
            $(".jumbotron").hide();
            $("#answerPage").show();
            answerPage();
			correctCounter();
			incorrectCounter();

        }

        else if (seconds < 10) {
            seconds = "0" + seconds;
            $("#answerPage").hide();
        }
      
		$("#done").on("click", timer.stop);
		answerPage();
		correctCounter();
		incorrectCounter();

        return "" + seconds;
    }
}
	
var userChoiceCorrect = ".correct";
// var userChoiceIncorrect = ".incorrect";
var userDone = "#done";
var correct = 0;
var incorrect = 0;
// var correctDisp = 0;
// var correctCounter = 0;
// var incorrectCounter = 0;
// var incorrectDisp = 0;


var correctCounter = function() {
      
      document.querySelector("#correctDisp").innerHTML = correct += 1;
    };  

var incorrectCounter = function() {
      
      document.querySelector("#incorrectDisp").innerHTML = incorrect += 1;
    };  

    //I tried a couple different ways to get my score counter to work, but it keeps just adding up
    //to crazy numbers, I've searched for syntax errors but can't figure it out.
//click events for radio buttons

// 	function answerPage() {
// 		if (userChoiceIncorrect == incorrect) {
// 			$(incorrect += 1);
// 			incorrectCounter();
			

// 		if (userChoiceCorrect == correct) {
// 			$(correct += 1);
// 			correctCounter();
			
// 		}

// 		else if ("#done") {
// 			answerPage();
// 			stop();
			

// 		}
// 	}
// }
	


        
         // $("#userChoice").removeAttr("disabled");

function answerPage() {
         if ($("userChoiceCorrect")) {
              //correct question clicked
              // document.querySelector("#correctDisp").innerHTML = correct;
              correctCounter();
             // correct += 1;
         }
         else {
//             //incorrect question clicked
             // ($("userChoiceIncorrect")); {
             // document.querySelector("#incorrectDisp").innerHTML = incorrect;
             incorrectCounter();
				// incorrect += 1;
        }
   }


//DONE! need start page with start button

//DONE! questions with options for answers
//questions are correct/incorrect with 4 options for the correct answer
//DONE! user can only choose one answer to each question
//DONE!have to figure out how to add the inner HTML plus button choices



//if user chooses correct answer it goes to the correct answers section on the 
	// end page that pops up after the timer is up

//if else the user chooses incorrectly that is added to the incorrect answers on the end page

//DONE! need done button if user finishes before time is up -NOT DONE: to send them to the results page

//how do we change the page once the timer is up and we need to see if the user won or lost the game?
	
	//DOne! create container in html innerHtml

// :( way show correct incorrect page and show scores?



