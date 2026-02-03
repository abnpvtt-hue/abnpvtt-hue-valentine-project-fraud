let yesSize = 1;

const btnYes = document.getElementById("yes");
const btnNo = document.getElementById("no");
const messageBox = document.getElementById("messageBox");
const continueBtn = document.getElementById("continueBtn");
const secondScreen = document.getElementById("secondScreen");

btnNo.onmouseover = () => {
    const btnWidth = btnNo.offsetWidth;
    const btnHeight = btnNo.offsetHeight;

    const maxX = window.innerWidth - btnWidth - 20;
    const maxY = window.innerHeight - btnHeight - 20;

    const oldX = btnNo.offsetLeft;
    const oldY = btnNo.offsetTop;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    // Flash at old position
    createFlash(oldX + btnWidth / 2, oldY + btnHeight / 2);

    // Move button
    btnNo.style.left = newX + "px";
    btnNo.style.top = newY + "px";

    // Flash at new position
    createFlash(newX + btnWidth / 2, newY + btnHeight / 2);

    yesSize += 0.2;
    btnYes.style.transform = `scale(${yesSize})`;
};

function createFlash(x, y) {
    const flash = document.createElement("div");
    flash.classList.add("flash");
    flash.style.left = (x - 40) + "px";
    flash.style.top = (y - 40) + "px";
    document.body.appendChild(flash);

    setTimeout(() => flash.remove(), 300);
}

btnYes.onclick = () => {
    messageBox.style.display = "block";
};

continueBtn.onclick = () => {
    secondScreen.style.display = "flex";
};

// Floating hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 500);


const loveLetterScreen = document.getElementById("loveLetterScreen");

// Trigger love letter after second screen
secondScreen.onclick = () => {
    secondScreen.style.display = "none";
    loveLetterScreen.style.display = "flex";

    setTimeout(openEnvelope, 800);
};

function openEnvelope() {
    const top = document.querySelector(".envelope .top");
    const letter = document.querySelector(".letter");
    const text = document.querySelector(".letter-text");

    top.style.transform = "rotateX(180deg)";

    setTimeout(() => {
        letter.style.transform = "translateY(-20px)";
        letter.style.opacity = "1";
    }, 800);

    setTimeout(() => {
        text.style.opacity = "1";
    }, 1600);
}

// Extra hearts for love letter screen
function createLoveHeart() {
    const heart = document.createElement("div");
    heart.classList.add("love-heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";

    loveLetterScreen.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}

setInterval(createLoveHeart, 600);

// Hide loading screen after animation
window.onload = () => {
    setTimeout(() => {
        document.getElementById("loadingScreen").style.display = "none";
    }, 3000); // Matches the CSS delay + fade
};

