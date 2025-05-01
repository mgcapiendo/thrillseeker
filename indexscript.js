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
