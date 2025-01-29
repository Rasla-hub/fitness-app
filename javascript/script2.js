
document.getElementById("calculate-btn").addEventListener("click", function () {
    const weight = parseFloat(document.getElementById("weight").value);
    const activity = parseFloat(document.getElementById("activity").value);
    const time = parseFloat(document.getElementById("time").value);

    if (weight!='' && met!='' && time!='') {
        // Convert time from minutes to hours
        const timeInHours = time / 60;

        // Calculate calories burned
        const caloriesBurned = (activity * weight * timeInHours).toFixed(2);

        // Display the result
        document.getElementById("calories-result").innerText = 
            `You burned approximately ${caloriesBurned} calories!`;
    } else {
        document.getElementById("calories-result").innerText = 
            "Please fill out all fields to calculate calories burned.";
    }
});