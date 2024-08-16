function generateCode() {
    const description = document.getElementById('description').value.toLowerCase().trim();
    let code = '';

    // JavaScript code generation
    if (description.includes('add two numbers')) {
        code = `
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(5, 10)); // Output: 15`;
    } else if (description.includes('multiply two numbers')) {
        code = `
function multiplyNumbers(a, b) {
    return a * b;
}
console.log(multiplyNumbers(5, 10)); // Output: 50`;
    } else if (description.includes('subtract two numbers')) {
        code = `
function subtractNumbers(a, b) {
    return a - b;
}
console.log(subtractNumbers(10, 5)); // Output: 5`;
    } else if (description.includes('divide two numbers')) {
        code = `
function divideNumbers(a, b) {
    if (b === 0) {
        return 'Cannot divide by zero';
    }
    return a / b;
}
console.log(divideNumbers(10, 2)); // Output: 5`;
    } else if (description.includes('check if number is even')) {
        code = `
function isEven(number) {
    return number % 2 === 0;
}
console.log(isEven(4)); // Output: true`;
    } else if (description.includes('check if number is odd')) {
        code = `
function isOdd(number) {
    return number % 2 !== 0;
}
console.log(isOdd(3)); // Output: true`;
    } else if (description.includes('find maximum of two numbers')) {
        code = `
function findMax(a, b) {
    return a > b ? a : b;
}
console.log(findMax(10, 20)); // Output: 20`;
    } else if (description.includes('find minimum of two numbers')) {
        code = `
function findMin(a, b) {
    return a < b ? a : b;
}
console.log(findMin(10, 20)); // Output: 10`;
    } else if (description.includes('calculate factorial')) {
        code = `
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120`;
    } else if (description.includes('generate fibonacci sequence')) {
        code = `
function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}
console.log(fibonacci(5)); // Output: [0, 1, 1, 2, 3]`;
    } else if (description.includes('reverse a string')) {
        code = `
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString('hello')); // Output: 'olleh'`;
    } else if (description.includes('check palindrome')) {
        code = `
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome('racecar')); // Output: true`;
    } else if (description.includes('capitalize first letter')) {
        code = `
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalizeFirstLetter('hello')); // Output: 'Hello'`;
    } else if (description.includes('sort array')) {
        code = `
function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}
console.log(sortArray([5, 3, 8, 1])); // Output: [1, 3, 5, 8]`;
    } else if (description.includes('find prime numbers')) {
        code = `
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7)); // Output: true`;
    } else if (description.includes('generate random number')) {
        code = `
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(generateRandomNumber(1, 10)); // Output: random number between 1 and 10`;
    } else if (description.includes('check leap year')) {
        code = `
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log(isLeapYear(2020)); // Output: true`;
    } else if (description.includes('convert temperature to celsius')) {
        code = `
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
console.log(toCelsius(100)); // Output: 37.78`;
    } else if (description.includes('convert temperature to fahrenheit')) {
        code = `
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
console.log(toFahrenheit(37.78)); // Output: 100`;
    } else if (description.includes('create array of squares')) {
        code = `
function createArrayOfSquares(n) {
    return Array.from({ length: n }, (_, i) => i * i);
}
console.log(createArrayOfSquares(5)); // Output: [0, 1, 4, 9, 16]`;
    } else if (description.includes('merge two arrays')) {
        code = `
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2], [3, 4])); // Output: [1, 2, 3, 4]`;
    } else if (description.includes('filter even numbers')) {
        code = `
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log(filterEvenNumbers([1, 2, 3, 4])); // Output: [2, 4]`;
    } else if (description.includes('find the average')) {
        code = `
function findAverage(arr) {
    const sum = arr.reduce((a, b) => a + b, 0);
    return sum / arr.length;
}
console.log(findAverage([1, 2, 3, 4])); // Output: 2.5`;
    } else if (description.includes('check if array is sorted')) {
        code = `
function isArraySorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) return false;
    }
    return true;
}
console.log(isArraySorted([1, 2, 3, 4])); // Output: true`;
    } else if (description.includes('create a simple html page')) {
        code = `
<!DOCTYPE html>
<html>
<head>
    <title>My Simple Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is a simple HTML page.</p>
</body>
</html>`;
    } else if (description.includes('create a form')) {
        code = `
<!DOCTYPE html>
<html>
<head>
    <title>Simple Form</title>
</head>
<body>
    <h1>Contact Form</h1>
    <form>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        <br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <br>
        <input type="submit" value="Submit">
    </form>
</body>
</html>`;
    } else if (description.includes('create a table')) {
        code = `
<!DOCTYPE html>
<html>
<head>
    <title>Simple Table</title>
</head>
<body>
    <h1>My Table</h1>
    <table border="1">
        <tr>
            <th>Name</th>
            <th>Age</th>
        </tr>
        <tr>
            <td>John</td>
            <td>30</td>
        </tr>
        <tr>
            <td>Jane</td>
            <td>25</td>
        </tr>
    </table>
</body>
</html>`;
    } else if (description.includes('create a list')) {
        code = `
<!DOCTYPE html>
<html>
<head>
    <title>Simple List</title>
</head>
<body>
    <h1>My List</h1>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
</body>
</html>`;
    } else if (description.includes('create a button')) {
        code = `
<!DOCTYPE html>
<html>
<head>
    <title>Button Example</title>
</head>
<body>
    <button onclick="alert('Button Clicked!')">Click Me!</button>
</body>
</html>`;
    } else if (description.includes('create a navigation bar')) {
        code = `
<!DOCTYPE html>
<html>
<head>
    <title>Navigation Bar</title>
    <style>
        .navbar {
            background-color: #333;
            overflow: hidden;
        }
        .navbar a {
            float: left;
            display: block;
            color: #f2f2f2;
            text-align: center;
            padding: 14px 20px;
            text-decoration: none;
        }
        .navbar a:hover {
            background-color: #ddd;
            color: black;
        }
    </style>
</head>
<body>
    <div class="navbar">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
    </div>
</body>
</html>`;
    } else if (description.includes('create a login page')) {
        code = `
<!DOCTYPE html>
<html>
<head>
    <title>Login Page</title>
</head>
<body>
    <h1>Login</h1>
    <form>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
        <br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
        <br>
        <input type="submit" value="Login">
    </form>
</body>
</html>`;
    } else if (description.includes('create a registration page')) {
        code = `
<!DOCTYPE html>
<html>
<head>
    <title>Registration Page</title>
</head>
<body>
    <h1>Register</h1>
    <form>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
        <br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
        <br>
        <input type="submit" value="Register">
    </form>
</body>
</html>`;
    } else if (description.includes('create a contact page')) {
        code = `
<!DOCTYPE html>
<html>
<head>
    <title>Contact Page</title>
</head>
<body>
    <h1>Contact Us</h1>
    <form>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        <br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <br>
        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>
        <br>
        <input type="submit" value="Send">
    </form>
</body>
</html>`;
    } else if (description.includes('create a gallery page')) {
        code = `
<!DOCTYPE html>
<html>
<head>
    <title>Gallery</title>
    <style>
        .gallery img {
            width: 200px;
            height: 200px;
            margin: 10px;
            border: 2px solid #ddd;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <h1>Gallery</h1>
    <div class="gallery">
        <img src="image1.jpg" alt="Image 1">
        <img src="image2.jpg" alt="Image 2">
        <img src="image3.jpg" alt="Image 3">
    </div>
</body>
</html>`;
    } else if (description.includes('create a form with validation')) {
        code = `
<!DOCTYPE html>
<html>
<head>
    <title>Form with Validation</title>
</head>
<body>
    <h1>Form with Validation</h1>
    <form onsubmit="return validateForm()">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <br>
        <input type="submit" value="Submit">
    </form>
    <script>
        function validateForm() {
            const email = document.getElementById('email').value;
            if (!email) {
                alert('Email is required');
                return false;
            }
            return true;
        }
    </script>
</body>
</html>`;
    } else if (description.includes('create a simple quiz')) {
        code = `
<!DOCTYPE html>
<html>
<head>
    <title>Simple Quiz</title>
</head>
<body>
    <h1>Quiz</h1>
    <form>
        <label for="question">What is the capital of France?</label>
        <br>
        <input type="radio" id="paris" name="answer" value="Paris">
        <label for="paris">Paris</label>
        <br>
        <input type="radio" id="london" name="answer" value="London">
        <label for="london">London</label>
        <br>
        <input type="radio" id="rome" name="answer" value="Rome">
        <label for="rome">Rome</label>
        <br>
        <input type="submit" value="Submit">
    </form>
</body>
</html>`;
    } else if (description.includes('create a to-do list')) {
        code = `
<!DOCTYPE html>
<html>
<head>
    <title>To-Do List</title>
    <style>
        .task {
            margin: 5px 0;
        }
    </style>
</head>
<body>
    <h1>To-Do List</h1>
    <input type="text" id="taskInput" placeholder="Add a new task">
    <button onclick="addTask()">Add</button>
    <ul id="taskList"></ul>
    <script>
        function addTask() {
            const taskInput = document.getElementById('taskInput');
            const taskList = document.getElementById('taskList');
            const task = taskInput.value;
            if (task) {
                const li = document.createElement('li');
                li.textContent = task;
                li.className = 'task';
                taskList.appendChild(li);
                taskInput.value = '';
            }
        }
    </script>
</body>
</html>`;
    } else if (description.includes('create a countdown timer')) {
        code = `
<!DOCTYPE html>
<html>
<head>
    <title>Countdown Timer</title>
</head>
<body>
    <h1>Countdown Timer</h1>
    <p id="timer">10</p>
    <script>
        let timeLeft = 10;
        function updateTimer() {
            document.getElementById('timer').textContent = timeLeft;
            if (timeLeft > 0) {
                timeLeft--;
                setTimeout(updateTimer, 1000);
            }
        }
        updateTimer();
    </script>
</body>
</html>`;
    } else if (description.includes('create a contact form with email validation')) {
        code = `
<!DOCTYPE html>
<html>
<head>
    <title>Contact Form</title>
</head>
<body>
    <h1>Contact Us</h1>
    <form onsubmit="return validateEmail()">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <br>
        <input type="submit" value="Send">
    </form>
    <script>
        function validateEmail() {
            const email = document.getElementById('email').value;
            if (!email.includes('@')) {
                alert('Please enter a valid email address');
                return false;
            }
            return true;
        }
    </script>
</body>
</html>`;
    } else if (description.includes('create a simple slideshow')) {
        code = `
<!DOCTYPE html>
<html>
<head>
    <title>Simple Slideshow</title>
    <style>
        .slideshow img {
            width: 100%;
            height: auto;
            display: none;
        }
    </style>
</head>
<body>
    <h1>Slideshow</h1>
    <div class="slideshow">
        <img src="slide1.jpg" alt="Slide 1">
        <img src="slide2.jpg" alt="Slide 2">
        <img src="slide3.jpg" alt="Slide 3">
    </div>
    <script>
        let slideIndex = 0;
        function showSlides() {
            const slides = document.querySelectorAll('.slideshow img');
            slides.forEach((slide, index) => {
                slide.style.display = (index === slideIndex) ? 'block' : 'none';
            });
            slideIndex = (slideIndex + 1) % slides.length;
            setTimeout(showSlides, 2000);
        }
        showSlides();
    </script>
</body>
</html>`;
    } else {
        code = 'No code available for this description.';
    }

    document.getElementById('code').textContent = code;
}
