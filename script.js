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

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "💖";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s"; // 2-5s
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}
setInterval(createHeart, 300);

document.addEventListener("DOMContentLoaded", function() {
    let correctName = "Bao Luong dep gai";  // Required name
    let gfName = prompt("Tên của em là gì? Trả lời phải đúng nha.");

    if (gfName !== correctName) {
        alert("Oops! This page is only for Bao Luong dep gai! ❌");
        window.location.href = "wrong_name.html"; // Redirect if incorrect
    } else {
        document.getElementById("personal-greeting").innerText = `Happy Anniversary, ${gfName}! ❤️`;
    }
});