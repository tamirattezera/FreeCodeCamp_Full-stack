function convertCtoF(celsius) {
  const fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}
console.log(convertCtoF(0));
console.log(convertCtoF(-30));
console.log(convertCtoF(-10));
console.log(convertCtoF(20));
console.log(convertCtoF(100));
console.log(convertCtoF(30));
