function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const bodyColor = document.body;
const btnChange = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

btnChange.addEventListener("click", changeColorRandom);

function changeColorRandom() {
  const colorClick = getRandomHexColor();
  bodyColor.style.backgroundColor = colorClick;
  spanColor.textContent = colorClick;
}


