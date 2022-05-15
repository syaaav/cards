// отрисовываем страницу авторизации при загрузке ДОМ-дерева
document.addEventListener('DOMContentLoaded', () => {
  window.application.renderScreen('startScreen');
});

// функция для создания стартовой страницы
function renderStartScreen() {
  const background = document.querySelector('.background');
  background.textContent = '';

  const difficulty = document.createElement('div');
  difficulty.classList.add('difficulty');
  background.appendChild(difficulty);

  window.application.renderBlock('difficulty', difficulty);
}

// создаем окно выбора сложности
function renderDifficulty(container) {
  const title = document.createElement('div');
  title.classList.add('difficulty_title');
  title.textContent = 'Выбери сложность';
  container.appendChild(title);

  const levels = document.createElement('div');
  levels.classList.add('difficulty_levels');
  container.appendChild(levels);

  const first = document.createElement('div');
  first.classList.add('first');
  first.textContent = '1';
  levels.appendChild(first);
  const second = document.createElement('div');
  second.classList.add('second');
  second.textContent = '2';
  levels.appendChild(second);
  const third = document.createElement('div');
  third.classList.add('third');
  third.textContent = '3';
  levels.appendChild(third);

  const button = document.createElement('button');
  button.classList.add('button');
  button.textContent = 'Старт';
  container.appendChild(button);

  levels.addEventListener('click', (event) => {
    event.preventDefault();
    window.application.difficulty = event.target.textContent;
  });

  button.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Кнопка работает');

    if (window.application.difficulty === '1') {
      window.application.numberCards = 3;
    } else if (window.application.difficulty === '2') {
      window.application.numberCards = 6;
    } else if (window.application.difficulty === '3') {
      window.application.numberCards = 9;
    }
    window.application.renderScreen('screenGame');
  });
}
