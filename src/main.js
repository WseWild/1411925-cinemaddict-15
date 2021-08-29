import {generateFilmMockInfo} from './mock/film.js';
import {generateStatsMockInfo} from './mock/stats.js';
import {generateFiltersMockInfo} from './mock/filters.js';
import SiteProfileView from './view/profile.js';
import SiteNavMenuView from './view/main-nav.js';
import SiteStatisticsView from './view/stats.js';
import SiteSortTemplateView from './view/sort.js';
import SiteFilmsView from './view/films-list.js';
import SiteFilmCardView from './view/film-card.js';
import ShowMoreBtnView from './view/show-more-btn';
import SiteLoadingStateView from './view/loading-state';
import SiteFilmPopupView from './view/popup';
import FooterStatisticsView from './view/footer-stats.js';
import SiteListEmptyView from './view/list-empty.js';
import {RenderPosition, render} from './utils/utils.js';


const FILM_COUNT = 16;
const FILM_COUNT_PER_STEP = 5;


export const films = new Array(FILM_COUNT).fill().map(generateFilmMockInfo);

const siteBodyElement = document.querySelector('body');
const siteHeaderElement = siteBodyElement.querySelector('.header');
const siteMainElement = siteBodyElement.querySelector('.main');


render(siteHeaderElement, new SiteProfileView().getElement(), RenderPosition.BEFOREEND);
render(siteMainElement, new SiteNavMenuView(generateFiltersMockInfo()).getElement(), RenderPosition.BEFOREEND);
render(siteMainElement, new SiteLoadingStateView().getElement(), RenderPosition.BEFOREEND);
render(siteMainElement, new SiteSortTemplateView().getElement(), RenderPosition.BEFOREEND);
render(siteMainElement, new SiteStatisticsView(generateStatsMockInfo()).getElement(), RenderPosition.BEFOREEND);
render(siteMainElement, new SiteFilmsView().getElement(), RenderPosition.BEFOREEND);


const siteFilmsContainer = siteMainElement.querySelectorAll('.films-list__container');
const siteFooter = document.querySelector('.footer');

const renderFilmCard = (filmListElement, film) => {
  const filmComponent = new SiteFilmCardView(film);
  const filmComponentPopup = new SiteFilmPopupView(film);
  const filmComponentPoster = filmComponent.getElement().querySelector('.film-card__poster');
  const filmComponentTitle =  filmComponent.getElement().querySelector('.film-card__title');
  const filmComponentComment =  filmComponent.getElement().querySelector('.film-card__comments');
  const filmPopupCrossBtn =  filmComponentPopup.getElement().querySelector('.film-details__close-btn');

  const openPopup = () => {
    siteBodyElement.classList.add('hide-overflow');
    siteFooter.appendChild(filmComponentPopup.getElement());
  };

  const closePopup = () => {
    siteBodyElement.classList.remove('hide-overflow');
    siteFooter.removeChild(filmComponentPopup.getElement());
  };

  const onEscKeyDown = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      closePopup();
      document.removeEventListener('keydown', onEscKeyDown);
    }
  };

  const closePopupWithEsc = () => {
    document.addEventListener('keydown', onEscKeyDown);
  };

  filmComponentPoster.addEventListener('click',() =>{
    openPopup();
    closePopupWithEsc();
  });

  filmComponentTitle.addEventListener('click',() =>{
    openPopup();
    closePopupWithEsc();
  });
  filmComponentComment.addEventListener('click',() =>{
    openPopup();
    closePopupWithEsc();
  });
  filmPopupCrossBtn.addEventListener('click', () =>{
    closePopup();
  });

  render(filmListElement, filmComponent.getElement(),RenderPosition.BEFOREEND);
};


const siteFilms = siteMainElement.querySelector('.films');

const renderFilmsList = (listContainer, listFilm ) => {

  if (listFilm.length === 0 ) {
    return render(siteMainElement, new SiteListEmptyView().getElement(), RenderPosition.BEFOREEND);
  }
  listFilm.slice(0, FILM_COUNT_PER_STEP).forEach((film) => renderFilmCard(siteFilmsContainer[0], film));

  if (listFilm.length > FILM_COUNT_PER_STEP) {
    let renderedFilmCount = FILM_COUNT_PER_STEP;

    render(listContainer, new ShowMoreBtnView().getElement(), RenderPosition.BEFOREEND);

    const showMoreButton = siteMainElement.querySelector('.films-list__show-more');

    showMoreButton.addEventListener('click', (evt) => {

      evt.preventDefault();
      listFilm.slice(renderedFilmCount, renderedFilmCount + FILM_COUNT_PER_STEP).forEach((film) => renderFilmCard(siteFilmsContainer[0], film));
      renderedFilmCount += FILM_COUNT_PER_STEP;

      if (renderedFilmCount >= listFilm.length) {
        showMoreButton.remove();
      }

    });
  }

};

renderFilmsList(siteFilms, films);


const siteFooterStatisticks = document.querySelector('.footer__statistics');

render(siteFooterStatisticks, new FooterStatisticsView(generateStatsMockInfo()).getElement(), RenderPosition.BEFOREEND);
