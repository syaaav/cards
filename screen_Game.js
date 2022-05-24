import { createNewEl, renderStartScreen } from './screen_Start.js';
import * as GameFunctions from './logic_Game.js';

function renderScreenGame() {
  const background = document.querySelector('.background');
  background.textContent = '';

  createNewEl('div', 'fieldGame', '', background);
  document.querySelector('.fieldGame').classList.add('center');

  createNewEl('div', 'topMenu', '', document.querySelector('.fieldGame'));
  createNewEl('div', 'fieldCards', '', document.querySelector('.fieldGame'));

  renderTopMenu(document.querySelector('.topMenu'));
  renderCards(document.querySelector('.fieldCards'));
}

function renderTopMenu(container) {
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

  document.querySelector('.button').addEventListener('click', (event) => {
    event.preventDefault();
    renderStartScreen();
  });
}

const arrRanks = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6'];
const arrSuits = ['♠️', '♥️', '♦️', '♣️'];

function renderCards(container) {
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

      createNewEl(
        'div',
        'cardBody',
        '',
        document.querySelectorAll('.cardsRow')[row]
      );
      createNewEl(
        'div',
        'cardTop',
        '',
        document.querySelectorAll('.cardBody')[index]
      );
      createNewEl(
        'div',
        'rankTop',
        arrRanks[randomIndexRanks],
        document.querySelectorAll('.cardTop')[index]
      );
      createNewEl(
        'div',
        'suitTop',
        arrSuits[randomIndexSuits],
        document.querySelectorAll('.cardTop')[index]
      );
      createNewEl(
        'div',
        'suitCenter',
        arrSuits[randomIndexSuits],
        document.querySelectorAll('.cardBody')[index]
      );
      createNewEl(
        'div',
        'cardBottom',
        '',
        document.querySelectorAll('.cardBody')[index]
      );
      createNewEl(
        'div',
        'suitBottom',
        arrSuits[randomIndexSuits],
        document.querySelectorAll('.cardBottom')[index]
      );
      createNewEl(
        'div',
        'rankBottom',
        arrRanks[randomIndexRanks],
        document.querySelectorAll('.cardBottom')[index]
      );

      index++;
    }
  }
  GameFunctions.countNumPairs();
  setTimeout(GameFunctions.hideCards, 5000);
}

export { renderScreenGame, renderTopMenu, renderCards };
