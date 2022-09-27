import renderStartScreen from './screen_Start';
import createNewEl from './functions/createNewElement';

function renderResult(container: HTMLDivElement, status: string) {
  container.style.position = 'relative';

  createNewEl('div', 'js-overlay', '', container);
  createNewEl('div', 'js-box', '', document.querySelector('.js-overlay'));
  const jsBox = document.querySelector('.js-box') as HTMLDivElement | null;
  if (jsBox != null) {
    jsBox.classList.add('difficulty');
  }

  createNewEl('div', 'js-box-img', '', document.querySelector('.js-box'));
  createNewEl('div', 'js-box-title', '', document.querySelector('.js-box'));
  createNewEl(
    'div',
    'js-box-text',
    'Затраченное время:',
    document.querySelector('.js-box')
  );

  const timeMin = document.querySelector('.timeMin') as HTMLDivElement | null;
  const timeSec = document.querySelector('.timeSec') as HTMLDivElement | null;
  if (timeMin != null && timeSec != null) {
    createNewEl(
      'div',
      'js-box-time',
      `${timeMin.textContent}.${timeSec.textContent}`,
      document.querySelector('.js-box')
    );
  }

  createNewEl(
    'button',
    'js-box-button',
    'Играть снова',
    document.querySelector('.js-box')
  );

  if (status === 'win') {
    const jsBoxImg = document.querySelector(
      '.js-box-img'
    ) as HTMLDivElement | null;
    if (jsBoxImg != null) {
      jsBoxImg.textContent = '🥳';
    }
    const jsBoxTitle = document.querySelector(
      '.js-box-title'
    ) as HTMLDivElement | null;
    if (jsBoxTitle != null) {
      jsBoxTitle.textContent = 'Вы выиграли!';
    }
  } else {
    const jsBoxImg = document.querySelector(
      '.js-box-img'
    ) as HTMLDivElement | null;
    if (jsBoxImg != null) {
      jsBoxImg.textContent = '😔';
    }
    const jsBoxTitle = document.querySelector(
      '.js-box-title'
    ) as HTMLDivElement | null;
    if (jsBoxTitle != null) {
      jsBoxTitle.textContent = 'Вы проиграли!';
    }
  }

  const button = document.querySelector(
    '.js-box-button'
  ) as HTMLDivElement | null;
  if (button != null) {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      renderStartScreen();
    });
  }
}

export default renderResult;
