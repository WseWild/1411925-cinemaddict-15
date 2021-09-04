import AbstractView from './abstract.js';

const createFooterStatisticsTemplate = (stats) => (`<p>${stats.totalMovies} movies inside</p>`);

export default class FooterStatisticsTemplate extends AbstractView  {
  constructor(stats) {
    super();
    this._stats = stats;
  }

  getTemplate() {
    return createFooterStatisticsTemplate(this._stats);
  }

}
