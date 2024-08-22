import Choise from "./Enum/Choise";

function getComputerChoise(): Choise {
  const choices = [Choise.Rock, Choise.Paper, Choise.Scissors];
  const randomIndex = Math.floor(Math.random() * choices.length)
  return choices[randomIndex]
}

function getWinner(userChoise: Choise, computerChoise: Choise) {
  if(userChoise === computerChoise) {
    return "Unentschieden!"
  }
  if(
    (userChoise === Choise.Rock && computerChoise === Choise.Scissors) ||
    (userChoise === Choise.Paper && computerChoise === Choise.Rock) ||
    (userChoise === Choise.Scissors && computerChoise === Choise.Paper)
  ){
    return "Du hast Gewonnen"
  } else {
    return "der Computer hat gewonnen"
  }
}




function playRound(rounds: number){
  let userScore = 0;
  let computerScore = 0;
  const scoreDiv = document.getElementById("scoreOutput")
  scoreDiv!.innerHTML = ""

  const computerChoise = getComputerChoise();

  



}


document.getElementById("rock")?.addEventListener("click", () => {

})