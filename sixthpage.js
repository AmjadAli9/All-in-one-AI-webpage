const questions = [
    { statement: "The Earth is flat.", answer: false, explanation: "The Earth is an oblate spheroid, not flat." },
    { statement: "Lightning never strikes the same place twice.", answer: false, explanation: "Lightning can strike the same place multiple times." },
    { statement: "Humans have more than five senses.", answer: true, explanation: "In addition to the basic five senses, humans can also sense balance, temperature, and more." },
    { statement: "Goldfish only have a three-second memory.", answer: false, explanation: "Goldfish have a memory span of months." },
    { statement: "There are more stars in the universe than grains of sand on all the world's beaches.", answer: true, explanation: "There are estimated to be more stars in the universe than grains of sand on Earth." },
    { statement: "Bananas grow on trees.", answer: false, explanation: "Bananas grow on large herbaceous plants, not trees." },
    { statement: "An octopus has three hearts.", answer: true, explanation: "An octopus does indeed have three hearts." },
    { statement: "Your fingernails grow faster than your toenails.", answer: true, explanation: "Fingernails grow faster because they are used more frequently." },
    { statement: "Bulls are enraged by the color red.", answer: false, explanation: "Bulls are colorblind to red; they react to the motion of the cape." },
    { statement: "A day on Venus is longer than a year on Venus.", answer: true, explanation: "Venus has a very slow rotation on its axis, making a day longer than its orbit around the Sun." },
    { statement: "The Great Wall of China is visible from space.", answer: false, explanation: "The Great Wall is not visible to the naked eye from space without aid." },
    { statement: "Sharks are mammals.", answer: false, explanation: "Sharks are a type of fish." },
    { statement: "Venus is the hottest planet in the solar system.", answer: true, explanation: "Venus has a thick atmosphere that traps heat, making it hotter than Mercury." },
    { statement: "The Mona Lisa has no eyebrows.", answer: true, explanation: "Leonardo da Vinci painted the Mona Lisa without eyebrows." },
    { statement: "Dogs can see in color.", answer: true, explanation: "Dogs see in a limited color spectrum, mostly blues and yellows." },
    { statement: "The human body has four lungs.", answer: false, explanation: "The human body has two lungs." },
    { statement: "Octopuses have more than one brain.", answer: true, explanation: "Octopuses have one central brain and a cluster of nerve cells in each arm that controls movement." },
    { statement: "Water boils at 100 degrees Celsius everywhere.", answer: false, explanation: "Water boils at different temperatures depending on atmospheric pressure." },
    { statement: "Mount Everest is the tallest mountain in the world.", answer: true, explanation: "Mount Everest is the tallest mountain above sea level." },
    { statement: "Humans can breathe and swallow at the same time.", answer: false, explanation: "Humans cannot breathe and swallow simultaneously." },
    { statement: "Basketball was invented in Canada.", answer: false, explanation: "Basketball was invented in the United States by James Naismith, who was Canadian." },
    { statement: "The Olympic Games are held every two years.", answer: false, explanation: "The Olympic Games are held every four years, alternating between Summer and Winter Games." },
    { statement: "Soccer is the most popular sport in the world.", answer: true, explanation: "Soccer is the most popular sport worldwide, with millions of fans and players." },
    { statement: "The Tour de France is a car race.", answer: false, explanation: "The Tour de France is a prestigious cycling race." },
    { statement: "The first modern Olympic Games were held in Athens.", answer: true, explanation: "The first modern Olympic Games were held in Athens, Greece, in 1896." },
    { statement: "Cricket is a sport played with a bat and a ball.", answer: true, explanation: "Cricket involves hitting a ball with a bat to score runs." },
    { statement: "A marathon is exactly 26 miles long.", answer: false, explanation: "A marathon is 26.2 miles (42.195 kilometers) long." },
    { statement: "The FIFA World Cup is held every six years.", answer: false, explanation: "The FIFA World Cup is held every four years." },
    { statement: "Tennis matches are played on different surfaces.", answer: true, explanation: "Tennis is played on grass, clay, and hard courts." },
    { statement: "Baseball originated in Japan.", answer: false, explanation: "Baseball originated in the United States." },
    { statement: "India is the largest democracy in the world.", answer: true, explanation: "India has the largest number of eligible voters among democracies worldwide." },
    { statement: "The national animal of India is the Bengal tiger.", answer: true, explanation: "The Bengal tiger is the national animal of India." },
    { statement: "Hindi is the only official language of India.", answer: false, explanation: "India has two official languages at the national level: Hindi and English." },
    { statement: "The Taj Mahal is located in Mumbai.", answer: false, explanation: "The Taj Mahal is located in Agra, India." },
    { statement: "The Ganges is the longest river in India.", answer: true, explanation: "The Ganges is the longest river in India, flowing over 2,500 km." },
    { statement: "India has 29 states and 7 Union Territories.", answer: false, explanation: "India has 28 states and 8 Union Territories." },
    { statement: "The Indian national flag has three colors.", answer: true, explanation: "The Indian flag has saffron, white, and green stripes with a blue Ashoka Chakra in the center." },
    { statement: "Bollywood produces more films annually than Hollywood.", answer: true, explanation: "Bollywood produces more films each year than Hollywood." },
    { statement: "Rashtrapati Bhavan is the residence of the Prime Minister of India.", answer: false, explanation: "Rashtrapati Bhavan is the residence of the President of India." },
    { statement: "The Lotus Temple is a Bahá'í House of Worship located in New Delhi.", answer: true, explanation: "The Lotus Temple in New Delhi is a Bahá'í House of Worship known for its flowerlike shape." },
    { statement: "Napoleon was extremely tall.", isTrue: false, explanation: "Napoleon was actually about average height for his time." },
    { statement: "The Great Wall of China can be seen from space with the naked eye.", isTrue: false, explanation: "This is a myth; the Great Wall is not visible from space without aid." },
    { statement: "Julius Caesar was the first Roman Emperor.", isTrue: false, explanation: "Julius Caesar was a dictator but never an emperor; Augustus was the first Roman Emperor." },
    { statement: "The United States declared independence in 1776.", isTrue: true, explanation: "The Declaration of Independence was adopted on July 4, 1776." },
    { statement: "The Berlin Wall fell in 1989.", isTrue: true, explanation: "The Berlin Wall was dismantled starting on November 9, 1989." },
    { statement: "Cleopatra was Egyptian.", isTrue: false, explanation: "Cleopatra was of Macedonian Greek origin, part of the Ptolemaic dynasty." },
    { statement: "The Hundred Years' War lasted 116 years.", isTrue: true, explanation: "The war lasted from 1337 to 1453, totaling 116 years." },
    { statement: "The Titanic sank on its maiden voyage.", isTrue: true, explanation: "The Titanic sank on its maiden voyage in 1912 after hitting an iceberg." },
    { statement: "The French Revolution began in 1789.", isTrue: true, explanation: "The French Revolution began in 1789, leading to the rise of the French Republic." },
    { statement: "The Rosetta Stone helped decipher Egyptian hieroglyphs.", isTrue: true, explanation: "The Rosetta Stone contained the same text in Greek, Demotic, and hieroglyphs, helping scholars decode the ancient script." },
    { statement: "The Beatles were originally called 'The Quarrymen'.", isTrue: true, explanation: "The Beatles were originally formed as 'The Quarrymen' by John Lennon." },
    { statement: "Elvis Presley won three Grammy Awards.", isTrue: true, explanation: "Despite his fame, Elvis only won three competitive Grammy Awards." },
    { statement: "Harry Potter's middle name is James.", isTrue: true, explanation: "Harry Potter's full name is Harry James Potter." },
    { statement: "The character 'Mario' first appeared in Donkey Kong.", isTrue: true, explanation: "Mario first appeared in the 1981 arcade game Donkey Kong." },
    { statement: "Mickey Mouse was Walt Disney's first character.", isTrue: false, explanation: "Walt Disney's first cartoon character was Oswald the Lucky Rabbit." },
    { statement: "J.K. Rowling wrote under the pen name Robert Galbraith.", isTrue: true, explanation: "J.K. Rowling wrote the Cormoran Strike series under the pseudonym Robert Galbraith." },
    { statement: "The TV show Friends was set in New York City.", isTrue: true, explanation: "Friends was set in New York City, primarily in Manhattan." },
    { statement: "Michael Jackson was known as the 'King of Pop'.", isTrue: true, explanation: "Michael Jackson was often referred to as the 'King of Pop' for his influence on music and dance." },
    { statement: "Frozen's 'Let It Go' won an Academy Award for Best Original Song.", isTrue: true, explanation: "The song 'Let It Go' from Frozen won the Oscar for Best Original Song in 2014." },
    { statement: "Star Wars was created by Steven Spielberg.", isTrue: false, explanation: "Star Wars was created by George Lucas." },
    { statement: "The Olympics are held every three years.", isTrue: false, explanation: "The Olympic Games are held every four years." },
    { statement: "Roger Federer has won 20 Grand Slam singles titles.", isTrue: true, explanation: "Roger Federer has won 20 Grand Slam singles titles during his career." },
    { statement: "The FIFA World Cup is held every two years.", isTrue: false, explanation: "The FIFA World Cup is held every four years." },
    { statement: "Basketball was invented in 1891.", isTrue: true, explanation: "Basketball was invented by James Naismith in 1891." },
    { statement: "Usain Bolt holds the record for the fastest 100m sprint.", isTrue: true, explanation: "Usain Bolt set the world record for the 100m sprint at 9.58 seconds in 2009." },
    { statement: "The Stanley Cup is awarded in soccer.", isTrue: false, explanation: "The Stanley Cup is awarded in professional ice hockey." },
    { statement: "Golf originated in Scotland.", isTrue: true, explanation: "Golf is widely believed to have originated in Scotland during the Middle Ages." },
    { statement: "The Tour de France is a cycling race.", isTrue: true, explanation: "The Tour de France is one of the most prestigious cycling races in the world." },
    { statement: "The Super Bowl is the championship game of the NFL.", isTrue: true, explanation: "The Super Bowl is the annual championship game of the National Football League (NFL)." },
    { statement: "The FIFA World Cup was first held in 1930.", isTrue: true, explanation: "The first FIFA World Cup was held in 1930 in Uruguay." },
];

let currentQuestionIndex = 0;
let score = 0;
let streak = 0;
let darkMode = false;

// Initialize the game
window.onload = function() {
    loadQuestion();
    document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);
};

// Function to load the current question
function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('questionText').textContent = question.statement;
    document.getElementById('explanationText').classList.add('hidden');
    document.getElementById('nextButton').classList.add('hidden');
}

// Function to check the answer
function checkAnswer(isTrue) {
    const question = questions[currentQuestionIndex];
    const explanationElement = document.getElementById('explanationText');
    explanationElement.textContent = question.explanation;

    if (isTrue === question.answer) {
        score++;
        streak++;
        explanationElement.style.color = 'green';
    } else {
        streak = 0;
        explanationElement.style.color = 'red';
    }

    updateScoreBoard();
    explanationElement.classList.remove('hidden');
    document.getElementById('nextButton').classList.remove('hidden');
}

// Function to update the score and streak
function updateScoreBoard() {
    document.getElementById('score').textContent = score;
    document.getElementById('streak').textContent = streak;
}

// Function to move to the next question
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
        currentQuestionIndex = 0;
    }
    loadQuestion();
}

// Function to toggle dark mode
function toggleDarkMode() {
    darkMode = !darkMode;
    document.body.classList.toggle('dark-mode', darkMode);
}

// Function to go to the home page
function goHome() {
    window.location.href = 'home.html'; // Change to your home page URL
}
