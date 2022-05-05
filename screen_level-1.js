function renderScreenLevel1() { 
    const background = document.querySelector('.background'); // посмотреть templates
    background.textContent = '';

    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = 'Level 1';
    
    background.appendChild(title);
}