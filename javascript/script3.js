function calculateCalories() {
    const weight = parseFloat(document.getElementById("weight").value);
    const duration = parseFloat(document.getElementById("duration").value);
    const met = parseFloat(document.getElementById("met").value);
  
    if (isNaN(weight) || isNaN(duration) || isNaN(met)) {
      document.getElementById("result").textContent = "Please fill in all fields correctly.";
      return;
    }
  
    const caloriesBurned = (met * 3.5 * weight / 200) * duration;
  
    document.getElementById("result").textContent = 
      `You burned approximately ${caloriesBurned.toFixed(2)} calories.`;
  }