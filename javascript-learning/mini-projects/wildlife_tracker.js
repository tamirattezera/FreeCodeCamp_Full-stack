const tiger = {
  species: "Tiger",
  age: 5,
  isEndangered: true,
};

const elephant = {
  species: "Elephant",
  age: 10,
  isEndangered: true,
};

const getSpecies = ({ species }) => species;

console.log(getSpecies(tiger));

const getAge = ({ age }) => age;

console.log(getAge(tiger));

// Add habitat (immutable)
const addHabitat = (animal, habitat) => ({
  ...animal,
  habitat,
});

const tigerWithHabitat = addHabitat(tiger, "Rainforest");
console.log(tigerWithHabitat);

// Update age (immutable)
const updateAge = (animal, newAge) => ({
  ...animal,
  age: newAge,
});

const updatedElephant = updateAge(elephant, 12);
console.log(updatedElephant);

// Remove endangered status (immutable)
const removeEndangeredStatus = ({ isEndangered, ...animal }) => animal;

const safeTiger = removeEndangeredStatus(tigerWithHabitat);
console.log(safeTiger);

// Check if habitat exists
const hasHabitat = (animal) => Object.hasOwn(animal, "habitat");

console.log(hasHabitat(tigerWithHabitat));
console.log(hasHabitat(elephant));

// Dynamic property access
const getProperty = (animal, propertyName) => animal[propertyName];

console.log(getProperty(tiger, "species"));
console.log(getProperty(elephant, "age"));
