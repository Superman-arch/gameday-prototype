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
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        section.style.display = "none";
    });

    document.getElementById(sectionId).style.display = "block";
}

function earnPoints() {
    points += 10;
    document.getElementById("pointsCount").textContent = points;
    alert("Challenge completed! You earned 10 points!");
}

function redeemPoints() {
    if (points >= 50) {
        points -= 50;
        document.getElementById("pointsCount").textContent = points;
        alert("You redeemed 50 points for a reward!");
    } else {
        alert("Not enough points to redeem.");
    }
}

function submitFeedback() {
    const feedback = document.getElementById("feedbackInput").value;
    if (feedback) {
        alert("Feedback submitted! Thank you for helping us improve.");
        document.getElementById("feedbackInput").value = ""; // Reset input
    } else {
        alert("Please enter some feedback.");
    }
}
