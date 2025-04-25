function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
  }
  
  let numero = getComputerChoice();
  if (numero == 1) {
    console.log("rock");
  }
  if (numero == 2) {
    console.log("paper");
  }
  if (numero == 3) {
    console.log("scissors");
  }