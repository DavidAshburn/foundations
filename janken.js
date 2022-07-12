function random(number) {
  return Math.floor(Math.random() * (number+1));
}

//0 Rock - 1 Paper - 2 Scissors
function playGame(pSelect) {
	let results = [];
	const cSelect = random(2);
	if(pSelect == cSelect) {
		results.push('t');
		return results;
	}
	if(pSelect == 0) {
		if(cSelect == 1) {
			results.push('l');
			results.push('Paper');
		}else {
			results.push('w');
			results.push('Scissors');
		}
	}else if(pSelect == 1) {
		if(cSelect == 2) {
			results.push('l');
			results.push('Scissors');
		}else {
			results.push('w');
			results.push('Rock');
		}
	}else {
		if(cSelect == 0) {
			results.push('l');
			results.push('Rock');
		}else {
			results.push('w');
			results.push('Paper');
		}
	}

	return results;
}

//our score and result output variables
var roundList = [];
var score = 0;
//handles for their future HTML containers
const results = document.querySelector('.result-list');
const scoreOut = document.querySelector('.score');

//Playing the game and outputting results to output variables 'roundList' and 'score'
function onClick(e) {
	let type;
	let html = `<li>Nothing Yet</li>`;
	
	if(e.target.name == 'Scissors') type = 2;
	else if(e.target.name == 'Paper') type = 1;
	else if(e.target.name == 'Rock') type = 0;

	const result = playGame(type);

	if(result[0] == 't'){
		html = `<li><span>Looks like a tie, both ${e.target.name}</span></li>`
	}else if(result[0] == 'w'){
		html = `<li>You won!, ${e.target.name} beats ${result[1]}</span></li>`
		score++;
	}else {
		html = `<li><span>You lost, ${result[1]} beats ${e.target.name}</span></li>`
		score--;
	}

	let scoreHtml = `<div>${score}</div>`
	roundList.push(html);
	results.innerHTML = roundList;
	scoreOut.innerHTML = scoreHtml;

}

function resetClick(e) {
	roundList = [];
	results.innerHTML = roundList;
	score = 0;
	let scoreHtml = `<div></div>`
	scoreOut.innerHTML = scoreHtml;
}

const rockE = document.querySelector('[name~=Rock]');
rockE.addEventListener('click', onClick);

const scissE = document.querySelector('[name~=Scissors]');
scissE.addEventListener('click', onClick);

const paperE = document.querySelector('[name~=Paper]');
paperE.addEventListener('click', onClick);

const resetter = document.querySelector('.reset');
resetter.addEventListener('click', resetClick);
