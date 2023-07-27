const clockElement = document.getElementById('clock');

const hoursSpan = document.createElement('span');
clockElement.appendChild(hoursSpan);

const minutesSpan = document.createElement('span');

clockElement.appendChild(minutesSpan);

const secondsSpan = document.createElement('span');

clockElement.appendChild(secondsSpan);

function updateClock() {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  if (time.hours !== h) {
    time.hours = h;
    hoursSpan.textContent = h + ":";
  }
  if (time.minutes !== m) {
    time.minutes = m;
    minutesSpan.textContent = (m < 10) ? '0' + m + ':' : m+ ":";
  }
  if (time.seconds !== s) {
    time.seconds = s;
    secondsSpan.textContent = (s < 10) ? '0' + s : s;
  }
}

let time = {
  hours: -1,
  minutes: -1,
  seconds: -1
};

let clockId = setInterval(updateClock, 1000);
