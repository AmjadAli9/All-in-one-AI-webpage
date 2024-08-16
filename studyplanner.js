document.addEventListener('DOMContentLoaded', () => {
    // Toggle Dark Mode
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Go Home Button
    const homeButton = document.getElementById('homeButton');
    homeButton.addEventListener('click', () => {
        window.location.href = 'home.html'; // Adjust this path as needed
    });

    // Time Display
    function updateTime() {
        const timeElement = document.getElementById('time');
        const now = new Date();
        timeElement.textContent = now.toLocaleTimeString();
    }
    setInterval(updateTime, 1000); // Update every second

    // Motivational Quotes
    const quotes = [
        "Keep going, you’re getting there!",
        "Believe you can and you’re halfway there.",
        "The harder you work for something, the greater you’ll feel when you achieve it.",
        "Dream it. Believe it. Build it."
    ];
    
    function displayQuote() {
        const quoteElement = document.getElementById('quote');
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteElement.textContent = quotes[randomIndex];
    }
    displayQuote(); // Show an initial quote

    // Calendar
    function createCalendar() {
        const calendarContainer = document.getElementById('calendar');
        const now = new Date();
        const month = now.getMonth();
        const year = now.getFullYear();

        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        
        let calendarHtml = '<table><thead><tr>';
        ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].forEach(day => {
            calendarHtml += `<th>${day}</th>`;
        });
        calendarHtml += '</tr></thead><tbody><tr>';

        for (let i = 0; i < firstDay; i++) {
            calendarHtml += '<td></td>';
        }

        for (let day = 1; day <= daysInMonth; day++) {
            if ((day + firstDay - 1) % 7 === 0 && day > 1) {
                calendarHtml += '</tr><tr>';
            }
            calendarHtml += `<td>${day}</td>`;
        }

        calendarHtml += '</tr></tbody></table>';
        calendarContainer.innerHTML = calendarHtml;
    }
    createCalendar();

    // Goal Setting
    const goalForm = document.getElementById('goalForm');
    const goalInput = document.getElementById('goalInput');
    const goalText = document.getElementById('goalText');

    goalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const goalValue = goalInput.value.trim();
        if (goalValue) {
            goalText.textContent = `Goal: ${goalValue}`;
            goalInput.value = '';
        }
    });

    // Suggestions
    const suggestions = [
        "Review notes from the last class.",
        "Complete assignments due next week.",
        "Spend 30 minutes on practice problems.",
        "Read a chapter from your textbook."
    ];

    function displaySuggestions() {
        const suggestionList = document.getElementById('suggestionList');
        suggestions.forEach(suggestion => {
            const li = document.createElement('li');
            li.textContent = suggestion;
            suggestionList.appendChild(li);
        });
    }
    displaySuggestions();

    // Task Management
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('task');
    const taskList = document.getElementById('taskList');
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');

    let tasks = [];
    
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskValue = taskInput.value.trim();
        if (taskValue) {
            tasks.push({ name: taskValue, completed: false });
            updateTaskList();
            taskInput.value = '';
        }
    });

    function updateTaskList() {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.textContent = task.name;
            li.addEventListener('click', () => toggleTaskCompletion(index));
            if (task.completed) {
                li.style.textDecoration = 'line-through';
            }
            taskList.appendChild(li);
        });
        updateProgress();
    }

    function toggleTaskCompletion(index) {
        tasks[index].completed = !tasks[index].completed;
        updateTaskList();
    }

    function updateProgress() {
        const completedTasks = tasks.filter(task => task.completed).length;
        const progressPercentage = (completedTasks / tasks.length) * 100;
        progressBar.style.width = `${progressPercentage}%`;
        progressText.textContent = `${Math.round(progressPercentage)}% Completed`;
    }
});
