// ==================================================
// Build a Password Generator App
// ==================================================
//
// Goal:
// Generate a random password of a given length.
//
// Allowed Characters:
//
// ABCDEFGHIJKLMNOPQRSTUVWXYZ
// abcdefghijklmnopqrstuvwxyz
// 0123456789
// !@#$%^&*()
//
// ==================================================

// ==================================================
// Password Generator Function
// ==================================================

function generatePassword(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);

    password += characters[randomIndex];
  }

  return password;
}

// ==================================================
// Generate Password
// ==================================================

const password = generatePassword(12);

// ==================================================
// Output
// ==================================================

console.log(`Generated password: ${password}`);
