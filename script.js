// Typing Effect for Love Letter
const loveLetter = "My love, every moment with you is a dream come true. Thank you for filling my life with joy, love, and laughter. I can't wait to see you again and our future together. Happy anniversary baby! ❤️";
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
    "Vợ yêu của anh luôn hạnh phúc và cười nhiều. Vì anh lại yêu vợ hơn mỗi khi vợ cười! 💓",
    "Anh sẽ luôn là 'Anh đây' mỗi khi em cần và gọi anh. 💖",
    "Anh yêu Em nhiều hơn! 💕"
];

function revealNote(index) {
    document.getElementById("love-message").innerText = loveNotes[index];
}