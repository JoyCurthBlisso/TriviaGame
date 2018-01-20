$(document).ready(function()
	{
	 
	var questionsRight = 0;
	var questionsWrong = 0;
	var timer = null,
		seconds = 300;

   	var correctAnswers = {
   		"1": "Saffron",
   		"2": "Tumeric",
   		"3": "Dandelion",
   		"4": "Arrowroot",
   		"5": "Anise Seed",
   		"6": "Goldenseal",
   		"7": "Valerian",
   		"8": "Meadowsweet",
   		"9": "Wormwood",
   		"10": "Fennel",
   	}

    $("#game").hide();
    $("#results").hide();
    $("#playAgain").hide();

    $("#start").on("click", function () {
		$("#game").show();
		$("#start").hide();
		newTriviaGame();
	});

    $("#playAgain").on("click", function () {
		$("#game").show();
		$("#start").hide();
		$("#playAgain").hide();
		$("#results").hide();
		$('input[type="radio"]').prop('checked', false);

		newTriviaGame();
 	});

 	$("#submit").on("click", function () {
 		gameOver();

 			
	});

		function newTriviaGame()
		{
			questionsRight = 0;
			questionsWrong = 0;
			questionsNotAnswered = 0;
			seconds = 300;

			$('#timeRemaining').text("Time Remaining: 5:00")

			function checkSecond(sec) {
				if (sec < 10 && sec >= 0) {sec = "0" + sec}; 
				if (sec < 0) {sec = "59"};
				return sec;
			}
			
			if(timer){
				clearInterval(timer);
			}

			timer = setInterval(function(){
				seconds--;
				var min = Math.floor(seconds / 60 );
				var sec = seconds - min * 60;
				
				$('#timeRemaining').html("Time Remaining: " + min + ':' + checkSecond(sec))

				if(seconds == 0)
				{
					gameOver();
				}
			}, 1000);
		}

		function gameOver()
			{
   			$("#game").hide();
			$("#results").show();
			$("#playAgain").show();

			$.each(correctAnswers, function(name, value){

				var selected = $('input[name="' + name + '"]:checked');
				if(selected.val()==undefined)
				{
					questionsNotAnswered++;
				}
				else if(selected){
					if(selected.val() == value){
						questionsRight++;
					} else {
						questionsWrong++;
					}
				} else {
					questionsWrong++;
				}
			});

			$('#questionsRight').text("Questions Right = " + questionsRight);
			$('#questionsWrong').text("Questions Wrong = " + questionsWrong);
			$('#questionsNotAnswered').text("Questions Not Answered = " + questionsNotAnswered);

		  	
		}
	});
