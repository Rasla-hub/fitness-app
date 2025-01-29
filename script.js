
document.getElementById("track-btn").addEventListener("click", function () {
    const steps = document.getElementById("steps").value;
    const distance = document.getElementById("distance").value;
    const calories = document.getElementById("calories").value;

    if (steps && distance && calories) {
        document.getElementById("summary-text").innerText = `
            You walked ${steps} steps, covering ${distance} km 
            and burned ${calories} calories today! Keep it up!
        `;
    } else {
        document.getElementById("summary-text").innerText = 
            "Please fill out all fields to see your progress.";
    }
});

// Handle Goal Setting
document.getElementById("set-goal-btn").addEventListener("click", function () {
    const dailyGoal = document.getElementById("daily-goal").value;

    if (dailyGoal) {
        document.getElementById("goal-message").innerText = 
            `Your daily steps goal is set to ${dailyGoal} steps!`;
    } else {
        document.getElementById("goal-message").innerText = 
            "Please enter a goal to stay motivated.";
    }
});