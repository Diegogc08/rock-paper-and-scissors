//elección de jugador//
let HumanScore = 0;
let computerScore = 0; 

while (HumanScore < 3 && computerScore < 3) {
  let humanChoice = parseInt(prompt("selecciona 1 para piedra, 2 para papel y 3 para tijera"));
  function getHumanChoice() {

    return (humanChoice);
  }
  if (humanChoice == 1) {
    console.log("Ha elegido Piedra");
  }
  if (humanChoice == 2) {
    console.log("Ha elegido Papel")
  }
  if (humanChoice == 3) {
    console.log("Ha elegido Tijera")
  }
  //______________________________________//

  //elección de computadora//
  function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
  }

  let computerChoice = getComputerChoice();
  if (computerChoice == 1) {
    console.log("Comp eligió Piedra");
  }
  if (computerChoice == 2) {
    console.log("Comp eligió Papel");
  }

  if (computerChoice == 3) {
    console.log("Comp eligió Tijera");
  }
  //__________________________________________//

  function playRound(HumanScore, computerScore) {
    return console.log("Tu puntuación es " + HumanScore + " y la computadora " + computerScore);
  }

  if (humanChoice === 1 && computerChoice === 3) {
    HumanScore = HumanScore + 1;
    console.log("Ganaste");
  }
  else if (humanChoice === 2 && computerChoice === 1) {
    HumanScore = HumanScore + 1;
    console.log("Ganaste");
  }
  else if (humanChoice === 3 && computerChoice === 2) {
    HumanScore = HumanScore + 1;
    console.log("ganaste");
  }
  else if (humanChoice === computerChoice) {
    console.log("Empate");
  }
  else {
    computerScore = computerScore +1;
    console.log("Perdiste");
  }
  playRound (HumanScore, computerScore);
}

if (HumanScore === 3) {
  alert("¡Ganaste el juego!");
} else if (computerScore === 3) {
  alert("¡Perdiste el juego!");
}