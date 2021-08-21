export  const createSiteFilmCardTemplate = (film) => (
  `<article class="film-card">
    <h3 class="film-card__title">${film.title}</h3>
    <p class="film-card__rating">${film.rating}</p>
    <p class="film-card__info">
      <span class="film-card__year">${film.productionYear}</span>
      <span class="film-card__duration">${film.duration}</span>
      <span class="film-card__genre">${film.genre}</span>
    </p>
    <img src="${film.poster}" alt="" class="film-card__poster">
    <p class="film-card__description">${film.description}</p>
    <a class="film-card__comments">${film.numOfComments} comments</a>
    <div class="film-card__controls">
      <button class="film-card__controls-item film-card__controls-item--add-to-watchlist ${film.isWatchList}" type="button">Add to watchlist</button>
      <button class="film-card__controls-item film-card__controls-item--mark-as-watched ${film.isWatched}" type="button">Mark as watched</button>
      <button class="film-card__controls-item film-card__controls-item--favorite ${film.isFavorites}" type="button">Mark as favorite</button>
    </div>
  </article>`
);
