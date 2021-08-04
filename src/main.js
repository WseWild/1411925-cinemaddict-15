import {createSiteProfileTemplate} from './view/profile.js';
import {createSiteNavMenuTemplate} from './view/main-nav.js';
import {createSiteStatisticsTemplate} from './view/stats.js';
import {createSiteSortTemplate} from './view/sort.js';
import {createSiteFilmsTemplate} from './view/films-list.js';
import {createSiteFilmCardTemplate} from './view/film-card.js';
import {createShowMoreBtnTamplate} from './view/show-more-btn';
import {createSiteTopRatedContainerTemplate} from './view/top-rated-container.js';
import {createSiteMostCommentedTemplate} from './view/most-commented-container';
import {createSiteLoadingStateTemplate} from './view/loading-state';
import {createSiteFilmPopup} from './view/popup';
import {createFooterStatisticsTemplate} from './view/footer-stats';

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector('.header');

render(siteHeaderElement, createSiteProfileTemplate(), 'beforeend');

const siteMainElement = document.querySelector('.main');

render(siteMainElement, createSiteNavMenuTemplate(), 'beforeend');
render(siteMainElement, createSiteLoadingStateTemplate(), 'beforeend');
render(siteMainElement, createSiteSortTemplate(), 'beforeend');
render(siteMainElement, createSiteStatisticsTemplate(), 'beforeend');
render(siteMainElement, createSiteFilmsTemplate(), 'beforeend');

const siteFilms = siteMainElement.querySelector('.films');

render(siteFilms, createShowMoreBtnTamplate(), 'beforeend');
render(siteFilms, createSiteTopRatedContainerTemplate(), 'beforeend');
render(siteFilms, createSiteMostCommentedTemplate(), 'beforeend');

const siteFilmsContainer = siteMainElement.querySelectorAll('.films-list__container');

const addCardElement = (container, count ) => {
  const FILMS_COUNT = count;
  for (let num = 0; num < FILMS_COUNT; num++ ) {
    render(container, createSiteFilmCardTemplate(), 'beforeend');
  }
};
addCardElement(siteFilmsContainer[0], 5);
addCardElement(siteFilmsContainer[1], 2);
addCardElement(siteFilmsContainer[2], 2);

const siteFooterStatisticks = document.querySelector('.footer__statistics');

render(siteFooterStatisticks, createFooterStatisticsTemplate(), 'beforeend');

const siteBody = document.querySelector('.footer');

render(siteBody, createSiteFilmPopup(), 'afterend');
