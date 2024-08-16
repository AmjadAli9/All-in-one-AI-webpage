document.getElementById("analyzeButton").addEventListener("click", analyzeText);
document.getElementById("toggleDarkMode").addEventListener("click", toggleDarkMode);
document.getElementById("homeButton").addEventListener("click", () => window.location.href = "home.html");

function analyzeText() {
    const inputText = document.getElementById("textInput").value;
    const doc = nlp(inputText);

    // Sentiment analysis
    const sentimentResult = document.getElementById("sentimentResult");
    const sentimentScore = doc.sentiment().out('sentiment');
    let sentiment = "Neutral";

    if (sentimentScore > 0.2) {
        sentiment = "Positive";
    } else if (sentimentScore < -0.2) {
        sentiment = "Negative";
    }

    sentimentResult.textContent = sentiment;

    // Keyword extraction
    const keywordsResult = document.getElementById("keywordsResult");
    const keywords = doc.nouns().out('array');
    keywordsResult.textContent = keywords.join(", ");
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
