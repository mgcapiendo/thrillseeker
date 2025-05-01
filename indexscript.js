const modalContainer = document.getElementById("modal_container");
const closeButton = document.getElementById("close");
const gameContainer = document.getElementById("game_container");

const visited = sessionStorage.getItem("visited");

if (visited) {
  modalContainer.style.display = "none";
  gameContainer.style.display = "flex";
} else {
  closeButton.addEventListener("click", () => {
    modalContainer.style.display = "none";
    gameContainer.style.display = "flex";

    sessionStorage.setItem("visited", "true");
  });
}

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
