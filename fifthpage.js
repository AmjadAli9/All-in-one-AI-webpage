
document.addEventListener('DOMContentLoaded', () => {
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');
    const nextButton = document.getElementById('next-button');
    const resultElement = document.getElementById('result');

    let currentQuestionIndex = 0;
    let questions = [];
    let score = 0;

    async function fetchQuestions() {
        const response = await fetch('https://opentdb.com/api.php?amount=10&type=multiple');
        const data = await response.json();
        questions = data.results;
        displayQuestion();
    }

    function displayQuestion() {
        clearState();
        const questionData = questions[currentQuestionIndex];
        questionElement.textContent = decodeHtml(questionData.question);

        const answers = [...questionData.incorrect_answers, questionData.correct_answer];
        answers.sort(() => Math.random() - 0.5); // Shuffle answers

        answers.forEach(answer => {
            const button = document.createElement('button');
            button.textContent = decodeHtml(answer);
            button.addEventListener('click', () => selectAnswer(button, questionData.correct_answer));
            answersElement.appendChild(button);
        });
    }

    function selectAnswer(selectedButton, correctAnswer) {
        const buttons = answersElement.querySelectorAll('button');
        buttons.forEach(button => {
            button.disabled = true;
            if (button.textContent === decodeHtml(correctAnswer)) {
                button.classList.add('correct');
            } else {
                button.classList.add('wrong');
            }
        });

        if (selectedButton.textContent === decodeHtml(correctAnswer)) {
            score++;
        }

        resultElement.textContent = `Score: ${score} / ${questions.length}`;
        nextButton.classList.remove('hidden');
    }

    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            questionElement.textContent = 'Quiz completed!';
            nextButton.textContent = 'Restart';
            nextButton.addEventListener('click', () => {
                currentQuestionIndex = 0;
                score = 0;
                nextButton.textContent = 'Next Question';
                fetchQuestions();
            });
        }
        nextButton.classList.add('hidden');
    });

    function clearState() {
        while (answersElement.firstChild) {
            answersElement.removeChild(answersElement.firstChild);
        }
        nextButton.classList.add('hidden');
    }

    function decodeHtml(html) {
        const txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }

    fetchQuestions();
});
