// Function to handle mood tracking
function trackMood(mood) {
    const date = new Date();
    const moodEntry = {
      mood: mood,
      date: date.toLocaleString(),
    };
  
    // Get current mood history from localStorage or initialize an empty array
    let moodHistory = JSON.parse(localStorage.getItem("moodHistory")) || [];
  
    // Add new mood entry to history
    moodHistory.push(moodEntry);
  
    // Save updated history back to localStorage
    localStorage.setItem("moodHistory", JSON.stringify(moodHistory));
  
    // Update the mood history displayed
    displayMoodHistory();
  }
  
  // Function to display the mood history
  function displayMoodHistory() {
    const moodHistory = JSON.parse(localStorage.getItem("moodHistory")) || [];
    const historyList = document.getElementById("history-list");
  
    // Clear the current list
    historyList.innerHTML = "";
  
    // Populate the list with mood history
    moodHistory.forEach(entry => {
      const li = document.createElement("li");
      li.textContent = `${entry.date}: ${entry.mood}`;
      historyList.appendChild(li);
    });
  }
  
  // Display mood history when the page loads
  window.onload = displayMoodHistory;
  