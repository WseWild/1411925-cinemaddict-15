import {generateFilmMockInfo} from './mock/film.js';
import {generateStatsMockInfo} from './mock/stats.js';
import {generateFiltersMockInfo} from './mock/filters.js';
import {createSiteProfileTemplate} from './view/profile.js';
import {createSiteNavMenuTemplate} from './view/main-nav.js';
import {createSiteStatisticsTemplate} from './view/stats.js';
import {createSiteSortTemplate} from './view/sort.js';
import {createSiteFilmsTemplate} from './view/films-list.js';
import {createSiteFilmCardTemplate} from './view/film-card.js';
import {createShowMoreBtnTamplate} from './view/show-more-btn';
import {createSiteLoadingStateTemplate} from './view/loading-state';
import {createSiteFilmPopup} from './view/popup';
import {createFooterStatisticsTemplate} from './view/footer-stats';

const FILM_COUNT = 16;
const FILM_COUNT_PER_STEP = 5;

export const films = new Array(FILM_COUNT).fill().map(generateFilmMockInfo);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector('.header');

render(siteHeaderElement, createSiteProfileTemplate(), 'beforeend');

const siteMainElement = document.querySelector('.main');

render(siteMainElement, createSiteNavMenuTemplate(generateFiltersMockInfo ()), 'beforeend');
render(siteMainElement, createSiteLoadingStateTemplate(), 'beforeend');
render(siteMainElement, createSiteSortTemplate(), 'beforeend');
render(siteMainElement, createSiteStatisticsTemplate(generateStatsMockInfo()), 'beforeend');
render(siteMainElement, createSiteFilmsTemplate(), 'beforeend');

const siteFilms = siteMainElement.querySelector('.films');

const siteFilmsContainer = siteMainElement.querySelectorAll('.films-list__container');
for (let num = 0; num < Math.min(films.length, FILM_COUNT_PER_STEP); num++) {
  render(siteFilmsContainer[0], createSiteFilmCardTemplate(films[num]), 'beforeend');
}

if (films.length > FILM_COUNT_PER_STEP) {
  let renderedFilmCount = FILM_COUNT_PER_STEP;

  render(siteFilms, createShowMoreBtnTamplate(), 'beforeend');

  const showMoreButton = siteMainElement.querySelector('.films-list__show-more');

  showMoreButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    films.slice(renderedFilmCount, renderedFilmCount + FILM_COUNT_PER_STEP).forEach((films) => render(siteFilmsContainer[0], createSiteFilmCardTemplate(films), 'beforeend'));
    renderedFilmCount += FILM_COUNT_PER_STEP;

    if (renderedFilmCount >= films.length) {
      showMoreButton.remove();
    }
  });

}

const siteFooterStatisticks = document.querySelector('.footer__statistics');

render(siteFooterStatisticks, createFooterStatisticsTemplate(generateStatsMockInfo()), 'beforeend');

const siteBody = document.querySelector('.footer');

render(siteBody, createSiteFilmPopup(films[0]), 'afterend');
