const questions = [
  {
    category: "Artificial Intelligence",
    question: "What does AI stand for?",
    choices: [
      "Artificial Intelligence",
      "Automated Internet",
      "Advanced Interface",
    ],
    answer: "Artificial Intelligence",
  },
  {
    category: "Programming",
    question: "Which language is widely used for Machine Learning?",
    choices: ["Python", "HTML", "CSS"],
    answer: "Python",
  },
  {
    category: "Startups",
    question: "Who co-founded OpenAI?",
    choices: ["Sam Altman", "Bill Gates", "Steve Jobs"],
    answer: "Sam Altman",
  },
  {
    category: "Business",
    question: "What does MVP stand for in startups?",
    choices: [
      "Minimum Viable Product",
      "Most Valuable Person",
      "Maximum Value Process",
    ],
    answer: "Minimum Viable Product",
  },
  {
    category: "Web Development",
    question:
      "Which JavaScript library is commonly used for building user interfaces?",
    choices: ["React", "Django", "MySQL"],
    answer: "React",
  },
];

function getRandomQuestion(questions) {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

function getRandomComputerChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResults(question, computerChoice) {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  }

  return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
}

const randomQuestion = getRandomQuestion(questions);
console.log(randomQuestion);

const computerChoice = getRandomComputerChoice(randomQuestion.choices);
console.log("Computer choice:", computerChoice);

console.log(getResults(randomQuestion, computerChoice));
