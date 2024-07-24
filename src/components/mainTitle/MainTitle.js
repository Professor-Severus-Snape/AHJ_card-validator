import './mainTitle.css';

export default class MainTitle {
  // <h1 class="main-title">Check your credit card number</h1>
  constructor() {
    this.element = document.createElement('h1');
    this.element.classList.add('main-title');
    this.element.textContent = 'Check your credit card number';
  }
}
