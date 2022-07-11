function random(number) {
  return Math.floor(Math.random() * (number+1));
}

//it doesn't matter what's input as long as the first character is the correct letter, Pancake gets typos
function janitize(stin) {
  stin = stin.toLowerCase();
  let first = stin.substr(0,1);
  switch(first) {
    case 'r':
      return "Rock";
    case 'p':
      return "Paper";
    case 's':
      return "Scissors";
    default:
      return "Pancake";
  }
}

function computerPlay(){
  let code = random(2);
  if(code==0)return 'Rock';
  if(code==1)return 'Scissors';
  return 'Paper';
}

function playARound(pSelect,cSelect){
  
  if(pSelect == cSelect) return ['It\'s a tie, both ' + pSelect].join('');
  if(pSelect == 'Pancake') return "Pancake always loses";
  if(pSelect == 'Rock'){
    if(cSelect == 'Paper'){
      return ['Sorry, you lost. ' + cSelect + ' beats your ' + pSelect].join('');
    }else {return ['You won! Your ' + pSelect + ' beats ' + cSelect].join('');}
  }
  if(pSelect == 'Paper'){
    if(cSelect == 'Scissors'){
      return ['Sorry, you lost. ' + cSelect + ' beats your ' + pSelect].join('');
    }else {return ['You won! Your ' + pSelect + ' beats ' + cSelect].join('');}
  }
  if(pSelect == 'Scissors'){
    if(cSelect == 'Rock'){
      return ['Sorry, you lost. ' + cSelect + ' beats your ' + pSelect].join('');
    }else {return ['You won! Your ' + pSelect + ' beats ' + cSelect].join('');}
  }

}



function game() {

  let score = 0;

  for (let i = 0; i < 5; i++) {

    let answer = prompt("Please choose Rock, Paper, or Scissors: ");
    let clean = janitize(answer);
    let result = playARound(clean,computerPlay());
    let checker = result.substr(0,1);
    
    switch(checker) {
      case 'Y':
        score++;
        break;
      case 'I':
        break;
      default:
        score--;
        break;
    }

    console.log(result);

  }

  if(score > 0) console.log("You won! Point total: " + score);
  else if(score == 0) console.log("You tied. Point total: " + score);
  else console.log("You lost. Point total: " + score);
}

game();