import renderResult from '../screen_Final';

export default function compareCards(numCard: number) {
  if (
    JSON.stringify(window.application.selectedCards[numCard]) ===
    JSON.stringify(window.application.selectedCards[numCard - 1])
  ) {
    window.application.numberPairs--;
    if (window.application.numberPairs === 0) {
      clearInterval(window.application.interval);
      window.application.minutes = 0;
      window.application.seconds = 0;
      const background = document.querySelector(
        '.background'
      ) as HTMLDivElement | null;
      if (background != null) {
        renderResult(background, 'win');
      }
    }
  } else {
    clearInterval(window.application.interval);
    window.application.minutes = 0;
    window.application.seconds = 0;
    const background = document.querySelector(
      '.background'
    ) as HTMLDivElement | null;
    if (background != null) {
      renderResult(background, 'lose');
    }
  }
}
