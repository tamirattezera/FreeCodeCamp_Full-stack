const squad = [];
firstAstronaut = {
  id: 1,
  name: "Tame",
  role: "Ai Engineer",
  isEVAEligible: true,
  priority: 1,
};

function addCrewMember(crew, astronaut) {
  for (const member of crew) {
    if (member.id === astronaut.id) {
      console.log(`Duplicate ID: ${astronaut.id}`);
      return;
    }
  }
  crew.push(astronaut);
  console.log(`Added: ${astronaut.name} as ${astronaut.role}`);
}

addCrewMember(squad, firstAstronaut);

const remainingCrew = [
  {
    id: 2,
    name: "Edom",
    role: "Marketer",
    isEVAEligible: true,
    priority: 8,
  },
  {
    id: 3,
    name: "kiya",
    role: "Architect",
    isEVAEligible: true,
    priority: 4,
  },
  {
    id: 4,
    name: "Kaleab",
    role: "Pilot",
    isEVAEligible: false,
    priority: 9,
  },
  {
    id: 5,
    name: "Abeni",
    role: "Astronomist",
    priority: 2,
    isEVAEligible: true,
  },
  {
    id: 6,
    name: "Hanna",
    role: "Developer",
    priority: 2,
    isEVAEligible: true,
  },
  {
    id: 7,
    name: "Natan",
    role: "Scientist",
    priority: 5,
    isEVAEligible: false,
  },
];

for (const astronaut of remainingCrew) {
  addCrewMember(squad, astronaut);
}

function swapCrewMembers(crew, fromIndex, toIndex) {
  if (
    fromIndex < 0 ||
    fromIndex >= crew.length ||
    toIndex < 0 ||
    toIndex >= crew.length
  ) {
    console.log("Invalid crew indicies");
    return;
  }
  const updatedCrew = crew.slice();
  updatedCrew[fromIndex] = updatedCrew.splice(
    toIndex,
    1,
    updatedCrew[fromIndex],
  )[0];
  for (const astronuat of updatedCrew) {
    console.log(astronuat.name);
  }
  return updatedCrew;
}

updatedSquad = swapCrewMembers(squad, 2, 5);
function sortByPriorityDescending(crew) {
  for (let i = 0; i < crew.length; i++) {
    for (let j = 0; j < crew.length - 1; j++) {
      if (crew[j].priority < crew[j + 1].priority) {
        const temp = crew[j];
        crew[j] = crew[j + 1];
        crew[j + 1] = temp;
      }
    }
  }
}

/* Pseudo Code 
Create eligible array

Loop through crew

If astronaut.isEVAEligible is true
    add astronaut to eligible

Return eligible
*/
function getEVAReadyCrew(crew) {
  const eligible = [];
  for (const astronaut of crew) {
    if (astronaut.isEVAEligible === true) {
      eligible.push(astronaut);
    }
    sortByPriorityDescending(eligible);
  }
  return eligible;
}

/*
CREATE EVAReadySquad
    = getEVAReadyCrew(updatedSquad)

FOR EACH astronaut IN EVAReadySquad

    PRINT astronaut.name

END FOR
*/
const EVAReadySquad = getEVAReadyCrew(updatedSquad);

// for (const astronaut of EVAReadySquad) {
//   console.log(astronaut.name);
// }

function chunkCrew(crew, size) {
  if (size < 1) {
    console.log("Chunk size must be >= 1");
    return;
  }

  const chunks = [];
  for (let i = 0; i < crew.length; i += size) {
    chunks.push(crew.slice(i, i + size));
  }
  return chunks;
}
/*
FOR each chunk in EVAChunks

    PRINT chunk number

    FOR each astronaut in current chunk

        PRINT astronaut.name

    END FOR

END FOR
*/
for (let i = 0; i < EVAChunks.length; i++) {
  console.log(`Chunk ${i + 1}:`);

  for (let j = 0; j < EVAChunks[i].length; j++) {
    console.log(EVAChunks[i][j].name);
  }
}
