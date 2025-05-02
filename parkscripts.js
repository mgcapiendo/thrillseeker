const gameContainer = document.getElementById("game_container");
gameContainer.style.display = "flex";

const infomodalContainer = document.getElementById("info-container");
// set the infomodal to be invisible at first
infomodalContainer.style.display = "none";
// open the game info modal
const infoOpenbutton = document.getElementById("infoopen");
infoOpenbutton.addEventListener("click", () => {
  infomodalContainer.style.display = "flex";
});
// close the game info modal
const infoClosebutton = document.getElementById("infoclose");
infoClosebutton.addEventListener("click", () => {
  infomodalContainer.style.display = "none";
});

const settingsmodalContainer = document.getElementById("settings-container");
// set the settings modal to be invisible at first
settingsmodalContainer.style.display = "none";
// open the settings modal
const settingsOpenbutton = document.getElementById("settingsopen");
settingsOpenbutton.addEventListener("click", () => {
  settingsmodalContainer.style.display = "flex";
});
// close the settings modal
const settingsClosebutton = document.getElementById("settingsclose");
settingsClosebutton.addEventListener("click", () => {
  settingsmodalContainer.style.display = "none";
});

// Start of Difficulty------------------------------------------
const difficultySelect = document.getElementById("difficulty");
const timerDisplay = document.querySelector(".timer");
const settingsCloseButton = document.getElementById("settingsclose");

const difficultySettings = {
  easy: 20,
  medium: 10,
  hard: 5,
};

let selectedDifficulty = "easy";
updateTimerDisplay();

function updateTimerDisplay() {
  const timerValue = difficultySettings[selectedDifficulty];
  timerDisplay.textContent = `Timer: ${timerValue}s`;
}

difficultySelect.addEventListener("change", function () {
  selectedDifficulty = difficultySelect.value;
  updateTimerDisplay();
});

settingsCloseButton.addEventListener("click", () => {
  updateTimerDisplay();
});
// End of Difficulty--------------------------------------------

// Start of Rounds----------------------------------------------
const roundSelect = document.getElementById("round");
const roundDisplay = document.querySelector(".round");

const roundSettings = {
  quick: 3,
  normal: 5,
  long: 7,
};

let selectedRounds = "quick";
updateRoundDisplay();

function updateRoundDisplay() {
  const roundValue = roundSettings[selectedRounds];
  roundDisplay.textContent = `Rounds: ${roundValue}`;
}

roundSelect.addEventListener("change", function () {
  selectedRounds = roundSelect.value;
  updateRoundDisplay();
});

// End of Rounds------------------------------------------------

//
// Start of Game --------------------------------------------------------

// End Game kek ---------------------------------------------------------
