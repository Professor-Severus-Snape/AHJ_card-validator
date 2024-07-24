import MainTitle from '../components/mainTitle/MainTitle';
import Cards from '../components/cards/Cards';
import Form from '../components/form/Form';
import Copyrights from '../components/copyrights/Copyrights';
import luhnAlgorithm from './functions/luhnAlgorithm';
import checkCardValidity from './functions/checkCardValidity';

export default class App {
  constructor() {
    this.mainTitle = new MainTitle();
    this.cards = new Cards();
    this.form = new Form();
    this.copyrights = new Copyrights();
  }

  init() {
    this.render();
    this.addEventListeners();
    this.copyrights.checkRights();
  }

  render() {
    this.container = document.querySelector('.container');
    this.container.append(this.mainTitle.element);
    this.container.append(this.cards.element);
    this.container.append(this.form.element);
    this.container.append(this.copyrights.element);
  }

  addEventListeners() {
    this.form.submitEventListener(this.onFormSubmit.bind(this));
    this.form.inputEventListener(this.onInput.bind(this));
  }

  rerender() {
    this.cards.activateCards();
    this.form.renderInitialState();
  }

  onInput() {
    this.rerender();
    this.form.validateInput();
  }

  onFormSubmit(event) {
    event.preventDefault();

    const cardNumber = this.form.getCardNumber();
    const inputLength = cardNumber.length;
    let text = '';

    if (!inputLength) {
      text = 'Введите номер карты!';
    } else if (inputLength > 11) {
      if (luhnAlgorithm(cardNumber)) {
        const result = checkCardValidity(cardNumber);
        if (result) {
          text = result;
          this.cards.deActivateCards(result);
          this.form.setValidInput();
          this.form.setValidTooltip();
        } else {
          this.form.setInValidInput();
          text = 'Платежная система не определена!';
        }
      } else {
        text = 'Неверный номер карты!';
        this.form.setInValidInput();
      }
    } else {
      text = 'Введите от 12 до 19 цифр!';
    }

    this.form.setTooltipText(text);
    this.form.showTooltip();
  }
}
