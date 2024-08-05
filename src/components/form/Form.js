import './form.css';

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

  submitEventListener(callback) {
    this.element.addEventListener('submit', callback);
  }

  inputEventListener(callback) {
    this.inputElement.addEventListener('input', callback);
  }

  renderInitialState() {
    this.inputElement.classList.remove('form__input_valid');
    this.inputElement.classList.remove('form__input_invalid');

    this.tooltipElement.classList.add('hidden');
    this.tooltipElement.classList.remove('valid');
  }

  validateInput() {
    // сохраняем начальное положение мигающего курсора:
    const index = this.inputElement.selectionStart;

    // не позволяем ввести ничего, кроме цифр 0-9:
    this.inputElement.value = this.inputElement.value.replace(/\D/g, '');
    // ограничиваем размер поля 19-ю цифрами:
    this.inputElement.value = this.inputElement.value.slice(0, 19);
    // разделяем пробелами каждые 4 цифры:
    this.inputElement.value = this.inputElement.value.split(/([0-9]{4})/).filter((num) => num).join(' ');

    // передвигаем курсор:
    if (this.inputElement.value[index - 1] === ' ') {
      this.inputElement.setSelectionRange(index + 1, index + 1);
    } else {
      this.inputElement.setSelectionRange(index, index);
    }
  }

  getCardNumber() {
    return this.inputElement.value.replaceAll(' ', '');
  }

  setValidInput() {
    this.inputElement.classList.add('form__input_valid');
  }

  setInValidInput() {
    this.inputElement.classList.add('form__input_invalid');
  }

  setValidTooltip() {
    this.tooltipElement.classList.add('valid');
  }

  setTooltipText(text) {
    this.tooltipElement.textContent = text;
  }

  showTooltip() {
    this.tooltipElement.classList.remove('hidden');
  }
}
