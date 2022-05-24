import './style.css';
import * as CardsFunctions from './screen_Game.js';

document.addEventListener('DOMContentLoaded', () => {
  renderStartScreen();
});

function createNewEl(type, className, text, container) {
  const el = document.createElement(type);
  el.classList.add(className);
  el.textContent = text;
  container.appendChild(el);
}

function renderStartScreen() {
  const background = document.querySelector('.background');
  background.textContent = '';

  createNewEl('div', 'difficulty', '', background);
  renderDifficulty(document.querySelector('.difficulty'));
}

function renderDifficulty(container) {
  createNewEl('div', 'difficultyTitle', 'Выберите сложность', container);

  createNewEl('div', 'difficultyLevels', '', container);

  createNewEl('div', 'first', '1', document.querySelector('.difficultyLevels'));
  createNewEl(
    'div',
    'second',
    '2',
    document.querySelector('.difficultyLevels')
  );
  createNewEl('div', 'third', '3', document.querySelector('.difficultyLevels'));

  createNewEl('button', 'button', 'Старт', container);

  document
    .querySelector('.difficultyLevels')
    .addEventListener('click', (event) => {
      event.preventDefault();
      window.application.difficulty = event.target.textContent;
    });

  document.querySelector('.button').addEventListener('click', (event) => {
    event.preventDefault();

    if (window.application.difficulty === '1') {
      window.application.numberCards = 2;
    } else if (window.application.difficulty === '2') {
      window.application.numberCards = 4;
    } else if (window.application.difficulty === '3') {
      window.application.numberCards = 6;
    }
    CardsFunctions.renderScreenGame();
  });
}

export { createNewEl, renderStartScreen };
