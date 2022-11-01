"use strict";
document.addEventListener("keydown", (event) => {
    var _a;
    switch (event.key) {
        case "Enter":
            (_a = document.getElementById("entryButton")) === null || _a === void 0 ? void 0 : _a.click();
            event.preventDefault();
            break;
    }
});
const currentFlags = shuffle([
    "albania",
    "andorra",
    "armenia",
    "austria",
    "azerbaijan",
    "belarus",
    "belgium",
    "bosnia and herzegovina",
    "bulgaria",
    "croatia",
    "cyprus",
    "czech republic",
    "denmark",
    "estonia",
    "finland",
    "france",
    "georgia",
    "germany",
    "greece",
    "hungary",
    "iceland",
    "ireland",
    "italy",
    "kosovo",
    "latvia",
    "liechtenstein",
    "lithuania",
    "luxembourg",
    "macedonia",
    "malta",
    "moldova",
    "monaco",
    "montenegro",
    "the netherlands",
    "norway",
    "poland",
    "portugal",
    "romania",
    "russia",
    "san marino",
    "serbia",
    "slovakia",
    "slovenia",
    "spain",
    "sweden",
    "switzerland",
    "turkey",
    "ukraine",
    "uk",
    "vatican city"
]);
let score = 0;
function gameStart() {
    displayFlag();
}
function skipFlag() {
    const temp = currentFlags[0];
    currentFlags.shift();
    currentFlags.push(temp);
    displayFlag();
}
function entrySubmit() {
    const entryBox = document.getElementById("entryBox");
    const entryBut = document.querySelector("entryButton");
    const entryVal = entryBox === null || entryBox === void 0 ? void 0 : entryBox.value.toLowerCase();
    if (entryBut) {
        entryBut.disabled = true;
    }
    switch (currentFlags[0]) {
        case "bosnia and herzegovina":
            if ((entryVal == currentFlags[0]) || (entryVal == "bosnia")) {
                correctAnswer();
            }
            else {
                incorrectAnswer();
            }
            break;
        case "czech republic":
            if ((entryVal == currentFlags[0]) || (entryVal == "czechia")) {
                correctAnswer();
            }
            else {
                incorrectAnswer();
            }
            break;
        case "macedonia":
            if ((entryVal == currentFlags[0]) || (entryVal == "north macedonia")) {
                correctAnswer();
            }
            else {
                incorrectAnswer();
            }
            break;
        case "the netherlands":
            if ((entryVal == currentFlags[0]) || (entryVal == "holland") || (entryVal == "netherlands")) {
                correctAnswer();
            }
            else {
                incorrectAnswer();
            }
            break;
        case "uk":
            if ((entryVal == currentFlags[0]) || (entryVal == "united kingdom") || (entryVal == "the united kingdom") || (entryVal == "the uk")) {
                correctAnswer();
            }
            else {
                incorrectAnswer();
            }
            break;
        default:
            if (entryVal === currentFlags[0]) {
                correctAnswer();
            }
            else {
                incorrectAnswer();
            }
    }
}
function correctAnswer() {
    const entryBox = document.getElementById("entryBox");
    const entryBut = document.getElementById("entryButton");
    score += 1;
    entryBox.style.color = "#27AE60";
    setTimeout(() => {
        entryBox.style.color = "white";
        entryBox.value = "";
        currentFlags.shift();
        entryBut.disabled = false;
        displayFlag();
    }, 1000);
}
function incorrectAnswer() {
    const entryBox = document.getElementById("entryBox");
    const entryBut = document.getElementById("entryButton");
    entryBox.style.color = "red";
    setTimeout(() => { entryBox.style.color = "white"; entryBox.value = ""; entryBut.disabled = false; }, 1000);
}
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}
function displayFlag() {
    if (currentFlags.length > 0) {
        const flagImg = document.getElementById("flag");
        flagImg.src = "../resources/flags/" + (currentFlags[0] + ".png");
    }
    else {
        gameOver();
    }
}
function gameOver() {
    alert("Game Over!\nScore: " + score);
    location.href = './';
}
//# sourceMappingURL=flag-quiz.js.map