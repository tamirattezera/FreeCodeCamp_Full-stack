// function checkPassed(pass, score, name) {
//   if (score >= pass) {
//     console.log(`${name}: passed`);
//   } else {
//     console.log(`${name}: failed`);
//   }
// }

// checkPassed(60, 75, "Kal");
// checkPassed(70, 45, "John");
// checkPassed(60, 45, "Kal");

// function checkPassword(pass1, pass2) {
//   if (pass1 === pass2) {
//     console.log("Password confirmed!");
//   }
//   if (pass1 !== pass2) {
//     console.log("Please enter match password!");
//   }
// }
// checkPassword("Tame963", "Tame963");
// checkPassword("John123", "John1239");

function gradingSystem(score) {
  if (typeof score !== "number" && isNaN(score)) {
    console.log("Invalid input. Please enter a valid number.");
    return;
  }
  if (score < 0 || score > 100) {
    console.log("Invalid input. Please enter a score between 0 and 100.");
    return;
  }
  if (score >= 90) {
    console.log("Grade: A");
  } else if (score >= 80) {
    console.log("Grade: B");
  } else if (score >= 70) {
    console.log("Grade: C");
  } else if (score >= 60) {
    console.log("Grade: D");
  } else {
    console.log("Grade: F");
  }
}
gradingSystem(95);
gradingSystem(85);
gradingSystem(75);
gradingSystem(65);
gradingSystem(55);
gradingSystem(45);
gradingSystem("Ninety");
gradingSystem(NaN);
gradingSystem(undefined);
gradingSystem(null);
gradingSystem(150);
gradingSystem(-10);

// Switch Statement
const greetings = "Hello";
let timeOfDay = "  Morning  ";
timeOfDay = timeOfDay.trim().toLowerCase();

switch (timeOfDay) {
  case "morning":
    console.log(`${greetings}, good morning!`);
    break;
  case "afternoon":
    console.log(`${greetings}, good afternoon!`);
    break;
  case "evening":
    console.log(`${greetings}, good evening!`);
    break;
  default:
    console.log(`${greetings}, good day!`);
}
// greetings("Morning");
// greetings("  Evening  ");
// greetings("afternoon", "Hi");
