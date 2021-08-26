import {createElement} from '../utils/utils.js';

const createShowMoreBtnTamplate = () => ('<button class="films-list__show-more">Show more</button>');

export default class ShowMoreBtnTamplate {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createShowMoreBtnTamplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
