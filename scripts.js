let points = 0;

document.getElementById("achievementsBtn").addEventListener("click", function() {
    toggleSections("achievements");
});

document.getElementById("pointsBtn").addEventListener("click", function() {
    toggleSections("pointsRewards");
});

document.getElementById("feedbackBtn").addEventListener("click", function() {
    toggleSections("feedback");
});

document.getElementById("socialFeedBtn").addEventListener("click", function() {
    toggleSections("socialFeed");
});

function toggleSections(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        section.style.display = "none";
    });

    // Show the selected section
    const activeSection = document.getElementById(sectionId);
    activeSection.style.display = "block";
    setTimeout(() => {
        activeSection.style.opacity = 1;
    }, 10);  // Add slight delay for opacity transition
}

// Function to handle earning points
function earnPoints() {
    points += 10;
    document.getElementById("pointsCount").textContent = points;
    const progress = document.getElementById("progressBar");
    progress.style.width = `${(points / 100) * 100}%`; // max points for progress bar is 100
    alert("Challenge completed! You earned 10 points!");
}

// Function to redeem points
function redeemPoints() {
    if (points >= 50) {
        points -= 50;
        document.getElementById("pointsCount").textContent = points;
        alert("You redeemed 50 points for a reward!");
    } else {
        alert("Not enough points to redeem.");
    }
}

// Function to handle feedback submission
function submitFeedback() {
    const feedback = document.getElementById("feedbackInput").value;
    if (feedback) {
        alert("Feedback submitted! Thank you for helping us improve.");
        document.getElementById("feedbackInput").value = ""; // Reset input
    } else {
        alert("Please enter some feedback.");
    }
}
