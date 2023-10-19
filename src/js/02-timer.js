import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
};

const dateTimePicker = flatpickr('#datetime-picker', options);
let timerId;

document.querySelector('[data-start]').addEventListener('click', function () {
  const selectedDate = dateTimePicker.selectedDates[0];

  if (selectedDate && selectedDate > new Date()) {
    document.querySelector('[data-start]').setAttribute('disabled', 'true');
    startTimer(selectedDate);
  } else {
    alert('Por favor, elige una fecha en el futuro.');
  }
});

function startTimer(endDate) {
  const timerInterval = 1000;

  function updateTimer() {
    const currentTime = new Date();
    const timeLeft = endDate - currentTime;

    if (timeLeft <= 0) {
      clearInterval(timerId);
      alert('¡Tiempo agotado!');
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(timeLeft);

    document.querySelector('[data-days]').textContent = addLeadingZero(days);
    document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
    document.querySelector('[data-minutes]').textContent =
      addLeadingZero(minutes);
    document.querySelector('[data-seconds]').textContent =
      addLeadingZero(seconds);
  }

  timerId = setInterval(updateTimer, timerInterval);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor((ms % hour) / minute);
  const seconds = Math.floor((ms % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
