function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// ++++++++++++++++++++++++++++++++++++++
function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';
  // Сброс размеров ящиков обратно на 30x30 пикселей
  const defaultBoxSize = 30;
  const defaultBoxMargin = 5;
  const boxes = document.querySelectorAll('.box');

  boxes.forEach(box => {
    box.style.width = `${defaultBoxSize}px`;
    box.style.height = `${defaultBoxSize}px`;
    box.style.margin = `${defaultBoxMargin}px`;
  });
}
