import renderStartScreen from './screen_Start';
import createNewEl from './functions/createNewElement';
import { arrRanks, arrSuits } from './constants';
import countNumPairs from './functions/countNumberPairs';
import hideCards from './functions/hideCards';

function renderScreenGame() {
  const background = document.querySelector(
    '.background'
  ) as HTMLDivElement | null;
  if (background != null) {
    background.textContent = '';
  }

  createNewEl('div', 'fieldGame', '', background);
  const fieldGame = document.querySelector(
    '.fieldGame'
  ) as HTMLDivElement | null;
  if (fieldGame != null) {
    fieldGame.classList.add('center');
  }

  createNewEl('div', 'topMenu', '', document.querySelector('.fieldGame'));
  createNewEl('div', 'fieldCards', '', document.querySelector('.fieldGame'));

  const topMenu = document.querySelector('.topMenu') as HTMLDivElement | null;
  if (topMenu != null) {
    renderTopMenu(topMenu);
  }
  const fieldCards = document.querySelector(
    '.fieldCards'
  ) as HTMLDivElement | null;
  if (fieldCards != null) {
    renderCards(fieldCards);
  }
}

function renderTopMenu(container: HTMLDivElement) {
  createNewEl('div', 'fieldTime', '', container);

  createNewEl('div', 'timerMin', '', document.querySelector('.fieldTime'));
  createNewEl('div', 'titleMin', 'min', document.querySelector('.timerMin'));
  createNewEl('div', 'timeMin', '00', document.querySelector('.timerMin'));

  createNewEl('div', 'point', '.', document.querySelector('.fieldTime'));

  createNewEl('div', 'timerSec', '', document.querySelector('.fieldTime'));
  createNewEl('div', 'titleSec', 'sec', document.querySelector('.timerSec'));
  createNewEl('div', 'timeSec', '00', document.querySelector('.timerSec'));

  createNewEl('div', 'fieldButton', '', container);
  createNewEl(
    'button',
    'button',
    'Начать заново',
    document.querySelector('.fieldButton')
  );

  const button = document.querySelector('.button') as HTMLDivElement | null;
  if (button != null) {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      window.application.seconds = 0;
      window.application.minutes = 0;
      clearInterval(window.application.interval);
      renderStartScreen();
    });
  }
}

function renderCards(container: HTMLDivElement) {
  let index = 0;

  for (let row = 0; row < 3; row++) {
    createNewEl('div', 'cardsRow', '', container);

    for (
      let numInRow = 0;
      numInRow < window.application.numberCards;
      numInRow++
    ) {
      let randomIndexRanks = Math.floor(Math.random() * arrRanks.length);
      let randomIndexSuits = Math.floor(Math.random() * arrSuits.length);

      window.application.createdCards[index] = {
        rank: arrRanks[randomIndexRanks],
        suit: arrSuits[randomIndexSuits],
      };

      const cardsRow = document.querySelectorAll(
        '.cardsRow'
      ) as unknown as NodeListOf<Element>;
      let arrCardsRow = Array.prototype.slice.call(cardsRow);
      createNewEl('div', 'cardBody', '', arrCardsRow[row]);

      const cardBody = document.querySelectorAll(
        '.cardBody'
      ) as unknown as NodeListOf<Element>;
      let arrCardBody = Array.prototype.slice.call(cardBody);
      createNewEl('div', 'cardTop', '', arrCardBody[index]);

      const cardTop = document.querySelectorAll(
        '.cardTop'
      ) as unknown as NodeListOf<Element>;
      let arrCardTop = Array.prototype.slice.call(cardTop);
      createNewEl(
        'div',
        'rankTop',
        arrRanks[randomIndexRanks],
        arrCardTop[index]
      );

      createNewEl(
        'div',
        'suitTop',
        arrSuits[randomIndexSuits],
        arrCardTop[index]
      );

      createNewEl(
        'div',
        'suitCenter',
        arrSuits[randomIndexSuits],
        arrCardBody[index]
      );

      createNewEl('div', 'cardBottom', '', arrCardBody[index]);

      const cardBottom = document.querySelectorAll(
        '.cardBottom'
      ) as unknown as NodeListOf<Element>;
      let arrCardBottom = Array.prototype.slice.call(cardBottom);
      createNewEl(
        'div',
        'suitBottom',
        arrSuits[randomIndexSuits],
        arrCardBottom[index]
      );

      createNewEl(
        'div',
        'rankBottom',
        arrRanks[randomIndexRanks],
        arrCardBottom[index]
      );

      index++;
    }
  }
  countNumPairs();
  setTimeout(hideCards, 5000);
}

export { renderScreenGame, renderTopMenu, renderCards };
