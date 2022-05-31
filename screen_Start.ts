import './style.css';
import * as CardsFunctions from './screen_Game';

declare global {
  interface Window {
    application: any;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderStartScreen();
});

function createNewEl(
  type: string,
  className: string,
  text: string,
  container: HTMLDivElement | null
) {
  const el = document.createElement(type);
  el.classList.add(className);
  el.textContent = text;
  if (container != null) {
    container.appendChild(el);
  }
}

function renderStartScreen() {
  window.application.seconds = 0;
  window.application.minutes = 0;

  const background = document.querySelector(
    '.background'
  ) as HTMLDivElement | null;
  if (background != null) {
    background.textContent = '';
  }

  createNewEl('div', 'difficulty', '', background);
  const diff = document.querySelector('.difficulty') as HTMLDivElement | null;
  if (diff != null) {
    renderDifficulty(diff);
  }
}

function renderDifficulty(container: HTMLDivElement) {
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

  const diffLev = document.querySelector(
    '.difficultyLevels'
  ) as HTMLDivElement | null;
  if (diffLev != null) {
    diffLev.addEventListener('click', (event: any) => {
      event.preventDefault();
      if (event.target != null) {
        window.application.difficulty = event.target.textContent;
        window.application.difficulty = event.target.textContent;
      }
    });
  }

  const button = document.querySelector('.button') as HTMLDivElement | null;
  if (button != null) {
    button.addEventListener('click', (event) => {
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
}

export { createNewEl, renderStartScreen };
