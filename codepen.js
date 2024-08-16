// Function to run code in the iframe or simulate output
function runCode() {
    const language = document.getElementById('languageSelect').value;
    
    if (['html', 'css', 'js'].includes(language)) {
        const html = document.getElementById('htmlCode').value;
        const css = `<style>${document.getElementById('cssCode').value}</style>`;
        const js = document.getElementById('jsCode').value;
        const iframe = document.getElementById('preview');
        const doc = iframe.contentDocument || iframe.contentWindow.document;

        doc.open();
        doc.write(html + css + `<script>${js}<\/script>`);
        doc.close();
    } else {
        simulateExecution(language);
    }
}

// Simulate code execution for non-JS languages
function simulateExecution(language) {
    const code = document.getElementById(`${language}Code`).value;
    const iframe = document.getElementById('preview');

    // For simplicity, we will display the code in the preview iframe
    // In a real application, this would be replaced with server-side code execution
    iframe.contentDocument.open();
    iframe.contentDocument.write(`<pre>${code}</pre>`);
    iframe.contentDocument.close();
}

// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    const editors = document.querySelectorAll('.editor');

    body.classList.toggle('dark-mode');
    editors.forEach(editor => editor.classList.toggle('dark-mode'));
}

// Function to navigate to home or reset editor content
function homePage() {
    window.location.href = 'home.html';
}

// Function to reset all editors
function resetCode() {
    document.getElementById('htmlCode').value = '';
    document.getElementById('cssCode').value = '';
    document.getElementById('jsCode').value = '';
    document.getElementById('cCode').value = '';
    document.getElementById('cppCode').value = '';
    document.getElementById('pythonCode').value = '';
    runCode();
}

// Function to update editors based on the selected language
function updateEditors() {
    const selectedLanguage = document.getElementById('languageSelect').value;
    const editors = {
        html: document.getElementById('htmlCode'),
        css: document.getElementById('cssCode'),
        js: document.getElementById('jsCode'),
        c: document.getElementById('cCode'),
        cpp: document.getElementById('cppCode'),
        python: document.getElementById('pythonCode')
    };

    for (const lang in editors) {
        editors[lang].style.display = (lang === selectedLanguage) ? 'block' : 'none';
    }

    // Optionally reset the editors for better UX
    resetCode();
}

// Initialize editors based on the default selection
updateEditors();
