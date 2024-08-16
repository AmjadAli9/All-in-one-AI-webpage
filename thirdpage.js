document.addEventListener('DOMContentLoaded', () => {
    const translateBtn = document.getElementById('translateBtn');
    const sourceText = document.getElementById('sourceText');
    const translatedText = document.getElementById('translatedText');
    const sourceLanguage = document.getElementById('sourceLanguage');
    const targetLanguage = document.getElementById('targetLanguage');

    translateBtn.addEventListener('click', () => {
        const text = sourceText.value.trim();
        const fromLang = sourceLanguage.value;
        const toLang = targetLanguage.value;

        if (!text) {
            translatedText.value = 'Please enter text to translate.';
            return;
        }

        // Call the LibreTranslate API
        fetch('https://libretranslate.de/translate', {
            method: 'POST',
            body: JSON.stringify({
                q: text,
                source: fromLang,
                target: toLang,
                format: 'text'
            }),
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json' 
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.error) {
                translatedText.value = `Error: ${data.error}`;
            } else {
                translatedText.value = data.translatedText;
            }
        })
        .catch(error => {
            translatedText.value = 'Error in translation. Please try again later.';
            console.error('Error:', error);
        });
    });
});
