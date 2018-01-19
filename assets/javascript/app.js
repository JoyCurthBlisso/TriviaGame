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
    //    			$("#form").validate(
    //    			{
 //            		rules: {
 //               		 1: "required"

 //            			},
 //            			messages: {
 //                		1: "You must select an account type"
 //            	}
 //            	});
 			
	});

		function newTriviaGame()
		{
			questionsRight = 0;
			questionsWrong = 0;
			seconds = 300;

			$('#timeRemaining').text("5:00")

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
				
				$('#timeRemaining').text(min + ':' + checkSecond(sec))

				if(seconds == 0)
				{
					gameOver();
				}
			}, 1000);

		
			//USE THIS TO SET FORM Herb CHOICES
		// 	//CREATE AN ARRAY OF DIFFERNT HERB CHOICES

		// 	function setHerbChoices()
		// 	{

		// 	    $(".btn").each(function(btnindex, btn)
		// 		     {
		// 				$(btn).data('value', randomNumber(1, 12));

		// 		     });
		// 	}

		// 	 setHerbChoices();
		// }

		// //DO SOME THING WHEN THE USER CLICKS SUBMIT TO CALCULATE TOTAL QUESTIONS RIGHT AND WRONG
  //      	$(".btn").on("click", function () 
  //      		{
  //      			var btn = $(this);
  //               var btnValue = btn.data('value');

		// 		totalUserNumber = totalUserNumber + btnValue;
		// 		$("#displayScore").html(totalUserNumber);
			
		// 		checkscore(totalUserNumber,computerRandomNumber);

  //    		});

				
		
			// });
		}

		function gameOver()
			{
   			$("#game").hide();
			$("#results").show();
			$("#playAgain").show();

			$.each(correctAnswers, function(name, value){
				var selected = $('input[name="' + name + '"]:checked');
				if(selected){
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

		  	
		}
	});
