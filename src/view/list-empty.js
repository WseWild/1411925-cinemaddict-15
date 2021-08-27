import {createElement} from '../utils/utils.js';


export const createListEmptyTemplate = () => (
  '<h2 class="films-list__title">There are no movies in our database</h2>'
);

export default class SiteListEmpty {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createListEmptyTemplate();
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