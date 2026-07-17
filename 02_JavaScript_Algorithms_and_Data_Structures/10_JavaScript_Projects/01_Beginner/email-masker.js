function maskEmail(email) {
  const atIndex = email.indexOf("@");

  const username = email.slice(0, atIndex);
  const domain = email.slice(atIndex);

  const firstLetter = username[0];
  const lastLetter = username[username.length - 1];

  const stars = "*".repeat(username.length - 2);
  console.log(username);
  console.log(domain);
  console.log(firstLetter);
  console.log(lastLetter);

  return firstLetter + stars + lastLetter + domain;
}
const email = "apple.pie@example.com";
console.log(maskEmail("apple.pie@example.com"));

// console.log(maskEmail("freecodecamp@example.com"));

// console.log(maskEmail("info@test.dev"));

// console.log(maskEmail("user@domain.org"));
// console.log(maskEmail(email));

function getLoanMessage(annualIncome, creditScore) {
  if (
    creditScore >= minCreditScoreForDuplex &&
    annualIncome >= minIncomeForDuplex
  ) {
    return "You qualify for a duplex, condo, and car loan.";
  } else if (
    annualIncome >= minIncomeForCondo &&
    creditScore >= minCreditScoreForCondo
  ) {
    return "You qualify for a condo and car loan.";
  } else if (
    annualIncome >= minIncomeForCar &&
    creditScore >= minCreditScoreForCar
  ) {
    return "You qualify for a car loan.";
  }
}