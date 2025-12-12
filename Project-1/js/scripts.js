document.addEventListener("DOMContentLoaded", function () {
    // Set up the star rating widget (if present on the page)
    setupStarRating();

    // Set up the feedback form validation (only runs on the Reviews page)
    setupFeedbackForm();
});

/* STAR RATING SYSTEM */

function setupStarRating() {
    // Select all star elements that use the data-star attribute
    const stars = document.querySelectorAll("[data-star]");
    const ratingText = document.getElementById("rating-text");

    // If this page does not have star elements, exit the function
    if (!stars.length || !ratingText) {
        return;
    }

    // Holds the currently selected rating (0 means none selected yet)
    let currentRating = 0;

    // Add interactivity for each star
    stars.forEach(function (star) {

        // Clicking a star sets the permanent rating
        star.addEventListener("click", function () {
            const value = parseInt(star.getAttribute("data-star"), 10);
            currentRating = value;

            // Update the star display
            updateStars(stars, currentRating);

            // Update the text beneath the stars
            ratingText.textContent = `You rated this ${currentRating} / 5`;
        });

        // Hovering over a star temporarily highlights that rating
        star.addEventListener("mouseenter", function () {
            const value = parseInt(star.getAttribute("data-star"), 10);
            updateStars(stars, value);
        });

        // When the mouse leaves, restore the selected rating
        star.addEventListener("mouseleave", function () {
            updateStars(stars, currentRating);
        });
    });
}

/*
    Helper function that updates all stars
    - Stars up to the chosen value show a filled star (★)
    - Stars above the value show an empty star (☆)
*/
function updateStars(stars, value) {
    stars.forEach(function (star) {
        const starValue = parseInt(star.getAttribute("data-star"), 10);
        star.textContent = starValue <= value ? "★" : "☆";
    });
}

/*FEEDBACK FORM VALIDATION */

function setupFeedbackForm() {
    // Only run this code if the feedback form exists on the page
    const form = document.getElementById("feedback-form");
    if (!form) {
        return;
    }

    // Form fields
    const nameInput = form.querySelector("#name");
    const emailInput = form.querySelector("#email");
    const messageInput = form.querySelector("#message");
    const errorBox = form.querySelector("#form-errors");

    // Handle form submission
    form.addEventListener("submit", function (event) {
        let errors = [];

        // Check name
        if (!nameInput.value.trim()) {
            errors.push("Please enter your name.");
        }

        // Check email
        if (!emailInput.value.trim()) {
            errors.push("Please enter your email address.");
        } else if (!emailInput.value.includes("@")) {
            errors.push("Please enter a valid email address.");
        }

        // Check message/comment
        if (!messageInput.value.trim()) {
            errors.push("Please add a short comment or question.");
        }

        // If any errors exist, stop the form and show messages
        if (errors.length > 0) {
            event.preventDefault(); // Prevent form from being submitted

            // Display each error message inside the error box
            errorBox.innerHTML = errors
                .map(function (msg) {
                    return "<div>" + msg + "</div>";
                })
                .join("");

        } else {
            // Simple confirmation used for this assignment
            alert("Thank you for your feedback about the Walkman!");
        }
    });
}
