import compareCards from './compareCards';

export default function saveCards(event: any) {
  event.target.classList = 'cardBody';
  if (window.application.indexCard === 0) {
    window.application.selectedCards[window.application.indexCard] = {
      rank: event.target.querySelector('.rankTop').textContent,
      suit: event.target.querySelector('.suitTop').textContent,
    };
    window.application.indexCard++;
  } else if (window.application.indexCard === 1) {
    window.application.selectedCards[window.application.indexCard] = {
      rank: event.target.querySelector('.rankTop').textContent,
      suit: event.target.querySelector('.suitTop').textContent,
    };
    compareCards(window.application.indexCard);
    window.application.indexCard--;
  }
}
