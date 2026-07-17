// ==================================================
// Build a Gradebook App
// ==================================================
//
// Functions:
// 1. getAverage()
// 2. getGrade()
// 3. hasPassingGrade()
// 4. studentMsg()
//
// ==================================================

// ==================================================
// 1. Calculate Average Score
// ==================================================

function getAverage(scores) {
  const total = scores.reduce((sum, score) => sum + score, 0);

  return total / scores.length;
}

// ==================================================
// 2. Convert Score To Letter Grade
// ==================================================

function getGrade(score) {
  if (score === 100) {
    return "A+";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// ==================================================
// 3. Check Passing Grade
// ==================================================

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

// ==================================================
// 4. Student Message
// ==================================================

function studentMsg(scores, studentScore) {
  const average = getAverage(scores);

  const grade = getGrade(studentScore);

  if (hasPassingGrade(studentScore)) {
    return `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
  } else {
    return `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
  }
}

// ==================================================
// Testing
// ==================================================

// Average Tests

console.log("Average Tests");

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
// Expected: 71.7

console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));
// Expected: 85.4

console.log("--------------------");

// Grade Tests

console.log("Grade Tests");

console.log(getGrade(100));
// A+

console.log(getGrade(95));
// A

console.log(getGrade(85));
// B

console.log(getGrade(75));
// C

console.log(getGrade(65));
// D

console.log(getGrade(40));
// F

console.log("--------------------");

// Passing Tests

console.log("Passing Tests");

console.log(hasPassingGrade(90));
// true

console.log(hasPassingGrade(50));
// false

console.log("--------------------");

// Student Messages

console.log("Student Messages");

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));

// Expected:
// Class average: 71.7. Your grade: F. You failed the course.

console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));

// Expected:
// Class average: 50.8. Your grade: A+. You passed the course.

console.log(studentMsg([12, 22, 32, 42, 52, 62, 72, 92], 85));

// Expected:
// Class average: 48.25. Your grade: B. You passed the course.
