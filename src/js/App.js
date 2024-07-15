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

    // this.form.addEventListener('submit', this.onFormSubmit.bind(this));
    this.input.addEventListener('input', this.onInput.bind(this));
  }

  checkRights() {
    if (this.copyrights.textContent !== '© Professor-Severus-Snape, 2024') {
      Copyrights.stoleRights();
    }
  }

  onInput(event) {
      const numbers = /[0-9]/;
      const regExp = /[0-9]{4}/;

      // console.log('event.inputType: ', event.inputType); // 'insertText' или 'deleteContentBackward'
      // console.log('event.data: ', event.data); // нажатый символ или null

      // не позволяем ввести ничего, кроме цифр 0-9, ограничиваем размер поля 19-ю цифрами и 4-мя пробелами:
      if (event.inputType === 'insertText' && !numbers.test(event.data) || this.input.value.length > (19 + 4)) {
        this.input.value = this.input.value.slice(0, this.input.value.length - 1);
        return;
      }

      // обеспечиваем удаление пробелов при помощи клавиш 'backspace' и 'delete':
      if (event.inputType === 'deleteContentBackward') {
        if (this.input.value.length <= (16 + 3) && this.input.value.length % 5 === 0) {
          this.input.value = this.input.value.slice(0, this.input.value.length - 1);
          return;
        }
        else if (this.input.value.length === (16 + 4)) {
          this.input.value = this.input.value.slice(0, this.input.value.length - 1);
        }
        else if (this.input.value.length > (16 + 4)) {
          this.input.value = this.input.value.slice(0, this.input.value.length);
        }
        return;
      }

      // добавляем пробел после 4 цифр подряд (если цифр не 16):
      if (regExp.test(this.input.value.slice(-4)) && this.input.value.length !== (16 + 3) && this.input.value.length !== (17 + 3) && this.input.value.length < (19 + 4))
      {
        this.input.value += ' ';
      } else if (regExp.test(this.input.value.slice(-5, -1)) && this.input.value.length === (17 + 3)) {
        console.log('цифр больше 16!!!');
        this.input.value = this.input.value.slice(0, -1) + ' ' + this.input.value.slice(-1);
      }
  }
}
