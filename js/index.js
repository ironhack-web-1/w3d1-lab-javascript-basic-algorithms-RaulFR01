// Iteration 1: Names and Input
let hacker1 = "Rodolfo";

console.log("The driver's name is " + hacker1);

let hacker2 = "Matias";

console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    "The driver has the longest name, it has " + hacker1.length + " characters"
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    "It seems that the navigator has the longest name, it has " +
      hacker2.length +
      " characters."
  );
} else {
  console.log(
    "Wow, you both have equally long names, " + hacker1.length + " characters!"
  );
}

// Iteration 3: Loops

// ejercicio 3.1

let answer1 = "";

for (let i = 0; i < hacker1.length; i++) {
  answer1 += hacker1[i].toUpperCase() + " ";
}

console.log(answer1);

// ejercicio 3.2

let answer2 = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  answer2 += hacker2[i];
}

console.log(answer2);

// ejercicio 3.3

driversFirstLetter = hacker1.charCodeAt(0);
navigatorFirstLetter = hacker2.charCodeAt(0);

if (driversFirstLetter < navigatorFirstLetter) {
  console.log("The driver's name goes first.");
} else if (driversFirstLetter > navigatorFirstLetter) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// BONUS 1

let paragraphs =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et felis libero. Ut placerat dignissim nisi. Maecenas ultricies pretium ornare. Duis id erat quis neque rutrum auctor ornare pretium ipsum. Phasellus tempor orci diam, et ornare ex accumsan in. Cras auctor quam a orci faucibus interdum. Proin congue erat neque, in ornare nisl ullamcorper vitae. Donec ultrices sapien non laoreet eleifend. Ut in laoreet lorem. Vivamus aliquet, lacus ac ultrices accumsan, nulla massa bibendum neque, sed scelerisque leo nunc id massa. Duis malesuada ullamcorper erat, sit amet suscipit tellus tempus bibendum." +
  "In at consequat orci, id pretium nunc. Phasellus elit velit, accumsan vitae rutrum vitae, pulvinar non est. Donec lacinia gravida nibh, sit amet iaculis leo pellentesque id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Curabitur auctor commodo massa, et convallis dolor interdum eu. In hac habitasse platea dictumst. Vivamus feugiat nisl ac tortor dictum scelerisque. Duis et lacinia tortor." +
  "Aliquam aliquet ipsum id tellus tincidunt, ac mollis orci aliquet. Praesent magna tortor, feugiat sit amet nunc sit amet, fermentum rhoncus enim. Integer nisi diam, pellentesque vitae felis a, imperdiet finibus massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam vel semper sem. Suspendisse massa est, porttitor in bibendum quis, suscipit nec est. Maecenas malesuada metus a ligula semper, vel eleifend leo fermentum. Ut vitae mi iaculis, sagittis mi ut, tristique felis. Proin tortor nulla, convallis id mollis et, elementum sit amet leo. Nulla sed porta nibh. In dapibus dictum semper.";

let answer3 = paragraphs.split(" ");

console.log(answer3.length);

// BONUS 2

let phrase = "Amor, Roma";
let palindrome = false;

for (let i = 0; i < phrase.length; i++) {
  for (let j = phrase.length - 1; j >= 0; j--) {
    if (phrase[i] === phrase[j]) {
      palindrome = true;
    }
  }
}

console.log(palindrome);
