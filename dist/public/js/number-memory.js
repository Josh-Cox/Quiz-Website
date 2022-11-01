"use strict";
document.addEventListener("keydown", (event) => {
    var _a, _b, _c;
    switch (event.key) {
        case "Enter":
            if (((_a = document.getElementById("ready")) === null || _a === void 0 ? void 0 : _a.hidden) == false) {
                (_b = document.getElementById("ready")) === null || _b === void 0 ? void 0 : _b.click();
            }
            else {
                (_c = document.getElementById("entryBtn")) === null || _c === void 0 ? void 0 : _c.click();
            }
            event.preventDefault();
            break;
    }
});
let currentDigit = 1;
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function numberMemoryStart() {
    const number = document.getElementById("number");
    number.innerHTML = randomInt((Math.pow(10, currentDigit) - 1), Math.pow(10, (currentDigit - 1))).toString();
}
function ready() {
    const number = document.getElementById("number");
    const button = document.getElementById("ready");
    const inputNum = document.getElementById("entryBox");
    const inputBtn = document.getElementById("entryBtn");
    inputNum.value = "";
    number.hidden = true;
    button.hidden = true;
    inputBtn.hidden = false;
    inputNum.hidden = false;
    inputNum.focus();
}
function numSubmit() {
    const number = document.getElementById("number");
    const button = document.getElementById("ready");
    const inputNum = document.getElementById("entryBox");
    const inputBtn = document.getElementById("entryBtn");
    if (inputNum.value === number.innerHTML) {
        currentDigit += 1;
        number.innerHTML = randomInt((Math.pow(10, currentDigit) - 1), Math.pow(10, (currentDigit - 1))).toString();
        number.hidden = false;
        button.hidden = false;
        inputBtn.hidden = true;
        inputNum.hidden = true;
    }
    else {
        alert("Game Over!\nScore: " + (currentDigit - 1));
        location.href = "/";
    }
}
//# sourceMappingURL=number-memory.js.map