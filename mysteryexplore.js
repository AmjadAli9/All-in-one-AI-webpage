const regions = [
    { 
        name: "North India", 
        questions: [
            { question: "What is the capital of India?", options: ["Mumbai", "Delhi", "Kolkata", "Chennai"], answer: "Delhi" },
            { question: "Which mountain range is located in North India?", options: ["Himalayas", "Aravalli", "Vindhya", "Sahyadri"], answer: "Himalayas" },
            { question: "Which river is considered sacred in North India?", options: ["Yamuna", "Ganga", "Narmada", "Tapti"], answer: "Ganga" },
            { question: "What is the traditional attire for women in Punjab?", options: ["Sari", "Salwar Kameez", "Lehenga", "Gown"], answer: "Salwar Kameez" },
            { question: "Which city is known as the 'Pink City'?", options: ["Udaipur", "Jodhpur", "Jaipur", "Bikaner"], answer: "Jaipur" },
            { question: "What is the famous dance form of Punjab?", options: ["Bhangra", "Garba", "Kathak", "Odissi"], answer: "Bhangra" },
            { question: "Which historical monument is located in Agra?", options: ["Red Fort", "Taj Mahal", "Qutub Minar", "Charminar"], answer: "Taj Mahal" },
            { question: "Which state is known for its cuisine including dishes like 'Rogan Josh'?", options: ["Punjab", "Rajasthan", "Uttar Pradesh", "Jammu & Kashmir"], answer: "Jammu & Kashmir" },
            { question: "Which city is famous for its carpets and handicrafts?", options: ["Lucknow", "Jaipur", "Srinagar", "Amritsar"], answer: "Srinagar" },
            { question: "Which is the largest state in North India by area?", options: ["Haryana", "Punjab", "Rajasthan", "Uttarakhand"], answer: "Rajasthan" },
            { question: "Which festival is famously celebrated in Amritsar?", options: ["Diwali", "Holi", "Lohri", "Baisakhi"], answer: "Baisakhi" },
            { question: "Which is the largest freshwater lake in North India?", options: ["Wular Lake", "Dal Lake", "Sambhar Lake", "Loktak Lake"], answer: "Wular Lake" },
            { question: "What is the main language spoken in Uttarakhand?", options: ["Hindi", "Punjabi", "Kashmiri", "Urdu"], answer: "Hindi" },
            { question: "Which fort in Rajasthan is a UNESCO World Heritage site?", options: ["Amber Fort", "Jaisalmer Fort", "Chittorgarh Fort", "Mehrangarh Fort"], answer: "Jaisalmer Fort" },
            { question: "Which is the highest peak in the Indian Himalayas?", options: ["K2", "Kanchenjunga", "Nanda Devi", "Trisul"], answer: "Nanda Devi" },
            { question: "What is the main ingredient in 'Makki di Roti'?", options: ["Rice", "Wheat", "Corn", "Barley"], answer: "Corn" },
            { question: "Which city is known for its Mughal architecture?", options: ["Delhi", "Agra", "Jaipur", "Varanasi"], answer: "Agra" },
            { question: "Which festival involves a procession of Lord Jagannath?", options: ["Rath Yatra", "Diwali", "Dussehra", "Janmashtami"], answer: "Rath Yatra" },
            { question: "Which temple is known for its intricate carvings in Khajuraho?", options: ["Kandariya Mahadeva Temple", "Lingaraja Temple", "Somnath Temple", "Meenakshi Temple"], answer: "Kandariya Mahadeva Temple" },
            { question: "Which river is known as the 'Sorrow of Bihar'?", options: ["Ganga", "Kosi", "Brahmaputra", "Mahanadi"], answer: "Kosi" },
            { question: "Which city is the winter capital of Jammu & Kashmir?", options: ["Leh", "Jammu", "Srinagar", "Pahalgam"], answer: "Jammu" },
            { question: "What is the predominant religion in Ladakh?", options: ["Hinduism", "Buddhism", "Islam", "Christianity"], answer: "Buddhism" },
            { question: "Which mountain pass connects Manali to Leh?", options: ["Rohtang Pass", "Zoji La", "Baralacha La", "Khardung La"], answer: "Rohtang Pass" },
            { question: "Which state is famous for its woolen shawls and carpets?", options: ["Himachal Pradesh", "Punjab", "Jammu & Kashmir", "Uttarakhand"], answer: "Jammu & Kashmir" }
        ]
    },
    { 
        name: "South India", 
        questions: [
            { question: "Which is the largest city in South India?", options: ["Bengaluru", "Chennai", "Hyderabad", "Kochi"], answer: "Bengaluru" },
            { question: "Which dance form originated in Tamil Nadu?", options: ["Bharatanatyam", "Kathakali", "Odissi", "Kathak"], answer: "Bharatanatyam" },
            { question: "Which state is famous for its backwaters?", options: ["Kerala", "Tamil Nadu", "Andhra Pradesh", "Karnataka"], answer: "Kerala" },
            { question: "What is the main language spoken in Karnataka?", options: ["Telugu", "Tamil", "Kannada", "Malayalam"], answer: "Kannada" },
            { question: "Which temple is located in Madurai?", options: ["Meenakshi Temple", "Somnath Temple", "Jagannath Temple", "Konark Sun Temple"], answer: "Meenakshi Temple" },
            { question: "Which city is known as the 'Silicon Valley of India'?", options: ["Hyderabad", "Bengaluru", "Chennai", "Pune"], answer: "Bengaluru" },
            { question: "Which is the largest river in South India?", options: ["Krishna", "Godavari", "Cauvery", "Periyar"], answer: "Godavari" },
            { question: "Which spice is Kerala famous for producing?", options: ["Saffron", "Cardamom", "Pepper", "Cinnamon"], answer: "Pepper" },
            { question: "Which city is known for its IT industry?", options: ["Hyderabad", "Chennai", "Bengaluru", "Kochi"], answer: "Hyderabad" },
            { question: "Which festival is celebrated as the harvest festival in Kerala?", options: ["Onam", "Pongal", "Ugadi", "Diwali"], answer: "Onam" },
            { question: "Which historical site is located in Hampi?", options: ["Vijayanagara Empire", "Chola Empire", "Maurya Empire", "Gupta Empire"], answer: "Vijayanagara Empire" },
            { question: "Which is the tallest waterfall in India, located in Karnataka?", options: ["Jog Falls", "Dudhsagar Falls", "Athirappilly Falls", "Kunchikal Falls"], answer: "Kunchikal Falls" },
            { question: "Which is the main ingredient in 'Idli'?", options: ["Rice", "Wheat", "Millet", "Maize"], answer: "Rice" },
            { question: "Which city is known as the 'Detroit of India'?", options: ["Chennai", "Pune", "Mumbai", "Kolkata"], answer: "Chennai" },
            { question: "Which wildlife sanctuary is located in Kerala?", options: ["Periyar", "Kanha", "Gir", "Corbett"], answer: "Periyar" },
            { question: "Which city is known for its beaches and French architecture?", options: ["Puducherry", "Chennai", "Kochi", "Visakhapatnam"], answer: "Puducherry" },
            { question: "Which state is famous for its silk sarees?", options: ["Tamil Nadu", "Andhra Pradesh", "Karnataka", "Kerala"], answer: "Tamil Nadu" },
            { question: "Which is the main festival celebrated in Andhra Pradesh?", options: ["Pongal", "Ugadi", "Onam", "Baisakhi"], answer: "Ugadi" },
            { question: "Which city is famous for its biryani?", options: ["Chennai", "Hyderabad", "Kochi", "Bengaluru"], answer: "Hyderabad" },
            { question: "Which temple is known for its Dravidian architecture in Tamil Nadu?", options: ["Brihadeeswara Temple", "Konark Sun Temple", "Lingaraja Temple", "Kedarnath Temple"], answer: "Brihadeeswara Temple" },
            { question: "Which is the largest lake in Kerala?", options: ["Vembanad Lake", "Chilika Lake", "Sambhar Lake", "Pulicat Lake"], answer: "Vembanad Lake" },
            { question: "Which island group is located off the coast of Kerala?", options: ["Lakshadweep", "Andaman and Nicobar", "Sundarbans", "Gulf of Mannar"], answer: "Lakshadweep" },
            { question: "Which is the main ingredient in 'Dosa'?", options: ["Rice", "Wheat", "Maize", "Barley"], answer: "Rice" },
            { question: "Which state is known for its coffee plantations?", options: ["Karnataka", "Kerala", "Tamil Nadu", "Andhra Pradesh"], answer: "Karnataka" }
        ]
    },
    { 
        name: "East India", 
        questions: [
            { question: "Which state is famous for its tea gardens?", options: ["West Bengal", "Assam", "Bihar", "Odisha"], answer: "Assam" },
            { question: "Which festival is famous in West Bengal?", options: ["Durga Puja", "Onam", "Pongal", "Baisakhi"], answer: "Durga Puja" },
            { question: "Which river flows through Assam?", options: ["Ganga", "Brahmaputra", "Yamuna", "Narmada"], answer: "Brahmaputra" },
            { question: "Which is the capital of Odisha?", options: ["Bhubaneswar", "Kolkata", "Guwahati", "Patna"], answer: "Bhubaneswar" },
            { question: "Which is the famous dance form of Odisha?", options: ["Odissi", "Kathak", "Bharatanatyam", "Kuchipudi"], answer: "Odissi" },
            { question: "Which city is known as the 'City of Joy'?", options: ["Kolkata", "Patna", "Guwahati", "Bhubaneswar"], answer: "Kolkata" },
            { question: "Which wildlife sanctuary is located in Assam?", options: ["Kaziranga", "Periyar", "Gir", "Sundarbans"], answer: "Kaziranga" },
            { question: "Which is the main festival celebrated in Bihar?", options: ["Chhath Puja", "Bihu", "Durga Puja", "Diwali"], answer: "Chhath Puja" },
            { question: "Which state is famous for its handloom textiles?", options: ["Odisha", "Assam", "West Bengal", "Bihar"], answer: "Odisha" },
            { question: "Which city is known for its silk production?", options: ["Bhagalpur", "Kolkata", "Guwahati", "Bhubaneswar"], answer: "Bhagalpur" },
            { question: "Which state is known for its 'Hornbill Festival'?", options: ["Nagaland", "Manipur", "Assam", "West Bengal"], answer: "Nagaland" },
            { question: "Which is the main ingredient in 'Litti Chokha'?", options: ["Rice", "Wheat", "Barley", "Corn"], answer: "Wheat" },
            { question: "Which temple is located in Puri, Odisha?", options: ["Jagannath Temple", "Meenakshi Temple", "Somnath Temple", "Brihadeeswara Temple"], answer: "Jagannath Temple" },
            { question: "Which is the largest state in East India by area?", options: ["Odisha", "West Bengal", "Bihar", "Assam"], answer: "Odisha" },
            { question: "Which mountain range is located in Eastern India?", options: ["Eastern Ghats", "Western Ghats", "Himalayas", "Aravalli"], answer: "Eastern Ghats" },
            { question: "Which city is known for its steel production?", options: ["Jamshedpur", "Kolkata", "Bhubaneswar", "Patna"], answer: "Jamshedpur" },
            { question: "Which river is the main source of water for Kolkata?", options: ["Ganga", "Yamuna", "Brahmaputra", "Narmada"], answer: "Ganga" },
            { question: "Which state is famous for its bamboo products?", options: ["Tripura", "Assam", "Odisha", "West Bengal"], answer: "Tripura" },
            { question: "Which city is known for its terracotta temples?", options: ["Bishnupur", "Guwahati", "Patna", "Bhubaneswar"], answer: "Bishnupur" },
            { question: "Which festival involves the worship of the sun god?", options: ["Chhath Puja", "Bihu", "Durga Puja", "Pongal"], answer: "Chhath Puja" },
            { question: "Which state is known for its traditional bamboo dance?", options: ["Manipur", "Mizoram", "Nagaland", "Tripura"], answer: "Mizoram" },
            { question: "Which city is famous for its sweets like 'Sandesh' and 'Rasgulla'?", options: ["Kolkata", "Patna", "Guwahati", "Bhubaneswar"], answer: "Kolkata" },
            { question: "Which river forms the boundary between India and Bangladesh?", options: ["Ganga", "Brahmaputra", "Meghna", "Padma"], answer: "Brahmaputra" },
            { question: "Which is the main language spoken in Assam?", options: ["Assamese", "Bengali", "Odia", "Bihari"], answer: "Assamese" }
        ]
    },
    { 
        name: "West India", 
        questions: [
            { question: "Which city is known as the financial capital of India?", options: ["Mumbai", "Ahmedabad", "Jaipur", "Pune"], answer: "Mumbai" },
            { question: "Which festival is famous in Maharashtra?", options: ["Ganesh Chaturthi", "Diwali", "Holi", "Eid"], answer: "Ganesh Chaturthi" },
            { question: "Which city is famous for its textiles and diamond cutting?", options: ["Surat", "Mumbai", "Pune", "Nagpur"], answer: "Surat" },
            { question: "Which is the largest state in West India by area?", options: ["Gujarat", "Maharashtra", "Rajasthan", "Goa"], answer: "Rajasthan" },
            { question: "Which is the main language spoken in Goa?", options: ["Konkani", "Marathi", "Gujarati", "Hindi"], answer: "Konkani" },
            { question: "Which wildlife sanctuary is located in Gujarat?", options: ["Gir National Park", "Corbett National Park", "Kanha National Park", "Sundarbans"], answer: "Gir National Park" },
            { question: "Which city is known for its palaces and forts?", options: ["Udaipur", "Ahmedabad", "Mumbai", "Surat"], answer: "Udaipur" },
            { question: "Which state is famous for its handicrafts and bandhani fabric?", options: ["Gujarat", "Maharashtra", "Goa", "Rajasthan"], answer: "Gujarat" },
            { question: "Which festival is celebrated as the kite festival in Gujarat?", options: ["Uttarayan", "Holi", "Diwali", "Navratri"], answer: "Uttarayan" },
            { question: "Which is the main ingredient in 'Pav Bhaji'?", options: ["Potato", "Rice", "Wheat", "Barley"], answer: "Potato" },
            { question: "Which city is known for its film industry?", options: ["Mumbai", "Ahmedabad", "Pune", "Nagpur"], answer: "Mumbai" },
            { question: "Which historical site is located in Aurangabad, Maharashtra?", options: ["Ajanta and Ellora Caves", "Konark Sun Temple", "Meenakshi Temple", "Hampi"], answer: "Ajanta and Ellora Caves" },
            { question: "Which is the main festival celebrated in Rajasthan?", options: ["Diwali", "Navratri", "Makar Sankranti", "Dussehra"], answer: "Navratri" },
            { question: "Which city is known as the 'City of Lakes'?", options: ["Udaipur", "Pune", "Ahmedabad", "Nagpur"], answer: "Udaipur" },
            { question: "Which river flows through Gujarat?", options: ["Tapti", "Mahi", "Sabarmati", "Godavari"], answer: "Sabarmati" },
            { question: "Which is the main language spoken in Rajasthan?", options: ["Rajasthani", "Gujarati", "Marathi", "Hindi"], answer: "Hindi" },
            { question: "Which temple is located on the Somnath coast in Gujarat?", options: ["Somnath Temple", "Meenakshi Temple", "Konark Sun Temple", "Jagannath Temple"], answer: "Somnath Temple" },
            { question: "Which city is known for its street food and nightlife?", options: ["Mumbai", "Pune", "Ahmedabad", "Nagpur"], answer: "Mumbai" },
            { question: "Which dance form is popular in Maharashtra?", options: ["Lavani", "Garba", "Bharatanatyam", "Odissi"], answer: "Lavani" },
            { question: "Which is the main language spoken in Gujarat?", options: ["Gujarati", "Marathi", "Hindi", "Konkani"], answer: "Gujarati" },
            { question: "Which city is famous for its white marble architecture?", options: ["Udaipur", "Jaipur", "Jodhpur", "Ajmer"], answer: "Udaipur" },
            { question: "Which wildlife sanctuary is located in Rajasthan?", options: ["Ranthambore", "Gir", "Periyar", "Sundarbans"], answer: "Ranthambore" },
            { question: "Which state is known for its mangoes and sugarcane?", options: ["Maharashtra", "Gujarat", "Goa", "Rajasthan"], answer: "Maharashtra" },
            { question: "Which city is known for its silk and cotton textiles?", options: ["Surat", "Ahmedabad", "Mumbai", "Pune"], answer: "Surat" }
        ]
    }
];

let currentRegionIndex = 0;
let currentQuestionIndex = 0;
let score = 0;
let hintUsed = false;
let currentRegion = regions[currentRegionIndex];
let currentQuestion = currentRegion.questions[currentQuestionIndex];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const feedbackElement = document.getElementById("feedback");
const scoreElement = document.getElementById("score");
const hintButton = document.getElementById("hintButton");
const hintElement = document.getElementById("hint");
const nextButton = document.getElementById("nextButton");
const regionElement = document.getElementById("region");
const progressElement = document.getElementById("progress");

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function displayQuestion() {
    const regionName = currentRegion.name;
    const questionText = currentQuestion.question;
    const options = currentQuestion.options;
    regionElement.textContent = `Region: ${regionName}`;
    questionElement.textContent = questionText;
    optionsElement.innerHTML = "";
    feedbackElement.textContent = "";
    hintElement.textContent = "";
    progressElement.textContent = `Question ${currentQuestionIndex + 1} of ${currentRegion.questions.length}`;

    shuffleArray(options);

    options.forEach(option => {
        const optionButton = document.createElement("button");
        optionButton.textContent = option;
        optionButton.classList.add("option-button");
        optionButton.addEventListener("click", () => checkAnswer(option));
        optionsElement.appendChild(optionButton);
    });

    hintUsed = false;
    hintButton.disabled = false;
}

function checkAnswer(selectedOption) {
    const correctAnswer = currentQuestion.answer;
    if (selectedOption === correctAnswer) {
        feedbackElement.textContent = "Correct!";
        score++;
        scoreElement.textContent = `Score: ${score}`;
        showNextButton();
    } else {
        feedbackElement.textContent = `Wrong! The correct answer is: ${correctAnswer}`;
        showNextButton();
    }
    disableOptions();
}

function disableOptions() {
    const optionButtons = document.querySelectorAll(".option-button");
    optionButtons.forEach(button => {
        button.disabled = true;
    });
    hintButton.disabled = true;
}

function showNextButton() {
    nextButton.style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentRegion.questions.length) {
        currentQuestion = currentRegion.questions[currentQuestionIndex];
        displayQuestion();
        nextButton.style.display = "none";
    } else {
        feedbackElement.textContent = "Congratulations! You've completed this region.";
        nextButton.style.display = "none";
    }
}

function useHint() {
    if (!hintUsed) {
        hintElement.textContent = `Hint: The answer starts with '${currentQuestion.answer.charAt(0)}'.`;
        hintUsed = true;
        hintButton.disabled = true;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    displayQuestion();
    hintButton.addEventListener("click", useHint);
    nextButton.addEventListener("click", nextQuestion);
});
