const btnStart = document.querySelector('button[data-start]');
const btnEnd = document.querySelector('button[data-stop]');
const selectBg = document.querySelector('body');
let intervalid = null;

btnStart.addEventListener('click', () => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  btnStart.setAttribute('disabled', true);
  intervalid = setInterval(() => {
    selectBg.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

btnEnd.addEventListener('click', () => {
  clearInterval(intervalid);
  btnStart.removeAttribute('disabled');
});
