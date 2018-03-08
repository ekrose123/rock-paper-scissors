var playerScore = 0;
var computerScore = 0;

function randomThrow() {
	var randomIndex = Math.floor(Math.random() * 3);
	return ['rock', 'paper', 'scissors'][randomIndex];
}

function gameReset() {
	playerScore = 0;
	computerScore = 0;
	updateScoreboard();
	$('tbody').html("");
}

function updateScoreboard() {
	$('#player-score').html(playerScore);
	$('#computer-score').html(computerScore);
}

function gamePlay(playerThrow) {
	var computerThrow = randomThrow();
	var result;
	console.log('playerThrow = ' + playerThrow);
	console.log('computerThrow = ' + computerThrow);


	if (playerThrow == computerThrow){
		result = 'Tie!';
	} else if ((playerThrow == 'rock' && computerThrow == 'scissors') || 
					(playerThrow == 'scissors' && computerThrow == 'paper') ||
					(playerThrow == 'paper' && computerThrow == 'rock')){
		//player win!
		playerScore++;
		result = 'Player win!';
	} else {
		computerScore++;
		result = 'Computer win!';
	}

	//updateScoreboard
	updateScoreboard();

	//update game log
	var summary = `You threw ${playerThrow}, computer threw ${computerThrow}. Result ${result}`;
	$('tbody').append(`<tr><td>${summary}</td></tr>`);
}

$('#reset-game').click(gameReset);