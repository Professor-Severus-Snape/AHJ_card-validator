import visa from '../img/card-visa.svg';
import mastercard from '../img/card-mastercard.svg';
import americanExpress from '../img/card-americanExpress.svg';
import discoverCard from '../img/card-discoverCard.svg';
import jcb from '../img/card-jcb.png';
import dinersClub from '../img/card-dinersClub.svg';
import mir from '../img/card-mir.png';

export default class Cards {
  constructor() {
    this.element = document.createElement('ul');
    this.element.classList.add('cards');

    const cardItems = [
      { type: 'visa', src: visa, alt: 'Visa' },
      { type: 'mastercard', src: mastercard, alt: 'MasterCard' },
      { type: 'americanexpress', src: americanExpress, alt: 'AmericanExpress' },
      { type: 'discovercard', src: discoverCard, alt: 'DiscoverCard' },
      { type: 'jcb', src: jcb, alt: 'JCB' },
      { type: 'dinersclub', src: dinersClub, alt: 'DinersClub' },
      { type: 'mir', src: mir, alt: 'MIR' },
    ];

    cardItems.forEach((cardItem) => {
      const item = document.createElement('li');
      item.classList.add('cards__item');

      const image = document.createElement('img');
      image.classList.add('cards__img', cardItem.type);
      image.src = cardItem.src;
      image.alt = cardItem.alt;

      item.append(image);

      this.element.append(item);
    });
  }
}
