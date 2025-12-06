/*
  Sony Walkman Retro Site Scripts
    - Simple star rating interaction
    - Basic client-side validation for feedback form
*/

document.addEventListener("DOMContentLoaded", function () {
    setupStarRating();
    setupFeedbackForm();
});

function setupStarRating() {
    const stars = document.querySelectorAll("[data-star]");
    const ratingText = document.getElementById("rating-text");

    if (!stars.length || !ratingText) {
        return; // Nothing to do on pages without stars
    }

    let currentRating = 0;

    stars.forEach(function (star) {
        star.addEventListener("click", function () {
            const value = parseInt(star.getAttribute("data-star"), 10);
            currentRating = value;
            updateStars(stars, currentRating);
            ratingText.textContent = `You rated this ${currentRating} / 5`;
        });

        star.addEventListener("mouseenter", function () {
            const value = parseInt(star.getAttribute("data-star"), 10);
            updateStars(stars, value);
        });

        star.addEventListener("mouseleave", function () {
            updateStars(stars, currentRating);
        });
    });
}

function updateStars(stars, value) {
    stars.forEach(function (star) {
        const starValue = parseInt(star.getAttribute("data-star"), 10);
        star.textContent = starValue <= value ? "★" : "☆";
    });
}

function setupFeedbackForm() {
    const form = document.getElementById("feedback-form");
    if (!form) {
        return;
    }

    const nameInput = form.querySelector("#name");
    const emailInput = form.querySelector("#email");
    const messageInput = form.querySelector("#message");
    const errorBox = form.querySelector("#form-errors");

    form.addEventListener("submit", function (event) {
        let errors = [];

        if (!nameInput.value.trim()) {
            errors.push("Please enter your name.");
        }

        if (!emailInput.value.trim()) {
            errors.push("Please enter your email address.");
        } else if (!emailInput.value.includes("@")) {
            errors.push("Please enter a valid email address.");
        }

        if (!messageInput.value.trim()) {
            errors.push("Please add a short comment or question.");
        }

        if (errors.length > 0) {
            event.preventDefault();
            errorBox.innerHTML = errors
                .map(function (msg) {
                    return "<div>" + msg + "</div>";
                })
                .join("");
        } else {
            // For this assignment we just show a simple alert.
            // On a real site, this would be sent to a server.
            alert("Thank you for your feedback about the Walkman!");
        }
    });
}
