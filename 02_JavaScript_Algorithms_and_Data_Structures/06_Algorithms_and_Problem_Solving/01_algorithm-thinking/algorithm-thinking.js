// //Addition

// function add(a, b) {
//   if (isNaN(a) || isNaN(b)) {
//     return "Please the arguments must be a number.";
//   }

//   return parseInt(a) + parseInt(b);
// }

// console.log(add(25, 71)); // 96
// console.log(add(5, 7)); // 12
// console.log(add(54, "91")); // 5491
// console.log(add(5, "add")); //Please the arguments must be a number

// // console.log(isNaN(9));
// // console.log(isNaN("9"));
// // console.log(isNaN("9a"));

// // console.log(typeof 9);
// // console.log(typeof "9");
// // console.log(typeof "9a");

// function add(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "Please the arguments must be a number.";
//   }

//   return a + b;
// }

// console.log(add(25, 71)); // 96
// console.log(add(54, "91")); //  Please the arguments must be a number. it doesn't even concatinate them.
// console.log(add(5, "add")); // Please the arguments must be a number

// function triangle(b, h) {
//   if (isNaN(b) || isNaN(h)) {
//     return "Please can you enter the correct numeric.";
//   } else if (b < 0 || h < 0) {
//     return "Please provide only positive numbers.";
//   } else {
//     return (b * h) / 2;
//   }
// }
// console.log(triangle(8, 4));
// console.log(triangle(2, 5));
// console.log(triangle(-2, 5));
// console.log(triangle(2, "two"));

function triangleAria(base, height) {
  if (base > 0 && !isNaN(base) && (height > 0 || !isNaN(height))) {
    return (base * height) / 2;
  }
  return "ERROR";
}
console.log(triangleAria(8, 4));
console.log(triangleAria(2, 5));
console.log(triangleAria(-2, 5));
console.log(triangleAria(2, "two"));
