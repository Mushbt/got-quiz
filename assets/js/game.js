/*jshint esversion: 6 */

//Quiz Constant Variables
// Creates a constant variable "question" and assigns it to the element with the id "question" in the HTML document.
const question = document.querySelector('#question');
// Creates a constant variable "choices" and assigns it to an array of elements with the class "choice-text" in the HTML document.
const choices = Array.from(document.getElementsByClassName('choice-text'));
// Creates a constant variable and assigns them to element with the id "questionCounter" in the HTML document.
const questionsCounter = document.getElementById('questionCounter');
// Creates a constant variable and assigns them to element with the id "score" in the HTML document.
const scores = document.getElementById('score'); 

// Quiz Variables
// Empty object that will be updated with the current question
let currentQuestion = {};
// Boolean value that indicates whether the player can currently submit an answer
let acceptingAnswers = false;
// An integer that will be updated with the player's score
let score = 0;
// An integer that keeps track of the current question number
let questionCounter = 0;
// An empty array that will be updated with the remaining questions available for the player to answer
let availableQuestions = [];

//Quiz questions
// An array with contains objects representing questions which have a question property, 4 choices property and an answer property which coitains the index of the correct 
// answer choice.
let questions = [{ 
        question: "Winterfell is the home of which family?",
        choice1: 'Tully',
        choice2: 'Stark',
        choice3: 'Baratheon',
        choice4: 'Lannister',
        answer: 2,
    },
    {
        question: "Tyrion killed which former lover after she betrayed him at his trial?",
        choice1: 'Cersei',
        choice2: 'Arya',
        choice3: 'Sansa',
        choice4: 'Shae',
        answer: 4,
    },
    {
        question: "The Mountain and The Hound are:",
        choice1: 'Brothers',
        choice2: 'Rival claimants to the Iron Throne',
        choice3: 'On the Small Council',
        choice4: 'Cousins of the Lannisters',
        answer: 1,
    },
    {
        question: "Theon Greyjoy was given a new name by Ramsay Bolton. What was it?",
        choice1: 'Creep',
        choice2: 'Reek',
        choice3: 'Freak',
        choice4: 'Leak',
        answer: 2,
    },
    {
        question: "John Snow was born to:",
        choice1: 'Joanna Lannister',
        choice2: 'Catelyn Stark',
        choice3: 'Lyanna Stark',
        choice4: 'Melisandre',
        answer: 3,
    },
    {
        question: "'The Master of Whisperes' is:",
        choice1: 'Lord Varys',
        choice2: 'Littlefinger',
        choice3: 'Tyrion Lannister',
        choice4: 'Melisandre',
        answer: 1,
    },
    {
        question: "Benjen is:",
        choice1: "Daenerys' brother",
        choice2: "Stannis Baratheon's half brother",
        choice3: "Jon Snow's father",
        choice4: "Ned Stark's brother",
        answer: 4,
    },
    {
        question: "Ser Loras Tyrell was known as:",
        choice1: 'King of the North',
        choice2: 'Littlefinger',
        choice3: 'Kingslayer',
        choice4: 'Knight of Flowers',
        answer: 4,
    },
    {
        question: "The warrior eunuchs are known as the:",
        choice1: 'White Walkers',
        choice2: 'Septons',
        choice3: 'Unsullied',
        choice4: 'Varys',
        answer: 3,
    },
    {
        question: "Warging is:",
        choice1: 'Entering the mind of an animal',
        choice2: 'The power to create more White Walkers',
        choice3: 'A skill Arya possesses',
        choice4: "recruiting for the Night's Watch",
        answer: 1,
    },
    {
        question: "The Onion Knight is:",
        choice1: 'Brynden Tully',
        choice2: 'Davos Seaworth',
        choice3: 'Tyrion Lannister',
        choice4: 'Benjen Stark',
        answer: 2,
    },
    {
        question: "The Narrow Sea separates Essos and which continent?",
        choice1: 'Dorne',
        choice2: 'Qarth',
        choice3: 'Esteros',
        choice4: 'Westeros',
        answer: 4,
    },
    {
        question: "Who died at The Purple Wedding?",
        choice1: 'Walder Frey',
        choice2: 'Renly Baratheon',
        choice3: 'King Joffrey',
        choice4: 'Catelyn Stark',
        answer: 3,
    },
    {
        question: "How many husbands did Margaery Tyrell have?",
        choice1: '1: Joffrey',
        choice2: '2: Joffrey & Tommen',
        choice3: '3: Renly, Joffrey & Tommen',
        choice4: '4: Loras, Renly, Joffrey & Tommen',
        answer: 3,
    },
    {
        question: "A wight is:",
        choice1: 'A corpse brought back from the dead by the White Walkers',
        choice2: 'A three eyed raven',
        choice3: 'A person that can enter the mind of an animal',
        choice4: 'A type of wolf',
        answer: 1,
    },
    {
        question: "Osha was:",
        choice1: "A sex worker in one of Petyr Baelish's brothels",
        choice2: 'A wildling that assisted Bran',
        choice3: "one of the unsullied in Daenerys' army",
        choice4: "one of Walder Frey's daughters",
        answer: 2,
    },
    {
        question: "At the start of Season 1, who has just died?",
        choice1: "Ned's sister Lyanna",
        choice2: 'The Mad King',
        choice3: "Ned's brother Benjen",
        choice4: 'Jon Arryn',
        answer: 4,
    },
    {
        question: "Petyr Baelish was raised by which family?",
        choice1: 'Tully',
        choice2: 'Frey',
        choice3: 'Tarly',
        choice4: 'Stark',
        answer: 1,
    },
    {
        question: "'The Mad King' was:",
        choice1: 'Robert Baratheon',
        choice2: 'King Joffrey',
        choice3: 'Aerys II',
        choice4: 'Rhaegar Targaryen',
        answer: 3,
    },
    {
        question: "Catelyn Stark was betrothed to whom before marrying Eddard (Ned) Stark?",
        choice1: 'King Robert Baratheon',
        choice2: 'His brother Brandon Stark',
        choice3: 'Tywin Lannister',
        choice4: 'Peter Baelish',
        answer: 2,
    },
    {
        question: "The Iron Throne was made for:",
        choice1: 'King Joffrey',
        choice2: 'King Robert Baratheon',
        choice3: 'King Aerys II',
        choice4: 'King Aegon',
        answer: 4,
    },
    {
        question: "Unella was:",
        choice1: 'A Septa of the Faith of the Seven',
        choice2: 'The needlework instructor to the Stark girls',
        choice3: 'An interpreter for Daenerys',
        choice4: "Margaery's grandmother",
        answer: 1,
    },
    {
        question: "Olyvar was:",
        choice1: 'The leader at the Wall when Jon Snow joined',
        choice2: 'At the House of The Undying when Daenerys retrieved her dragons',
        choice3: 'A spy and prostitute',
        choice4: 'Killed in the explosion at the Great Sept of Baelor',
        answer: 3,
    },
    {
        question: "Which of the following is NOT one of Daenerys's dragons?",
        choice1: 'Drogon',
        choice2: 'Rhaegal',
        choice3: 'Viserion',
        choice4: 'Aegon',
        answer: 4,
    },
    {
        question: "What is the sigil of House Baratheon?",
        choice1: 'Rose',
        choice2: 'Stag',
        choice3: 'Moon',
        choice4: 'Unicorn',
        answer: 2,
    },
    {
        question: "How are Jon and Daenerys related to each other?",
        choice1: 'Mother and son',
        choice2: 'Cousins',
        choice3: 'Aunt and nephew',
        choice4: 'Brother and sister',
        answer: 3,
    },
    {
        question: "Who brought Jon Snow back from the dead?",
        choice1: 'Melisandre',
        choice2: 'The Children of the Forest',
        choice3: 'Brandon Stark',
        choice4: 'The One Eyed Raven',
        answer: 1,
    },
    {
        question: "Which of these characters was NOT killed by Arya?",
        choice1: 'Petyr Baelish',
        choice2: 'Tywin Lannister',
        choice3: 'The Night King',
        choice4: 'Walder Fray',
        answer: 2,
    },
    {
        question: "What is the seat of House Frey?",
        choice1: 'Pyke',
        choice2: 'The Eyrie',
        choice3: 'Harrenhal',
        choice4: 'The Twins',
        answer: 4,
    },
    {
        question: "Which of these characters never served as hand to a king or queen?",
        choice1: 'Ser Davos Seaworth',
        choice2: 'Jorah Mormont',
        choice3: 'Ned Stark',
        choice4: 'Tyrion Lannister',
        answer: 2,
    },
];

// Correct scores and max question variables
const CORRECT_SCORE = 1; // Constant variable used to keep track of correct score
const MAX_QUESTIONS = 10; // Constant variable used to keep track of question limit

// Start game function that initializes the game's state by setting the question counter and score variables to 0 and populates the 'available questions'
// array with questions from the 'questions' array. It then calls the 'get new question' function to load first question.
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

// Defining a getNewQuestion function that checks if there are any questions left to ask, and if not, stores the user's score in local storage and redirects them to the 
// end of game page. If there are still questions left, it increments the questionCounter, updates the UI to show the current question number, 
// selects a random question from the availableQuestions array, displays the question and its answer choices, removes the chosen question from the availableQuestions array,
// and sets a flag to indicate that the game is accepting answers.
getNewQuestion = () => {

    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('end.html');
    }
    questionCounter++;
    questionsCounter.innerText = `${questionCounter} / ${MAX_QUESTIONS}`;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

// Adding event listeners to each answer choice in the choices array that listens for a click event. When a user clicks on an answer choice, it checks if the game is
// currently accepting answers (based on the acceptingAnswers flag), and if not, does nothing. If it is accepting answers, it sets the acceptingAnswers flag to false to
// prevent the user from answering again before the next question, determines whether the user's choice was correct or not, increments the user's score if they chose correctly,
// and highlights the correct answer if they did not. It then sets a timeout to remove the highlighting and load the next question after a short delay.
choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        let classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
        const correctAnswer = choices[currentQuestion.answer - 1];
        if (classToApply === "correct") {
            incrementScore(CORRECT_SCORE);
        } else if (classToApply === "incorrect") {
            correctAnswer.parentElement.classList.add("correct");
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            correctAnswer.parentElement.classList.remove('correct');
            getNewQuestion();
        }, 1000);
    });
});

// Defining an 'incrementScore' function that adds a given number to the user's score and updates the UI to reflect the new score.
incrementScore = num => {
    score += num;
    scores.innerText = score;
};

// Calls the 'start game' function to start game.
startGame();