const lunches = [];

// Add to end
function addLunchToEnd(array, lunchItem) {
  array.push(lunchItem);

  console.log(`${lunchItem} added to the end of the lunch menu.`);

  return array;
}

// Add to start
function addLunchToStart(array, lunchItem) {
  array.unshift(lunchItem);

  console.log(`${lunchItem} added to the start of the lunch menu.`);

  return array;
}

// Remove last lunch
function removeLastLunch(array) {
  if (array.length === 0) {
    console.log("No lunches to remove.");
    return array;
  }

  const removedLunch = array.pop();

  console.log(`${removedLunch} removed from the end of the lunch menu.`);

  return array;
}

// Remove first lunch
function removeFirstLunch(array) {
  if (array.length === 0) {
    console.log("No lunches to remove.");
    return array;
  }

  const removedLunch = array.shift();

  console.log(`${removedLunch} removed from the start of the lunch menu.`);

  return array;
}

// Get random lunch
function getRandomLunch(array) {
  if (array.length === 0) {
    console.log("No lunches available.");
    return;
  }

  const randomIndex = Math.floor(Math.random() * array.length);

  console.log(`Randomly selected lunch: ${array[randomIndex]}`);
}

// Show lunch menu
function showLunchMenu(array) {
  if (array.length === 0) {
    console.log("The menu is empty.");
    return;
  }

  console.log(`Menu items: ${array.join(", ")}`);
}
addLunchToEnd(lunches, "Pizza");
addLunchToEnd(lunches, "Burger");

addLunchToStart(lunches, "Salad");

showLunchMenu(lunches);

getRandomLunch(lunches);

removeLastLunch(lunches);

removeFirstLunch(lunches);

showLunchMenu(lunches);
