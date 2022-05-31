import { renderResult } from './screen_Final';

function countNumPairs() {
  let pairs = 0;
  let arrBreak: number[] = [];

  for (let i = 0; i < window.application.createdCards.length; i++) {
    if (arrBreak.includes(i)) {
      continue;
    } else {
      for (let j = i + 1; j < window.application.createdCards.length; j++) {
        if (!arrBreak.includes(j)) {
          if (
            JSON.stringify(window.application.createdCards[i]) ===
            JSON.stringify(window.application.createdCards[j])
          ) {
            pairs++;
            arrBreak.push(i, j);
            break;
          }
          continue;
        }
      }
    }
  }

  window.application.numberPairs = pairs;
  console.log(arrBreak);
  console.log(window.application.numberPairs);
}

function startTimer() {
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

function compareCards(numCard: number) {
  debugger;
  if (
    JSON.stringify(window.application.selectedCards[numCard]) ===
    JSON.stringify(window.application.selectedCards[numCard - 1])
  ) {
    console.log(
      window.application.selectedCards[numCard],
      window.application.selectedCards[numCard - 1]
    );
    window.application.numberPairs--;
    console.log(window.application.numberPairs);
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

function saveCards(event: any) {
  event.target.classList = 'cardBody';
  if (window.application.indexCard === 0) {
    window.application.selectedCards[window.application.indexCard] = {
      rank: event.target.querySelector('.rankTop').textContent,
      suit: event.target.querySelector('.suitTop').textContent,
    };
    window.application.indexCard++;
  } else if (window.application.indexCard === 1) {
    window.application.selectedCards[window.application.indexCard] = {
      rank: event.target.querySelector('.rankTop').textContent,
      suit: event.target.querySelector('.suitTop').textContent,
    };
    compareCards(window.application.indexCard);
    window.application.indexCard--;
  }
}

function hideCards() {
  const cardsBody = document.querySelectorAll('.cardBody');
  cardsBody.forEach((card) => {
    card.classList.add('hidden', 'cardShirt');
  });

  window.application.interval = setInterval(startTimer, 1000);
  window.application.indexCard = 0;
  const fieldCards = document.querySelector(
    '.fieldCards'
  ) as HTMLDivElement | null;
  if (fieldCards != null) {
    fieldCards.addEventListener('click', saveCards);
  }
}

export { countNumPairs, hideCards };
