const textInput = document.getElementById('textInput');
const speakButton = document.getElementById('speakButton');
const stopButton = document.getElementById('stopButton');
const voiceSelect = document.getElementById('voiceSelect');
const pitchSlider = document.getElementById('pitch');
const rateSlider = document.getElementById('rate');
const pitchValue = document.getElementById('pitchValue');
const rateValue = document.getElementById('rateValue');
const statusElement = document.getElementById('status');
const toggleThemeButton = document.getElementById('toggleThemeButton');

let synth = window.speechSynthesis;
let voices = [];

function populateVoiceList() {
    voices = synth.getVoices();
    voiceSelect.innerHTML = '';

    const languageGroups = {};

    voices.forEach((voice) => {
        if (!languageGroups[voice.lang]) {
            languageGroups[voice.lang] = [];
        }
        languageGroups[voice.lang].push(voice);
    });

    Object.keys(languageGroups).forEach((lang) => {
        const optgroup = document.createElement('optgroup');
        optgroup.label = lang;
        
        languageGroups[lang].forEach((voice, i) => {
            const option = document.createElement('option');
            option.textContent = `${voice.name} (${voice.lang})`;
            option.value = voices.indexOf(voice);
            optgroup.appendChild(option);
        });

        voiceSelect.appendChild(optgroup);
    });
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
}

function speak() {
    if (synth.speaking) {
        console.error('SpeechSynthesis is already speaking.');
        return;
    }

    if (textInput.value !== '') {
        const utterThis = new SpeechSynthesisUtterance(textInput.value);
        utterThis.onend = () => {
            statusElement.innerText = 'Speech finished.';
        };
        utterThis.onerror = (event) => {
            console.error('SpeechSynthesisUtterance.onerror:', event);
            statusElement.innerText = 'Error occurred during speech.';
        };

        const selectedVoice = voices[voiceSelect.value];
        utterThis.voice = selectedVoice;
        utterThis.pitch = pitchSlider.value;
        utterThis.rate = rateSlider.value;

        synth.speak(utterThis);
        statusElement.innerText = 'Speaking...';
    } else {
        statusElement.innerText = 'Please enter text to speak.';
    }
}

speakButton.addEventListener('click', () => {
    speak();
});

stopButton.addEventListener('click', () => {
    if (synth.speaking) {
        synth.cancel();
        statusElement.innerText = 'Speech stopped.';
    }
});

pitchSlider.addEventListener('input', () => {
    pitchValue.textContent = pitchSlider.value;
});

rateSlider.addEventListener('input', () => {
    rateValue.textContent = rateSlider.value;
});

toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
