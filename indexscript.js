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

//universal map
const universalmapContainer = document.getElementById("universalmap_container");
//disney map
const disneymapContainer = document.getElementById("disneymap-container");
disneymapContainer.style.display = "none";

const disneyOpenbutton = document.getElementById("disneyopen");
disneyOpenbutton.addEventListener("click", () => {
  universalmapContainer.style.display = "none";
  disneymapContainer.style.display = "flex";
});

const universalOpenbutton = document.getElementById("universalopen");
universalOpenbutton.addEventListener("click", () => {
  universalmapContainer.style.display = "flex";
  disneymapContainer.style.display = "none";
});
