import Abstract from './abstract.js';

const createShowMoreBtnTamplate = () => ('<button class="films-list__show-more">Show more</button>');

export default class ShowMoreBtnTemplate extends Abstract {
  constructor() {
    super();
    this._clickHandler = this._clickHandler.bind(this);
  }

  getTemplate() {
    return createShowMoreBtnTamplate();
  }

  _clickHandler(evt) {
    evt.preventDefault();
    this._callback.click();
  }

  setClickHandler(callback) {
    this._callback.click = callback;
    this.getElement().addEventListener('click', this._clickHandler);
  }
}
