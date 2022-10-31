
// listen for 'enter' key
document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "Enter":
            document.getElementById("entryButton")?.click();
            event.preventDefault();
            break;
    }
});

// shuffled list of all flags
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
    "vatican city"]);

// player score
let score = 0;

/**
 * Start the game
 */
function gameStart() {
    displayFlag();
}

/**
 * Player skips a flag
 */
function skipFlag() {

    // move current flag to end of array
    const temp = currentFlags[0];
    currentFlags.shift();
    currentFlags.push(temp);

    displayFlag();
}

/**
 * Player submits an answer
 */
function entrySubmit() {

    // get html elements
    const entryBox: HTMLInputElement | null = document.getElementById("entryBox") as HTMLInputElement;
    const entryBut: HTMLButtonElement | null = document.querySelector<HTMLButtonElement>("entryButton");
    const entryVal: string | undefined = entryBox?.value.toLowerCase();

    // disable submit button
    if(entryBut) {
        entryBut.disabled = true;
    }

    // check if answer is correct
    switch(currentFlags[0]) {

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

/**
 * Player subimts correct answer
 */
function correctAnswer() {
    // get html elements
    const entryBox = document.getElementById("entryBox") as HTMLInputElement;
    const entryBut = document.getElementById("entryButton") as HTMLButtonElement;

    // increase score, set text to green then remove, remove flag from list, display next flag
    score += 1;
    entryBox.style.color = "#27AE60";
    setTimeout(() => { entryBox.style.color = "white";
    entryBox.value = "";
    currentFlags.shift();
    entryBut.disabled = false;
    displayFlag(); }, 1000);
}

/**
 * Player submits incorrect answer
 */
function incorrectAnswer() {

    // get html elements
    const entryBox = document.getElementById("entryBox") as HTMLInputElement;
    const entryBut = document.getElementById("entryButton") as HTMLButtonElement;

    // change text to red then back
    entryBox.style.color = "red";
    setTimeout(() => { entryBox.style.color = "white"; entryBox.value = ""; entryBut.disabled = false; }, 1000);
}

/**
 * Shuffles list of flags
 * @param array
 * @returns shuffled array of flags
 */
function shuffle(array: string[]): string[] {

    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

  return array;
}

/**
 * Displays current flag
 */
function displayFlag() {

    // if flag list is not empty
    if (currentFlags.length > 0) {

        // set html img to current flag
        const flagImg = document.getElementById("flag") as HTMLImageElement;
        flagImg.src = "../resources/flags/" + (currentFlags[0] + ".png");
    }

    // else end game
    else {
        gameOver();
    }
}

/**
 * Ends the game (player got all correct or gave up)
 */
function gameOver() {

    // show player score and return to landing page
    alert("Game Over!\nScore: " + score);
    location.href = './';
}