var options = ["r", "p", "s"];
var user;
var computer;
var userwin = 0;
var computerwin = 0;
var tie = 0;


for (var round = 1; round <= 3; round++) {
    user = prompt("Enter r or p or s");

    if (!options.includes(user)) {
        alert("You didn´t enter a valid input!\r\nPlease enter r or p or s");
        round--;
    } else {

        computer = options[Math.floor(Math.random() * options.length)];
        alert("Computer choose: " + computer);
        user = user.toLowerCase();

        if (user == computer) {
            tie++
            alert("no one wins")
        } else if (user == "r" && computer == "s") {
            userwin++;
            alert("user wins")
        } else if (user == "p" && computer == "r") {
            userwin++;
            alert("user wins")
        } else if (user == "s" && computer == "p") {
            userwin++;
            alert("user wins")
        } else {
            computerwin++
            alert("computer wins")
        };
    }

}

alert("Wins: " + userwin + " " + "Losses: " + computerwin + " " + "Ties: " + tie);
