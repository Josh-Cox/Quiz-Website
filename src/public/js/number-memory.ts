
// listen for 'enter' key
document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "Enter":
            if (document.getElementById("ready")?.hidden == false) {
                document.getElementById("ready")?.click();
            }
            else {
                document.getElementById("entryBtn")?.click();
            }
            event.preventDefault();
            break;
    }
});

let currentDigit: number = 1;

/**
 * Return random number between two numbers
 * @param min 
 * @param max 
 * @returns Random number n (min <= n =< max)
 */
 function randomInt(min: number, max: number) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

/**
 * Starts game
 */
function numberMemoryStart() {
    const number: HTMLParagraphElement = document.getElementById("number") as HTMLParagraphElement;

    number.innerHTML = randomInt((Math.pow(10, currentDigit) - 1), Math.pow(10, (currentDigit - 1))).toString();
}

/**
 * Hide number and display input box
 */
function ready() {
    const number: HTMLParagraphElement = document.getElementById("number") as HTMLParagraphElement;
    const button: HTMLButtonElement = document.getElementById("ready") as HTMLButtonElement;
    const inputNum: HTMLInputElement = document.getElementById("entryBox") as HTMLInputElement;
    const inputBtn: HTMLButtonElement = document.getElementById("entryBtn") as HTMLButtonElement;

    
    inputNum.value = "";
    number.hidden = true;
    button.hidden = true;
    inputBtn.hidden = false;
    inputNum.hidden = false;
    inputNum.focus();
}

/**
 * Show number and hide input
 */
function numSubmit() {
    const number: HTMLParagraphElement = document.getElementById("number") as HTMLParagraphElement;
    const button: HTMLButtonElement = document.getElementById("ready") as HTMLButtonElement;
    const inputNum: HTMLInputElement = document.getElementById("entryBox") as HTMLInputElement;
    const inputBtn: HTMLButtonElement = document.getElementById("entryBtn") as HTMLButtonElement;


    if(inputNum.value === number.innerHTML) {
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