export default class Form {
  // <form class="form">
  //   <label class="form__label visually-hidden" for="cardNumber">Введите номер карты</label>
  //   <input class="form__input" id="cardNumber" type="text" placeholder="Введите номер карты">
  //   <div class="form__tooltip hidden"></div>
  //   <button class="form__button" type="submit">Click to Validate</button>
  // </form>
  constructor() {
    this.element = document.createElement('form');
    this.element.classList.add('form');

    this.labelElement = document.createElement('label');
    this.labelElement.classList.add('form__label', 'visually-hidden');
    this.labelElement.for = 'cardNumber';
    this.labelElement.textContent = 'Введите номер карты';

    this.inputElement = document.createElement('input');
    this.inputElement.classList.add('form__input');
    this.inputElement.id = 'cardNumber';
    this.inputElement.type = 'text';
    this.inputElement.placeholder = 'Введите номер карты';

    this.tooltipElement = document.createElement('div');
    this.tooltipElement.classList.add('form__tooltip', 'hidden');

    this.buttonElement = document.createElement('button');
    this.buttonElement.classList.add('form__button');
    this.buttonElement.type = 'submit';
    this.buttonElement.textContent = 'Click to Validate';

    this.element.append(
      this.labelElement,
      this.inputElement,
      this.tooltipElement,
      this.buttonElement,
    );
  }
}
