export default function countNumPairs() {
  let pairs = 0;
  let arrBreak: number[] = [];

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
  console.log(arrBreak);
  console.log(window.application.numberPairs);
}
