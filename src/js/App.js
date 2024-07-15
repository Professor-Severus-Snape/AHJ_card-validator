import MainTitle from './MainTitle';
import Cards from './Cards';
import Form from './Form';
import Copyrights from './Copyrights';

export default class App {
  constructor() {
    this.container = document.querySelector('.container');

    this.mainTitle = new MainTitle().element;

    this.cards = new Cards().element;

    this.formConstructor = new Form();
    this.form = this.formConstructor.element;
    this.input = this.formConstructor.inputElement;
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
    this.container.insertAdjacentHTML('beforeend', this.cards);
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

  onInput() {
    // console.log('событие input!'); // NOTE: отладка !!!
    // примерВставки:34jh53j45j45gjh4g5hj432g5jh234g5j4g5j43g25jh25 // NOTE: отладка !!!

    // не позволяем ввести ничего, кроме цифр 0-9:
    this.input.value = this.input.value.split('').filter((char) => /[0-9]/.test(char)).join('');

    // ограничиваем размер поля 19-ю цифрами:
    this.input.value = this.input.value.slice(0, 19);

    // разделяем пробелами каждые 4 цифры:
    this.input.value = this.input.value.split(/([0-9]{4})/).filter((num) => num).join(' ');
  }

  onFormSubmit(event) {
    event.preventDefault();
    // примерВставки: 1111222233334444555 // NOTE: отладка !!!

    const cardNumber = this.input.value.replaceAll(' ', '');

    if (!cardNumber.length) {
      console.warn('Введите номер карты для проверки'); // NOTE: добавить логику !!!
    } else if (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19) {
      console.warn('Проверяем карту на принадлежность к платежной системе!'); // NOTE: добавить логику !!!
    } else {
      console.warn('Номер должен содержать 13, 16 или 19 цифр. Проверьте правильность ввода!'); // NOTE: добавить логику !!!
    }
  }
}
