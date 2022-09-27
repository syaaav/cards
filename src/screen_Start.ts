import './style/style.scss';
import * as CardsFunctions from './screen_Game';
import createNewEl from './functions/createNewElement';

declare global {
  interface Window {
    application: any;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderStartScreen();
});

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

  const difficultyLevel = document.querySelector(
    '.difficultyLevels'
  ) as HTMLDivElement | null;
  if (difficultyLevel != null) {
    difficultyLevel.addEventListener('click', (event: any) => {
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

export default renderStartScreen;
