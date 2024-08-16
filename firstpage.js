const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const clearButton = document.getElementById('clearButton');
const toggleThemeButton = document.getElementById('toggleThemeButton');
const languageSelect = document.getElementById('languageSelect');
const transcriptElement = document.getElementById('transcript');
const statusElement = document.getElementById('status');

let recognition;
let isListening = false;

if (!('SpeechRecognition' in window) && !('webkitSpeechRecognition' in window)) {
    alert('Your browser does not support the Web Speech API. Please use a compatible browser.');
} else {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
}

recognition.continuous = true;
recognition.interimResults = true;
recognition.maxAlternatives = 1;

recognition.onresult = (event) => {
    let interimTranscript = '';
    let finalTranscript = '';

    for (let i = 0; i < event.results.length; i++) {
        const transcriptPart = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
            finalTranscript += transcriptPart;
        } else {
            interimTranscript += transcriptPart;
        }
    }

    transcriptElement.innerText = finalTranscript + interimTranscript;
};

recognition.onstart = () => {
    statusElement.innerText = 'Listening...';
    startButton.disabled = true;
    stopButton.disabled = false;
};

recognition.onend = () => {
    statusElement.innerText = 'Stopped listening.';
    startButton.disabled = false;
    stopButton.disabled = true;
    isListening = false;
};

recognition.onerror = (event) => {
    console.error('Speech recognition error detected:', event.error);
    statusElement.innerText = `Error: ${event.error}`;
};

startButton.addEventListener('click', () => {
    if (!isListening) {
        recognition.lang = languageSelect.value;
        recognition.start();
        isListening = true;
    }
});

stopButton.addEventListener('click', () => {
    if (isListening) {
        recognition.stop();
        isListening = false;
    }
});

clearButton.addEventListener('click', () => {
    transcriptElement.innerText = '';
});

toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
