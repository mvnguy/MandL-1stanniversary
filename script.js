// Typing Effect for Love Letter
const loveLetter = "My love, every moment with you is a dream come true. Thank you for filling my life with joy, love, and laughter. I can't wait for our future together. Happy anniversary! ❤️";
let index = 0;

function typeText() {
    if (index < loveLetter.length) {
        document.getElementById("typing-text").innerHTML += loveLetter.charAt(index);
        index++;
        setTimeout(typeText, 50);
    }
}
window.onload = typeText;

// Love Notes Reveal
const loveNotes = [
    "You make my heart race every time I see you! 💓",
    "Every moment with you is a treasure. 💖",
    "I love you more than words can say. 💕"
];

function revealNote(index) {
    document.getElementById("love-message").innerText = loveNotes[index];
}