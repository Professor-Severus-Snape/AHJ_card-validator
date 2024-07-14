export default class Form {
  // <form class="form">
  //   <input class="form__input" type="text" placeholder="Введите номер карты">
  //   <button class="form__button" type="submit">Click to Validate</button>
  // </form>
  constructor() {
    this.element = document.createElement('form');
    this.element.classList.add('form');

    this.inputElement = document.createElement('input');
    this.inputElement.classList.add('form__input');
    this.inputElement.type = 'text';
    this.inputElement.placeholder = 'Введите номер карты';

    this.buttonElement = document.createElement('button');
    this.buttonElement.classList.add('form__button');
    this.buttonElement.type = 'submit';
    this.buttonElement.textContent = 'Click to Validate';

    this.element.append(this.inputElement, this.buttonElement);
  }
}
