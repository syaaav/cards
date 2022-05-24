import { renderStartScreen, createNewEl } from './screen_Start.js';

function renderResult(container, status) {
  container.style.position = 'relative';

  createNewEl('div', 'js-overlay', '', container);
  createNewEl('div', 'js-box', '', document.querySelector('.js-overlay'));
  document.querySelector('.js-box').classList.add('difficulty');

  createNewEl('div', 'js-box-img', '', document.querySelector('.js-box'));
  createNewEl('div', 'js-box-title', '', document.querySelector('.js-box'));
  createNewEl(
    'div',
    'js-box-text',
    'Затраченное время:',
    document.querySelector('.js-box')
  );
  createNewEl(
    'div',
    'js-box-time',
    `${document.querySelector('.timeMin').textContent}.${
      document.querySelector('.timeSec').textContent
    }`,
    document.querySelector('.js-box')
  );
  createNewEl(
    'button',
    'js-box-button',
    'Играть снова',
    document.querySelector('.js-box')
  );

  if (status === 'win') {
    document.querySelector('.js-box-img').textContent = '🥳';
    document.querySelector('.js-box-title').textContent = 'Вы выиграли!';
  } else {
    document.querySelector('.js-box-img').textContent = '😔';
    document.querySelector('.js-box-title').textContent = 'Вы проиграли!';
  }

  document
    .querySelector('.js-box-button')
    .addEventListener('click', (event) => {
      event.preventDefault();
      renderStartScreen();
    });
}

export { renderResult };
