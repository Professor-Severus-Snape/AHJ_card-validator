import visa from '../img/card-visa.svg';
import mastercard from '../img/card-mastercard.svg';
import americanExpress from '../img/card-americanExpress.svg';
import discoverCard from '../img/card-discoverCard.svg';
import jcb from '../img/card-jcb.png';
import dinersClub from '../img/card-dinersClub.svg';
import mir from '../img/card-mir.png';

export default class Cards {
  constructor() {
    this.element = `
      <ul class="cards">
        <li class="cards__item cards__item_visa">
          <img class="cards__img" src="${visa}" alt="visa">
        </li>
        <li class="cards__item cards__item_mastercard">
          <img class="cards__img" src="${mastercard}" alt="mastercard">
        </li>
        <li class="cards__item cards__item_americanExpress">
          <img class="cards__img" src="${americanExpress}" alt="americanExpress">
        </li>
        <li class="cards__item cards__item_discoverCard">
          <img class="cards__img" src="${discoverCard}" alt="discoverCard">
        </li>
        <li class="cards__item cards__item_jcb">
          <img class="cards__img" src="${jcb}" alt="jcb">
        </li>
        <li class="cards__item cards__item_dinersClub">
          <img class="cards__img" src="${dinersClub}" alt="dinersClub">
        </li>
        <li class="cards__item cards__item_mir">
          <img class="cards__img" src="${mir}" alt="mir">
        </li>
      </ul>
    `;
  }
}
