function mutation(arr) {
  const first = arr[0].toLowerCase();
  const second = arr[1].toLowerCase();

  for (const char of second) {
    if (!first.includes(char)) {
      return false;
    }
  }

  return true;
}
console.log(mutation(["hello", "Hello"]));

console.log(mutation(["hello", "hey"]));

console.log(mutation(["Alien", "line"]));

console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));

console.log(mutation(["Mary", "Army"]));
