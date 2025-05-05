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

//SETTINGS MODAL
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

  totalRounds = roundSettings[selectedRounds];
});
// End of Rounds

// STARTGAME MODAL
const startgamemodalContainer = document.getElementById("startgame-container");
startgamemodalContainer.style.display = "none";

const startOpenbutton = document.getElementById("startopen");
startOpenbutton.addEventListener("click", () => {
  startgamemodalContainer.style.display = "flex";

  totalRounds = roundSettings[selectedRounds];

  currentRound = 1;
  score = 0;
  usedImage = [];

  randomImage();
});

// GAME MECHANICS
function showGuessPhase() {
  document.getElementById("observephase").style.display = "none";
  document.getElementById("guessphase").style.display = "flex";
  document.getElementById("resultphase").style.display = "none";
}

function showResultPhase() {
  document.getElementById("observephase").style.display = "none";
  document.getElementById("guessphase").style.display = "none";
  document.getElementById("resultphase").style.display = "flex";
}

function showObservePhase() {
  document.getElementById("observephase").style.display = "flex";
  document.getElementById("guessphase").style.display = "none";
  document.getElementById("resultphase").style.display = "none";
}

//Cycle
let usedImage = [];

function randomImage() {
  showObservePhase();

  setTimeout(function () {
    const img = document.querySelector("#observephase img");
    img.src = "";

    showObservePhase();

    setTimeout(function () {
      let randomNum;
      do {
        randomNum = Math.floor(Math.random() * 8) + 1;
      } while (usedImage.includes(randomNum));

      usedImage.push(randomNum);

      img.src = "../ioaimages/random_" + randomNum + ".jpg";

      setCorrectLocation(randomNum);
      resetLocations();

      setTimeout(showGuessPhase, 5000);
    }, 100);
  });
}

const closegame = document.getElementById("game_container");

const gameClosebutton = document.getElementById("gameclose");
gameClosebutton.addEventListener("click", () => {
  startgamemodalContainer.style.display = "none";
  showObservePhase();
});

//Image Map

let currentRound = 1;
let totalRounds = roundSettings[selectedRounds];
let score = 0;
let currentCorrectLocation = null;

function resetLocations() {
  document.getElementById("location_1").onclick = function () {
    handleLocationClick("location_1");
  };
  document.getElementById("location_2").onclick = function () {
    handleLocationClick("location_2");
  };
  document.getElementById("location_3").onclick = function () {
    handleLocationClick("location_3");
  };
  document.getElementById("location_4").onclick = function () {
    handleLocationClick("location_4");
  };
  document.getElementById("location_5").onclick = function () {
    handleLocationClick("location_5");
  };
  document.getElementById("location_6").onclick = function () {
    handleLocationClick("location_6");
  };
  document.getElementById("location_7").onclick = function () {
    handleLocationClick("location_7");
  };
  document.getElementById("location_8").onclick = function () {
    handleLocationClick("location_8");
  };
  document.getElementById("location_0").onclick = function () {
    handleLocationClick("location_0");
  };
}

function setCorrectLocation(randomNum) {
  currentCorrectLocation = "location_" + randomNum;
}

function handleLocationClick(locationID) {
  if (locationID === currentCorrectLocation) {
    score++;
  } else {
  }

  if (currentRound < totalRounds) {
    currentRound++;

    randomImage();
  } else {
    showResultPhase();

    document.getElementById("final-score").textContent =
      "Your Score: " + score + " Out of " + totalRounds;

    currentRound = 1;
    score = 0;
    usedImage = [];
  }
}
