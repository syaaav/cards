// считаем кол-во одинаковых пар
function countNumPairs() {
  let pairs = 0;
  let arrBreak = [];

  for (let i = 0; i < window.application.createdCards.length; i++) {
    if (arrBreak.includes(i)) {
      continue;
    } else {
      for (let j = i + 1; j < window.application.createdCards.length; j++) {
        if (!arrBreak.includes(j)) {
          if (
            JSON.stringify(window.application.createdCards[i]) ===
            JSON.stringify(window.application.createdCards[j])
          ) {
            pairs++;
            arrBreak.push(i, j);
            break;
          }
          continue;
        }
      }
    }
  }
  window.application.numberPairs = pairs;
}

// Variables
let minute = 0;
let second = 0;

function startTimer() {
  second++;
  if (second <= 9) {
    document.querySelector('.timeSec').textContent = '0' + second;
  } else {
    document.querySelector('.timeSec').textContent = second;
  }
  if (second > 59) {
    second = 0;
    minute++;
    if (minute <= 9) {
      document.querySelector('.timeMin').textContent = '0' + minute;
    } else {
      document.querySelector('.timeMin').textContent = minute;
    }
  }
}

function hideCards() {
  const cardsBody = document.querySelectorAll('.cardBody');
  const cardTop = document.querySelectorAll('.cardTop');
  const suitCenter = document.querySelectorAll('.suitCenter');
  const cardBottom = document.querySelectorAll('.cardBottom');

  cardsBody.forEach((card) => {
    card.classList.add('cardShirt');
  });
  cardTop.forEach((card) => {
    card.classList.add('hidden');
  });
  suitCenter.forEach((card) => {
    card.classList.add('hidden');
  });
  cardBottom.forEach((card) => {
    card.classList.add('hidden');
  });

  clearInterval;
  setInterval(startTimer, 1000);

  let numCard = 0;
  let fieldCards = document.querySelector('.fieldCards');

  fieldCards.addEventListener('click', (event) => {
    // открываем выбранную карту
    event.target.classList = 'cardBody';
    let hiddenElements = event.target.querySelectorAll('.hidden');
    hiddenElements.forEach((element) => {
      element.classList.remove('hidden');
    });

    // записываем выбранную карту
    if (numCard === 0) {
      window.application.selectedCards[numCard] = {
        rank: event.target.querySelector('.rankTop').textContent,
        suit: event.target.querySelector('.suitTop').textContent,
      };
      numCard++;
    } else if (numCard === 1) {
      window.application.selectedCards[numCard] = {
        rank: event.target.querySelector('.rankTop').textContent,
        suit: event.target.querySelector('.suitTop').textContent,
      };

      // сравниваем 2 выбранные карты
      if (
        JSON.stringify(window.application.selectedCards[numCard]) ===
        JSON.stringify(window.application.selectedCards[numCard - 1])
      ) {
        window.application.numberPairs--;
        numCard--;
        if (window.application.numberPairs === 0) {
          alert('win!');
        }
      } else {
        alert('lose!');
      }
    }
  });
}

export { countNumPairs, hideCards };
