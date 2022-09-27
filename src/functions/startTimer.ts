export default function startTimer() {
  window.application.seconds++;
  if (window.application.seconds <= 9) {
    const timeSec = document.querySelector('.timeSec') as HTMLDivElement | null;
    if (timeSec != null) {
      timeSec.textContent = '0' + window.application.seconds;
    }
  } else {
    const timeSec = document.querySelector('.timeSec') as HTMLDivElement | null;
    if (timeSec != null) {
      timeSec.textContent = window.application.seconds;
    }
  }
  if (window.application.seconds > 59) {
    window.application.seconds = 0;
    window.application.minutes++;
    if (window.application.minutes <= 9) {
      const timeMin = document.querySelector(
        '.timeMin'
      ) as HTMLDivElement | null;
      if (timeMin != null) {
        timeMin.textContent = '0' + window.application.minutes;
      }
    } else {
      const timeMin = document.querySelector(
        '.timeMin'
      ) as HTMLDivElement | null;
      if (timeMin != null) {
        timeMin.textContent = window.application.minutes;
      }
    }
  }
}
