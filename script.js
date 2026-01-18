// SAT Math Questions + hints
const SAT_MATH_Q = [
  { question: "2x^2 + 3x - 5", answer: "Quadratic equation. Use the quadratic formula: x = [-b ± √(b²-4ac)] / 2a." },
  { question: "x^2 - 4x + 4", answer: "Quadratic equation. Try factoring: (x-2)^2 = 0 → x = 2." },
  { question: "Simplify 3(x + 4) - 5", answer: "Distribute 3: 3x + 12 - 5 = 3x + 7." },
  { question: "Solve 5x + 3 = 18", answer: "Subtract 3: 5x = 15 → x = 3." },
  { question: "If f(x) = 2x + 3, find f(4)", answer: "Plug in 4: f(4) = 2*4 + 3 = 11." },
  { question: "Factor x^2 - 9", answer: "Difference of squares: x^2 - 9 = (x-3)(x+3)." },
  { question: "Simplify (x + 2)(x + 3)", answer: "Multiply: x^2 + 5x + 6." },
  { question: "Solve 2x - 7 = 5", answer: "Add 7: 2x = 12 → x = 6." },
  { question: "Slope of line passing (1,2) and (3,6)", answer: "Slope = (6-2)/(3-1) = 4/2 = 2." },
  { question: "If y = 3x + 2, find y when x = 5", answer: "y = 3*5 + 2 = 17." }
];

// English Learners Questions + hints
const ENGLISH_Q = [
  { question: "correct the grammar", answer: "Check subject-verb agreement and tense. Example: 'He doesn't like pizza.'" },
  { question: "synonym of", answer: "Look for words with similar meaning. Example: 'happy' → 'joyful'." },
  { question: "antonym of", answer: "Look for words with opposite meaning. Example: 'hot' → 'cold'." },
  { question: "summarize", answer: "Identify the main idea of the passage and write it in one sentence." },
  { question: "meaning of", answer: "Try to understand the word from context or use a dictionary." },
  { question: "fill in the blank", answer: "Think about grammar and vocabulary that fits the sentence." },
  { question: "plural form", answer: "Change the noun to plural: cat → cats, child → children." },
  { question: "past tense of", answer: "Convert the verb to past tense: go → went, eat → ate." },
  { question: "article usage", answer: "Decide if 'a', 'an', or 'the' is correct. Example: 'a cat', 'an apple', 'the sun'." },
  { question: "prepositions", answer: "Check which preposition fits: in, on, at, by, with, etc." }
];

function askAI() {
  const questionInput = document.querySelector("textarea").value.trim().toLowerCase();
  const answerBox = document.getElementById("answer");

  if (questionInput === "") {
    answerBox.innerHTML = "Please type a question.";
    return;
  }

  let found = false;

  // Check SAT Math questions
  for (let i = 0; i < SAT_MATH_QA.length; i++) {
    if (questionInput.includes(SAT_MATH_QA[i].question.toLowerCase())) {
      answerBox.innerHTML = `<b>AI Math Hint:</b><br>${SAT_MATH_QA[i].answer}`;
      found = true;
      break;
    }
  }

  // Check English Learners questions
  if (!found) {
    for (let i = 0; i < ENGLISH_QA.length; i++) {
      if (questionInput.includes(ENGLISH_QA[i].question)) {
        answerBox.innerHTML = `<b>AI English Tip:</b><br>${ENGLISH_QA[i].answer}`;
        found = true;
        break;
      }
    }
  }

  // Default recommendation if no match found
  if (!found) {
    answerBox.innerHTML = `<b>AI Recommendation:</b><br>Try to analyze the question step by step and review the relevant rules.`;
  }
}
// SAT Math Questions + step-by-step hints
const SAT_MATH_QA = [
  { 
    question: "2x^2 + 3x - 5", 
    answer: "Quadratic equation. Step-by-step approach:\n1. Identify a=2, b=3, c=-5\n2. Apply quadratic formula: x = [-b ± √(b²-4ac)] / 2a\n3. Solve to get x values." 
  },
  { 
    question: "x^2 - 4x + 4", 
    answer: "Quadratic equation. Step-by-step:\n1. Recognize perfect square: x^2 - 4x + 4 = (x-2)^2\n2. Solve: (x-2)^2 = 0 → x = 2" 
  },
  { 
    question: "Simplify 3(x + 4) - 5", 
    answer: "Simplify step-by-step:\n1. Distribute 3: 3x + 12 - 5\n2. Combine like terms: 3x + 7" 
  },
  { 
    question: "Solve 5x + 3 = 18", 
    answer: "Step-by-step:\n1. Subtract 3: 5x = 15\n2. Divide by 5: x = 3" 
  }
];

// English Grammar Questions + error location hints
const ENGLISH_QA = [
  { 
    question: "correct the grammar", 
    answer: "Check subject-verb agreement and tense. Example: 'He don't like pizza.' → 'He doesn't like pizza.' (Error: 'don't' should be 'doesn't')" 
  },
  { 
    question: "fill in the blank", 
    answer: "Check grammar and context. Example: 'She ___ to school every day.' → 'goes' (Error: verb tense)" 
  },
  { 
    question: "meaning of", 
    answer: "Try to understand the word from context or dictionary. Example: 'elated' → very happy" 
  }
];

// Synonym dictionary
const SYNONYMS = {
  happy: ["joyful", "content", "cheerful", "delighted"],
  sad: ["unhappy", "sorrowful", "downcast", "melancholy"],
  fast: ["quick", "rapid", "speedy", "swift"],
  slow: ["lethargic", "sluggish", "unhurried", "lagging"],
  smart: ["intelligent", "clever", "bright", "wise"]
};

function askAI() {
  const questionInput = document.querySelector("textarea").value.trim().toLowerCase();
  const answerBox = document.getElementById("answer");

  if (questionInput === "") {
    answerBox.innerHTML = "Please type a question.";
    return;
  }

  let found = false;

  // Check SAT Math
  for (let i = 0; i < SAT_MATH_QA.length; i++) {
    if (questionInput.includes(SAT_MATH_QA[i].question.toLowerCase().split(" ")[0])) {
      answerBox.innerHTML = `<b>AI Math Hint & Approach:</b><br>${SAT_MATH_QA[i].answer.replace(/\n/g, "<br>")}`;
      found = true;
      break;
    }
  }

  // Check English Learners
  if (!found) {
    for (let i = 0; i < ENGLISH_QA.length; i++) {
      if (questionInput.includes(ENGLISH_QA[i].question)) {
        answerBox.innerHTML = `<b>AI English Tip & Error Location:</b><br>${ENGLISH_QA[i].answer.replace(/\n/g, "<br>")}`;
        found = true;
        break;
      }
    }
  }

  // Check for "synonym of"
  if (!found && questionInput.startsWith("synonym of")) {
    const word = questionInput.replace("synonym of", "").trim();
    if (SYNONYMS[word]) {
      answerBox.innerHTML = `<b>Synonyms of "${word}":</b><br>${SYNONYMS[word].join(", ")}`;
    } else {
      answerBox.innerHTML = `<b>Synonyms:</b><br>No synonyms found in the dictionary.`;
    }
    found = true;
  }

  // Default: not ready to answer unknown questions
  if (!found) {
    answerBox.innerHTML = `Sorry for inconvenience, I am not ready to answer this question yet.`;
  }
}
// Load custom dictionary from LocalStorage
let myDictionary = JSON.parse(localStorage.getItem("myDictionary")) || {};

// Function to add a new word to the dictionary
function addWord() {
    const wordInput = document.getElementById("newWord").value.trim().toLowerCase();
    const meaningInput = document.getElementById("newMeaning").value.trim();

    if (!wordInput || !meaningInput) {
        alert("Please enter both word and meaning.");
        return;
    }

    myDictionary[wordInput] = meaningInput;
    localStorage.setItem("myDictionary", JSON.stringify(myDictionary));

    alert(`Word "${wordInput}" added successfully!`);
    document.getElementById("newWord").value = "";
    document.getElementById("newMeaning").value = "";
    showDictionary();
}

// Function to show the dictionary on the page
function showDictionary() {
    const dictBox = document.getElementById("dictionaryBox");
    if (Object.keys(myDictionary).length === 0) {
        dictBox.innerHTML = "<i>No words added yet.</i>";
        return;
    }

    let html = "<ul>";
    for (let word in myDictionary) {
        html += `<li><b>${word}</b>: ${myDictionary[word]}</li>`;
    }
    html += "</ul>";
    dictBox.innerHTML = html;
}

// Optional: search a word in your dictionary
function searchWord() {
    const query = document.getElementById("searchWord").value.trim().toLowerCase();
    const resultBox = document.getElementById("searchResult");

    if (myDictionary[query]) {
        resultBox.innerHTML = `<b>${query}</b>: ${myDictionary[query]}`;
    } else {
        resultBox.innerHTML = `Word "${query}" not found in your dictionary.`;
    }
}
// Load custom dictionary from LocalStorage
let myDictionaryy = JSON.parse(localStorage.getItem("myDictionary")) || {};

// Add a new word
function addWord() {
  const wordInput = document.getElementById("newWord").value.trim().toLowerCase();
  const meaningInput = document.getElementById("newMeaning").value.trim();

  if (!wordInput || !meaningInput) {
    alert("Please enter both word and meaning.");
    return;
  }

  myDictionary[wordInput] = meaningInput;
  localStorage.setItem("myDictionary", JSON.stringify(myDictionary));

  document.getElementById("newWord").value = "";
  document.getElementById("newMeaning").value = "";
  showDictionary();
}

// Show dictionary with Edit & Delete buttons
function showDictionary() {
  const dictBox = document.getElementById("dictionaryBox");
  if (Object.keys(myDictionary).length === 0) {
    dictBox.innerHTML = "<i>No words added yet.</i>";
    return;
  }

  let html = "<ul>";
  for (let word in myDictionary) {
    html += `<li>
      <b>${word}</b>: <span id="meaning-${word}">${myDictionary[word]}</span>
      <button onclick="editWord('${word}')">Edit</button>
      <button onclick="deleteWord('${word}')">Delete</button>
    </li>`;
  }
  html += "</ul>";
  dictBox.innerHTML = html;
}

// Edit a word's meaning
function editWord(word) {
  const newMeaning = prompt(`Enter new meaning for "${word}":`, myDictionary[word]);
  if (newMeaning !== null && newMeaning.trim() !== "") {
    myDictionary[word] = newMeaning.trim();
    localStorage.setItem("myDictionary", JSON.stringify(myDictionary));
    showDictionary();
  }
}

// Delete a word
function deleteWord(word) {
  if (confirm(`Are you sure you want to delete "${word}"?`)) {
    delete myDictionary[word];
    localStorage.setItem("myDictionary", JSON.stringify(myDictionary));
    showDictionary();
  }
}

// Search a word
function searchWord() {
  const query = document.getElementById("searchWord").value.trim().toLowerCase();
  const resultBox = document.getElementById("searchResult");

  if (myDictionary[query]) {
    resultBox.innerHTML = `<b>${query}</b>: ${myDictionary[query]}`;
  } else {
    resultBox.innerHTML = `Word "${query}" not found in your dictionary.`;
  }
}

// Show dictionary on page load
showDictionary();
// Predefined answers dictionary
const QA_DICTIONARY = {
  "what is wood": "Wood is a hard, fibrous material that comes from the trunk and branches of trees.",
  "what is water": "Water is a transparent, tasteless, odorless liquid that is essential for life.",
  "what is sun": "The Sun is the star at the center of our solar system that provides light and heat to Earth."
};

// Function to answer a question
function answerQuestion() {
  const question = document.getElementById("questionInput").value.trim().toLowerCase();
  const answerOutput = document.getElementById("answerOutput");

  if (QA_DICTIONARY[question]) {
    answerOutput.textContent = QA_DICTIONARY[question];
  } else {
    answerOutput.textContent = "Sorry, I am not ready to answer this question yet.";
  }
}

