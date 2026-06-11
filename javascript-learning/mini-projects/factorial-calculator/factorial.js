let num = 7;

function factorialCalculator(num) {
  if (num < 0) {
    return "Factorial undefined";
  }
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
}

let factorial = factorialCalculator(num);

let resultMsg = `Factorial of ${num} is: ${factorial}`;

console.log(resultMsg);
