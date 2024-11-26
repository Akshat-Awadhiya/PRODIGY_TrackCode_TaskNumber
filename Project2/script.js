// DOM Elements
const startPauseButton = document.getElementById('start-pause');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const millisecondsDisplay = document.getElementById('milliseconds');
const lapList = document.getElementById('lap-list');

let timerInterval;
let elapsedTime = 0;
let isRunning = false;

// Format time helper function
const formatTime = (time) => (time < 10 ? `0${time}` : time);

// Start or Pause Timer
startPauseButton.addEventListener('click', () => {
  if (!isRunning) {
    isRunning = true;
    startPauseButton.textContent = 'Pause';
    startPauseButton.style.background = '#fbc02d';
    timerInterval = setInterval(() => {
      elapsedTime += 10;
      const minutes = Math.floor(elapsedTime / 60000);
      const seconds = Math.floor((elapsedTime % 60000) / 1000);
      const milliseconds = Math.floor((elapsedTime % 1000) / 10);

      minutesDisplay.textContent = formatTime(minutes);
      secondsDisplay.textContent = formatTime(seconds);
      millisecondsDisplay.textContent = formatTime(milliseconds);
    }, 10);
  } else {
    isRunning = false;
    clearInterval(timerInterval);
    startPauseButton.textContent = 'Start';
    startPauseButton.style.background = '#4caf50';
  }
});

// Reset Timer
resetButton.addEventListener('click', () => {
  clearInterval(timerInterval);
  elapsedTime = 0;
  isRunning = false;
  startPauseButton.textContent = 'Start';
  startPauseButton.style.background = '#4caf50';
  minutesDisplay.textContent = '00';
  secondsDisplay.textContent = '00';
  millisecondsDisplay.textContent = '00';
  lapList.innerHTML = '';
});

// Record Lap Time
lapButton.addEventListener('click', () => {
  if (isRunning) {
    const minutes = formatTime(Math.floor(elapsedTime / 60000));
    const seconds = formatTime(Math.floor((elapsedTime % 60000) / 1000));
    const milliseconds = formatTime(Math.floor((elapsedTime % 1000) / 10));

    const lapItem = document.createElement('li');
    lapItem.textContent = `${minutes}:${seconds}:${milliseconds}`;
    lapList.appendChild(lapItem);
  }
});
