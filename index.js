const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const popupBox = document.getElementById("popupBox");
const congratsMessage = document.getElementById("congratsMessage");

// "Yes" button click event
yesButton.addEventListener("click", () => {
    // Hide the popup box
    popupBox.style.display = "none";

    // Show the congratulatory message
    congratsMessage.style.display = "block";

    // After 3 seconds, redirect to the Instagram link
    setTimeout(() => {
        window.location.href = "https://www.instagram.com/itz._.fahad_khan?igsh=ZGUzMzM3NWJiOQ==";
    }, 3000);
});

// "No" button hover event to swap position
let isSwapped = false;
noButton.addEventListener("mouseover", () => {
    if (isSwapped) {
        yesButton.style.transform = "translateX(0)";
        noButton.style.transform = "translateX(0)";
    } else {
        yesButton.style.transform = "translateX(100px)";
        noButton.style.transform = "translateX(-100px)";
    }
    isSwapped = !isSwapped;
});
