function renderScreenGame() {
  const background = document.querySelector('.background');
  background.textContent = '';

  const fieldGame = document.createElement('div');
  fieldGame.classList.add('fieldGame');
  fieldGame.classList.add('center');
  background.appendChild(fieldGame);

  const topMenu = document.createElement('div');
  topMenu.classList.add('topMenu');
  fieldGame.appendChild(topMenu);

  const fieldCards = document.createElement('div');
  fieldCards.classList.add('fieldCards');
  fieldGame.appendChild(fieldCards);

  window.application.renderBlock('topMenu', topMenu);
  window.application.renderBlock('fieldCards', fieldCards);
}

function renderTopMenu(container) {
  const fieldTime = document.createElement('div');
  fieldTime.classList.add('fieldTime');
  container.appendChild(fieldTime);

  const timerMin = document.createElement('div');
  timerMin.classList.add('timerMin');
  fieldTime.appendChild(timerMin);

  const titleMin = document.createElement('div');
  titleMin.classList.add('titleMin');
  titleMin.textContent = 'min';
  timerMin.appendChild(titleMin);
  const timeMin = document.createElement('div');
  timeMin.classList.add('timeMin');
  timeMin.textContent = '00';
  timerMin.appendChild(timeMin);

  const point = document.createElement('div');
  point.classList.add('point');
  point.textContent = '.';
  fieldTime.appendChild(point);

  const timerSec = document.createElement('div');
  timerSec.classList.add('timerSec');
  fieldTime.appendChild(timerSec);

  const titleSec = document.createElement('div');
  titleSec.classList.add('titleSec');
  titleSec.textContent = 'sec';
  timerSec.appendChild(titleSec);
  const timeSec = document.createElement('div');
  timeSec.classList.add('timeSec');
  timeSec.textContent = '00';
  timerSec.appendChild(timeSec);

  const fieldButton = document.createElement('div');
  fieldButton.classList.add('fieldButton');
  container.appendChild(fieldButton);

  const button = document.createElement('button');
  button.classList.add('button');
  button.textContent = 'Старт';
  fieldButton.appendChild(button);

  button.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Кнопка работает');
  });
}

function renderCards(container) {
  // открытые карты
  const arrRanks = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6'];
  const arrSuits = ['♠️', '♥️', '♦️', '♣️'];

  for (let suit = 0; suit < 4; suit++) {
    const cardsRow = document.createElement('div');
    cardsRow.classList.add('cardsRow');
    container.appendChild(cardsRow);

    for (let rank = 0; rank < window.application.numberCards; rank++) {
      const cardBody = document.createElement('div');
      cardBody.classList.add('cardBody');
      cardsRow.appendChild(cardBody);

      const cardTop = document.createElement('div');
      cardTop.classList.add('cardTop');
      cardBody.appendChild(cardTop);

      const rankTop = document.createElement('div');
      rankTop.classList.add('rankTop');
      rankTop.textContent = arrRanks[rank];
      cardTop.appendChild(rankTop);

      const suitTop = document.createElement('div');
      suitTop.classList.add('suitTop');
      suitTop.textContent = arrSuits[suit];
      cardTop.appendChild(suitTop);

      const suitCenter = document.createElement('div');
      suitCenter.classList.add('suitCenter');
      suitCenter.textContent = arrSuits[suit];
      cardBody.appendChild(suitCenter);

      const cardBottom = document.createElement('div');
      cardBottom.classList.add('cardBottom');
      cardBody.appendChild(cardBottom);

      const suitBottom = document.createElement('div');
      suitBottom.classList.add('suitBottom');
      suitBottom.textContent = arrSuits[suit];
      cardBottom.appendChild(suitBottom);

      const rankBottom = document.createElement('div');
      rankBottom.classList.add('rankBottom');
      rankBottom.textContent = arrRanks[rank];
      cardBottom.appendChild(rankBottom);
    }
  }
}

function hideCards() {
  // прячем карты и запускаем таймер
  const cardsBody = document.querySelectorAll('.cardBody');
  const cardTop = document.querySelectorAll('.cardTop');
  const suitCenter = document.querySelectorAll('.suitCenter');
  const cardBottom = document.querySelectorAll('.cardBottom');

  for (const key in cardsBody) {
    cardTop[key].classList = 'hidden';
    suitCenter[key].classList = 'hidden';
    cardBottom[key].classList = 'hidden';
    cardsBody[key].classList = 'cardShirt';
  }

  const timeSec = document.querySelector('.timeSec');
  const timeMin = document.querySelector('.timeMin');

  // Variables
  let minute = 0;
  let second = 0;

  clearInterval;
  setInterval(startTimer, 1000);

  function startTimer() {
    second++;
    if (second <= 9) {
      timeSec.textContent = '0' + second;
    } else {
      timeSec.textContent = second;
    }
    if (second > 59) {
      second = 0;
      minute++;
      if (minute <= 9) {
        timeMin.textContent = '0' + minute;
      } else {
        timeMin.textContent = minute;
      }
    }
  }
}

setTimeout(hideCards, 5000);
