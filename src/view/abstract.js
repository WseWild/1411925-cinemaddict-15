import {createElement} from '../utils/render.js';

export default class Abstract {
  constructor()  {
    if (new.target === Abstract) {
      throw new Error('Alert!');
    }

    this._element = null;
    this._callback = {};
  }

  getTemplate() {
    throw new Error('Alert!');
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


