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
function renderDifficulty (container) { 
    const title = document.createElement('div');
    title.classList.add('difficulty_title');
    title.textContent = 'Выбери сложность';

    const levels = document.createElement('div');
    levels.classList.add('difficulty_levels');

        const first = document.createElement('div');
        first.classList.add('first');
        first.textContent = '1';
        const second = document.createElement('div');
        second.classList.add('second');
        second.textContent = '2';
        const third = document.createElement('div');
        third.classList.add('third');
        third.textContent = '3';

    const button = document.createElement('button');
    button.classList.add('button');
    button.textContent = 'Старт';

    button.addEventListener('click', (event) => { 
        event.preventDefault();
        console.log('Кнопка работает');
    });

    container.appendChild(title);
    container.appendChild(levels);
        levels.appendChild(first);
        levels.appendChild(second);
        levels.appendChild(third);
    container.appendChild(button);
}