import {createElement} from '../utils/utils.js';

const createFooterStatisticsTemplate = (stats) => (`<p>${stats.totalMovies} movies inside</p>`);

export default class FooterStatisticsTemplate {
  constructor(stats) {
    this._stats = stats;
    this._element = null;
  }

  getTemplate() {
    return createFooterStatisticsTemplate(this._stats);
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
