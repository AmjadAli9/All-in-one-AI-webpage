function solveMath() {
    const input = document.getElementById('mathInput').value;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    try {
        const result = math.evaluate(input);
        katex.render(math.format(result, { precision: 14 }), resultDiv, {
            throwOnError: false
        });
    } catch (error) {
        resultDiv.textContent = 'Error: ' + error.message;
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function goHome() {
    window.location.href = 'home.html';
}
