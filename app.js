console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
let rand = 42;
let userInput = window.prompt("Guess a number between 1 and 100.");

if (userInput < rand) {
  console.log("Wrong! Too Low!");
} else if (userInput > rand) {
  console.log("ERRRR! Too High!");
} else {
  console.log("Con'GLAD'urations! You've guessed the correct number, bud!");
}

// Exercise 2
let movies = window.prompt("What's your favorite Scifi Movie?");

switch (movies.toLocaleLowerCase()) {
  case "starwars":
    console.log(
      "'Impressive, most Impressive'- Darth Vader, may the force be with your choice!"
    );
    break;
  case "startrek":
    console.log(
      "'Yours, is the superior intelllect' - 'Wrath Of Khan', live long and prosper with that decision!"
    );
    break;
  case "terminator":
    console.log(
      "'Come with me if you want to live!' - Kyle Reese, you'll be backed with that taste in movies!"
    );
    break;
  case "alien":
    console.log(
      "'That's It, man! Game over, man! Game over!' - 'Aliens', in space no one hear how much you like this movie."
    );
    break;
  case "matrix":
    console.log(
      "'He's beginning to believe.' - Morpheus, good choice Mr. Anderson."
    );
    break;
  default:
    console.log("'I'm sorry Dave, I'm afraid I don't understand.'");
}
