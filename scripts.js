const modalContainer = document.getElementById("modal_container");
const closeButton = document.getElementById("close");
const gameContainer = document.getElementById("game_container");

closeButton.addEventListener("click", () => {
  modalContainer.style.display = "none";
  gameContainer.style.display = "block";
});
