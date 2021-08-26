import {createElement} from '../utils/utils.js';

const createSiteLoadingStateTemplate = () => ( '<h2 class="films-list__title">Loading...</h2>');

export default class SiteLoadingState {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createSiteLoadingStateTemplate();
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

