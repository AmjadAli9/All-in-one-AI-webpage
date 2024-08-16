let model;
const imageInput = document.getElementById('imageInput');
const selectedImage = document.getElementById('selectedImage');
const recognizeButton = document.getElementById('recognizeButton');
const detectionResults = document.getElementById('detectionResults');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const toggleModeButton = document.getElementById('toggleModeButton');
const homeButton = document.getElementById('homeButton');
const loader = document.createElement('div');

// Add a loader for better user feedback during recognition
loader.className = 'loader';
loader.innerHTML = 'Loading...';
document.body.appendChild(loader);
loader.style.display = 'none';

// Load the TensorFlow model
async function loadModel() {
    try {
        loader.style.display = 'block';
        model = await cocoSsd.load();
        console.log('Model loaded successfully');
        loader.style.display = 'none';
    } catch (error) {
        console.error('Error loading model:', error);
        alert('Failed to load model. Please try refreshing the page.');
    }
}

// Handle image upload
imageInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        selectedImage.src = e.target.result;
        selectedImage.onload = () => {
            // Resize the canvas to match the image size
            canvas.width = selectedImage.width;
            canvas.height = selectedImage.height;
            ctx.drawImage(selectedImage, 0, 0);
            selectedImage.style.display = 'block';
        };
    };
    reader.readAsDataURL(file);
});

// Recognize objects
recognizeButton.addEventListener('click', async () => {
    if (selectedImage.src) {
        try {
            loader.style.display = 'block';
            const predictions = await model.detect(selectedImage);
            loader.style.display = 'none';
            detectionResults.innerHTML = '';
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(selectedImage, 0, 0);

            predictions.forEach(prediction => {
                const [x, y, width, height] = prediction.bbox;
                ctx.strokeStyle = '#00FF00';
                ctx.lineWidth = 2;
                ctx.strokeRect(x, y, width, height);
                ctx.fillStyle = '#00FF00';
                ctx.font = '16px Arial';
                ctx.fillText(
                    `${prediction.class} (${Math.round(prediction.score * 100)}%)`,
                    x, y > 10 ? y - 5 : y + 20
                );
                const listItem = document.createElement('li');
                listItem.textContent = `${prediction.class} - ${Math.round(prediction.score * 100)}% confidence`;
                detectionResults.appendChild(listItem);
            });

            if (predictions.length === 0) {
                const listItem = document.createElement('li');
                listItem.textContent = 'No objects detected. Please try another image.';
                detectionResults.appendChild(listItem);
            }
        } catch (error) {
            loader.style.display = 'none';
            console.error('Error during recognition:', error);
            alert('An error occurred during object recognition. Please try again.');
        }
    } else {
        alert('Please upload an image first.');
    }
});

// Toggle dark mode
toggleModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Home button functionality
homeButton.addEventListener('click', () => {
    window.location.href = 'home.html'; // Adjust the path to your home page
});

// Load the model when the page loads
window.onload = loadModel;
