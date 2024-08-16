// Questions for different difficulty levels
const easyQuestions = [
    { question: "5 + 3", options: ["6", "8", "9", "7"], answer: "8", hint: "It's 5 plus 3." },
    { question: "12 / 4", options: ["3", "4", "6", "2"], answer: "3", hint: "Divide 12 by 4." },
    { question: "7 * 6", options: ["42", "36", "48", "40"], answer: "42", hint: "Seven times six." },
    { question: "15 - 7", options: ["8", "9", "6", "7"], answer: "8", hint: "Subtract 7 from 15." },
    { question: "9 + 6", options: ["14", "15", "16", "13"], answer: "15", hint: "Nine plus six." },
    { question: "3 + 7", options: ["8", "9", "10", "11"], answer: "10", hint: "Three plus seven." },
    { question: "10 - 3", options: ["7", "8", "6", "9"], answer: "7", hint: "Ten minus three." },
    { question: "6 + 4", options: ["8", "9", "10", "11"], answer: "10", hint: "Six plus four." },
    { question: "8 * 2", options: ["14", "16", "18", "20"], answer: "16", hint: "Eight times two." },
    { question: "9 / 3", options: ["2", "3", "4", "5"], answer: "3", hint: "Divide nine by three." },
];

const mediumQuestions = [
    { question: "12 * 9", options: ["108", "109", "107", "106"], answer: "108", hint: "Twelve times nine." },
    { question: "81 / 9", options: ["9", "8", "7", "6"], answer: "9", hint: "Divide 81 by 9." },
    { question: "25 + 17", options: ["41", "42", "43", "40"], answer: "42", hint: "Add 25 and 17." },
    { question: "100 - 37", options: ["63", "64", "65", "62"], answer: "63", hint: "Subtract 37 from 100." },
    { question: "49 / 7", options: ["7", "6", "8", "9"], answer: "7", hint: "Divide 49 by 7." },
    { question: "18 * 2", options: ["36", "38", "34", "32"], answer: "36", hint: "Eighteen times two." },
    { question: "50 - 23", options: ["27", "28", "29", "30"], answer: "27", hint: "Subtract 23 from 50." },
    { question: "144 / 12", options: ["12", "11", "10", "13"], answer: "12", hint: "Divide 144 by 12." },
    { question: "32 + 21", options: ["52", "53", "54", "55"], answer: "53", hint: "Add 32 and 21." },
    { question: "27 * 3", options: ["81", "82", "83", "84"], answer: "81", hint: "Twenty-seven times three." },
];

const hardQuestions = [
    { question: "99 * 9", options: ["891", "990", "999", "881"], answer: "891", hint: "Ninety-nine times nine." },
    { question: "243 / 3", options: ["81", "80", "79", "82"], answer: "81", hint: "Divide 243 by 3." },
    { question: "144 + 256", options: ["400", "401", "399", "398"], answer: "400", hint: "Add 144 and 256." },
    { question: "625 / 25", options: ["25", "24", "26", "27"], answer: "25", hint: "Divide 625 by 25." },
    { question: "18 * 14", options: ["252", "251", "253", "254"], answer: "252", hint: "Eighteen times fourteen." },
    { question: "345 - 128", options: ["217", "218", "216", "219"], answer: "217", hint: "Subtract 128 from 345." },
    { question: "540 / 9", options: ["60", "59", "58", "61"], answer: "60", hint: "Divide 540 by 9." },
    { question: "78 * 6", options: ["468", "469", "470", "467"], answer: "468", hint: "Seventy-eight times six." },
    { question: "812 / 4", options: ["203", "202", "201", "204"], answer: "203", hint: "Divide 812 by 4." },
    { question: "99 * 8", options: ["792", "793", "794", "791"], answer: "792", hint: "Ninety-nine times eight." },
];

// Game variables
let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 60;
let hintUsed = false;

// DOM elements
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const feedbackElement = document.getElementById('feedback');
const hintButton = document.getElementById('hintButton');
const hintElement = document.getElementById('hint');
const nextButton = document.getElementById('nextButton');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const homeButton = document.getElementById('homeButton');
const darkModeToggle = document.getElementById('darkModeToggle');

// Function to start the game
function startGame() {
    const difficulty = document.getElementById('difficulty').value;
    switch (difficulty) {
        case 'easy':
            questions = easyQuestions;
            break;
        case 'medium':
            questions = mediumQuestions;
            break;
        case 'hard':
            questions = hardQuestions;
            break;
    }

    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 60;
    scoreElement.textContent = `Score: ${score}`;
    startTimer();
    loadQuestion();

    document.getElementById('difficulty-container').style.display = 'none';
    document.getElementById('game-info').style.display = 'block';
    document.getElementById('question-container').style.display = 'block';
    homeButton.style.display = 'inline-block';
}

// Function to load the current question
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn');
        button.addEventListener('click', () => checkAnswer(option));
        optionsElement.appendChild(button);
    });

    feedbackElement.textContent = '';
    hintButton.style.display = 'inline-block';
}

// Function to check the selected answer
function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score += 10;
        feedbackElement.textContent = 'Correct!';
        feedbackElement.style.color = 'green';
    } else {
        feedbackElement.textContent = `Wrong! The correct answer is ${currentQuestion.answer}.`;
        feedbackElement.style.color = 'red';
    }
    scoreElement.textContent = `Score: ${score}`;
    nextButton.style.display = 'inline-block';
    hintButton.style.display = 'none';
}

// Function to use a hint
hintButton.addEventListener('click', () => {
    hintUsed = true;
    const currentQuestion = questions[currentQuestionIndex];
    hintElement.textContent = currentQuestion.hint;
    hintElement.style.display = 'block';
    hintButton.style.display = 'none';
});

// Function to go to the next question
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        nextButton.style.display = 'none';
        hintElement.style.display = 'none';
        hintUsed = false;
    } else {
        endGame();
    }
});

// Function to start the timer
function startTimer() {
    const timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft}`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}

// Function to end the game
function endGame() {
    questionElement.textContent = 'Game Over!';
    optionsElement.innerHTML = '';
    feedbackElement.textContent = `Your final score is ${score}.`;
    nextButton.style.display = 'none';
    hintButton.style.display = 'none';
}

// Dark mode toggle functionality
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Home button functionality
homeButton.addEventListener('click', () => {
    document.getElementById('difficulty-container').style.display = 'block';
    document.getElementById('game-info').style.display = 'none';
    document.getElementById('question-container').style.display = 'none';
    homeButton.style.display = 'none';
});

// Start button event listener
startButton.addEventListener('click', startGame);
