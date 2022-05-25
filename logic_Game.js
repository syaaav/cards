import { renderResult } from './screen_Final.js';

function countNumPairs() {
  let pairs = 0;
  let arrBreak = [];

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
}

function startTimer() {
  window.application.seconds++;
  if (window.application.seconds <= 9) {
    document.querySelector('.timeSec').textContent =
      '0' + window.application.seconds;
  } else {
    document.querySelector('.timeSec').textContent = window.application.seconds;
  }
  if (window.application.seconds > 59) {
    window.application.seconds = 0;
    window.application.minutes++;
    if (window.application.minutes <= 9) {
      document.querySelector('.timeMin').textContent =
        '0' + window.application.minutes;
    } else {
      document.querySelector('.timeMin').textContent =
        window.application.minutes;
    }
  }
}

function compareCards(numCard) {
  if (
    JSON.stringify(window.application.selectedCards[numCard]) ===
    JSON.stringify(window.application.selectedCards[numCard - 1])
  ) {
    window.application.numberPairs--;
    if (window.application.numberPairs === 0) {
      clearInterval(window.application.interval);
      window.application.minutes = 0;
      window.application.seconds = 0;
      renderResult(document.querySelector('.background'), 'win');
    }
  } else {
    clearInterval(window.application.interval);
    window.application.minutes = 0;
    window.application.seconds = 0;
    renderResult(document.querySelector('.background'), 'lose');
  }
}

function saveCards(event) {
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
  document.querySelector('.fieldCards').addEventListener('click', saveCards);
}

export { countNumPairs, hideCards };
