function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    const timeout = setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
      clearTimeout(timeout);
    }, delay);
  });
}

const formSelection = document.querySelector('.form');

formSelection.addEventListener('submit', e => {
  e.preventDefault();

  const firstDelayValue = parseInt(
    document.querySelector('input[name="delay"]').value,
    10
  );

  const delayStepsValue = parseInt(
    document.querySelector('input[name="step"]').value,
    10
  );

  const amountValue = parseInt(
    document.querySelector('input[name=amount').value,
    10
  );

  for (let i = 1; i <= amountValue; i++) {
    const delayValue = firstDelayValue + (i - 1) * delayStepsValue;
    createPromise(i, delayValue)
      .then(({ position, delay }) => {
        console.log(`Promesa Cumplida ${position}, en ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`Promesa Rechazada ${position}, en ${delay}ms`);
      });
  }
});
