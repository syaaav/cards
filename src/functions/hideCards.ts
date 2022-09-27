import startTimer from './startTimer';
import saveCards from './saveCards';

function hideCards() {
  const cardsBody = document.querySelectorAll('.cardBody');
  cardsBody.forEach((card) => {
    card.classList.add('hidden', 'cardShirt');
  });

  window.application.interval = setInterval(startTimer, 1000);
  window.application.indexCard = 0;
  const fieldCards = document.querySelector(
    '.fieldCards'
  ) as HTMLDivElement | null;
  if (fieldCards != null) {
    fieldCards.addEventListener('click', saveCards);
  }
}

export default hideCards;
