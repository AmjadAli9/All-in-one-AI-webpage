// Initialize the MobileNet model
let model;
async function loadModel() {
    try {
        model = await mobilenet.load();
        document.getElementById('loading').style.display = 'none';
        console.log("Model loaded successfully.");
    } catch (error) {
        console.error("Error loading the model:", error);
        alert("Failed to load the model. Please try again later.");
    }
}

loadModel();

// Elements
const imageInput = document.getElementById('imageInput');
const selectedImage = document.getElementById('selectedImage');
const resultsDiv = document.getElementById('results');
const loadingText = document.getElementById('loading');
const darkModeToggle = document.getElementById('darkModeToggle');
const homeButton = document.getElementById('homeButton');

// Event listener for file input
imageInput.addEventListener('change', async (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = async function(e) {
            selectedImage.src = e.target.result;
            selectedImage.style.display = 'block';
            loadingText.style.display = 'block';
            resultsDiv.innerHTML = '';

            try {
                // Wait for the image to load
                selectedImage.onload = async () => {
                    // Make predictions
                    const predictions = await model.classify(selectedImage);
                    loadingText.style.display = 'none';
                    displayResults(predictions);
                };
            } catch (error) {
                console.error("Error during image classification:", error);
                alert("Error during image recognition. Please try a different image.");
                loadingText.style.display = 'none';
            }
        };
        reader.readAsDataURL(file);
    }
});

// Function to display the predictions
function displayResults(predictions) {
    predictions.forEach(prediction => {
        const resultItem = document.createElement('div');
        resultItem.innerText = `${prediction.className} - ${(prediction.probability * 100).toFixed(2)}%`;
        resultsDiv.appendChild(resultItem);
    });

    if (predictions.length === 0) {
        const noResults = document.createElement('div');
        noResults.innerText = "No predictions could be made.";
        resultsDiv.appendChild(noResults);
    }
}

// Dark mode toggle
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Home button functionality
homeButton.addEventListener('click', () => {
    window.location.href = 'home.html'; // Adjust the path to your home page
});
