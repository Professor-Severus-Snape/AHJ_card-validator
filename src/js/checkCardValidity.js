// проверка карты на принадлежность к определенной платежной системе:
export default function checkCardValidity(input) {
  let cardType = '';

  const slice_1 = +input.slice(0, 1);
  const slice_2 = +input.slice(0, 2);
  const slice_3 = +input.slice(0, 3);
  const slice_4 = +input.slice(0, 4);

  if (slice_4 > 2199 && slice_4 < 2205) {
    cardType = 'MIR';
  } else if (slice_4 > 2220 && slice_4 < 2721 || slice_2 > 50 && slice_2 < 56) {
    cardType = 'MasterCard';
  } else if (slice_2 === 34 || slice_2 === 37) {
    cardType = 'AmericanExpress';
  } else if (slice_4 > 3527 && slice_4 < 3590) {
    cardType = 'JCB';
  } else if (slice_3 > 299 && slice_3 < 306 || slice_2 === 36 || slice_2 === 38 || slice_2 === 39) {
    cardType = 'DinersClub';
  } else if (slice_1 === 4) {
    cardType = 'Visa';
  } else if (slice_4 === 6011 || (slice_3 > 643 && slice_3 < 650) || slice_2 === 65 ) {
    cardType = 'Discover';
  }

  return cardType;
}
