import MainTitle from './MainTitle';
import Cards from './Cards';
import Form from './Form';
import Copyrights from './Copyrights';
import luhnAlgorithm from './luhnAlgorithm';
import checkCardValidity from './checkCardValidity';

export default class App {
  constructor() {
    this.container = document.querySelector('.container');

    this.mainTitle = new MainTitle().element;

    this.cards = new Cards().element;
    this.cardImages = this.cards.querySelectorAll('.cards__img');

    this.formConstructor = new Form();
    this.form = this.formConstructor.element;
    this.input = this.formConstructor.inputElement;
    this.tooltip = this.formConstructor.tooltipElement;
    this.button = this.formConstructor.buttonElement;

    this.copyrights = new Copyrights().element;
  }

  init() {
    this.render();
    this.checkRights();
  }

  // отрисовка первоначального состояния трекера:
  render() {
    this.container.append(this.mainTitle);
    this.container.append(this.cards);
    this.container.append(this.form);
    this.container.append(this.copyrights);

    this.form.addEventListener('submit', this.onFormSubmit.bind(this));
    this.input.addEventListener('input', this.onInput.bind(this));
  }

  checkRights() {
    if (this.copyrights.textContent !== '© Professor-Severus-Snape, 2024') {
      Copyrights.stoleRights();
    }
  }

  rerender() {
    this.cardImages.forEach((image) => image.classList.remove('has-opacity'));
    this.input.classList.remove('form__input_valid');
    this.input.classList.remove('form__input_invalid');
    this.tooltip.classList.add('hidden');
    this.tooltip.classList.remove('valid');
  }

  onInput() {
    this.rerender();

    // не позволяем ввести ничего, кроме цифр 0-9:
    this.input.value = this.input.value.replace(/\D/g, '');

    // ограничиваем размер поля 19-ю цифрами:
    this.input.value = this.input.value.slice(0, 19);

    // разделяем пробелами каждые 4 цифры:
    this.input.value = this.input.value.split(/([0-9]{4})/).filter((num) => num).join(' ');
  }

  onFormSubmit(event) {
    event.preventDefault();

    const cardNumber = this.input.value.replaceAll(' ', '');

    if (!cardNumber.length) {
      this.tooltip.textContent = 'Введите номер карты!';
      this.tooltip.classList.remove('hidden');
    } else if (cardNumber.length > 11) {
      if (luhnAlgorithm(cardNumber)) {
        const result = checkCardValidity(cardNumber);
        if (result) {
          const images = this.cards.querySelectorAll('.cards__img');
          images.forEach((image) => {
            if (!image.classList.contains(result.toLowerCase())) {
              image.classList.add('has-opacity');
            }
          });
          this.input.classList.add('form__input_valid');
          this.tooltip.textContent = result;
          this.tooltip.classList.remove('hidden');
          this.tooltip.classList.add('valid');
        } else {
          this.input.classList.add('form__input_invalid');
          this.tooltip.textContent = 'Платежная система не определена!';
          this.tooltip.classList.remove('hidden');
        }
      } else {
        this.input.classList.add('form__input_invalid');
        this.tooltip.textContent = 'Неверный номер карты!';
        this.tooltip.classList.remove('hidden');
      }
    } else {
      this.tooltip.textContent = 'Введите от 12 до 19 цифр!';
      this.tooltip.classList.remove('hidden');
    }
  }
}
