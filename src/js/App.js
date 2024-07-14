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
  }

  checkRights() {
    if (this.copyrights.textContent !== '© Professor-Severus-Snape, 2024') {
      Copyrights.stoleRights();
    }
  }
}
