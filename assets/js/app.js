var game = {
	
	questionArray:[
	{
		question: "1:What is the best state in the country?", 
		option1: "New York", 
		option2: "New England",
		option3: "California",
		option4: "Colorado",
		correctAnswer: "Colorado"
	},
	{
		question: "2: Who is the best teacher at Northwestern?", 
		option1: "Mark Techson", 
		option2: "Scott Brunswig",
		option3: "Obama",
		option4: "George Bush",
		correctAnswer: "Scott Brunswig"
	},
	{
		question: "3: How much wood would a woodchuck chuck, if a woodchuck could chuck wood?", 
		option1: "5", 
		option2: "2",
		option3: "9",
		option4: "1",
		correctAnswer: "9"
	},
	{
		question: "4: Who wants to be a millionaire?", 
		option1: "Ryan Gendel", 
		option2: "Bill Clinton",
		option3: "Chuck Norris",
		option4: "Ayn Rand",
		correctAnswer: "Ryan Gendel"
	},
	{
		question: "5: What was the best sport?", 
		option1: "Skiing", 
		option2: "Football",
		option3: "Snowboarding",
		option4: "Baseball",
		correctAnswer: "Skiing"
	}
	],
	questionNumber: 1,
	guessedAnswer: "",
	intervalVar: "",
	correct: 0,
	incorrect: 0,
	score: 0,
	displayQuestion: function(){
		

		$("#question").html(game.questionArray[game.questionNumber - 1].question);
		$("#a-button").html(game.questionArray[game.questionNumber - 1].option1);
		$("#b-button").html(game.questionArray[game.questionNumber - 1].option2);
		$("#c-button").html(game.questionArray[game.questionNumber - 1].option3);
		$("#d-button").html(game.questionArray[game.questionNumber - 1].option4);
		
		$('.each-button').on('click', function(){ 
			game.guessedAnswer = this.innerHTML;
			$('#guessed-answer').html(game.guessedAnswer);
			$('#the-answer').html(game.questionArray[game.questionNumber - 1].correctAnswer);
			if(game.guessedAnswer === game.questionArray[game.questionNumber - 1].correctAnswer){
				$('#correct-incorrect').html("Correct");
				game.correct++;

			} 
			else{
				$('#correct-incorrect').html("Incorrect");
				game.incorrect++;
				
			}
			//game.score = game.correct / game.incorrect;
			game.score = Math.floor((game.correct / game.questionNumber) * 100);
			$("#score-percentage").html(game.score);
			game.questionNumber++;
			$( ".each-button").unbind( "click" )
			if(game.questionNumber < 6){
				//game.myStopFunction();
				game.displayQuestion();
			}
			if(game.questionNumber >= 6 && game.score >= 70){
				$("#game-over").html("Game Over! You Passed!");
				$( ".each-button").unbind( "click" )
			}	
			if(game.questionNumber >= 6 && game.score < 70){
				$("#game-over").html("Game Over! You Failed!");
				$( ".each-button").unbind( "click" )
			}	

		})

	},
	startTimer: function(duration, display) {
		var timer = duration, seconds;
		var myVar = setInterval(function () {

			seconds = parseInt(timer % 60, 10);
			seconds = seconds < 10 ? "0" + seconds : seconds;
			display.textContent = ":" + seconds;

			if (--timer < 0) {
				timer = duration;
			}
			if(timer === 0){
				$("#game-over").html("Game Over! You ran out of time.");	
				clearInterval(myVar);
				$( ".each-button").unbind( "click" )
			}
		}, 1000);
	}
}


$( document ).ready(function() {
	var timeLimit = 30;
	display = document.querySelector('#time');
	game.startTimer(timeLimit, display);
	game.displayQuestion();
	
});
