import { films } from '../main';

const getIsWatchedNum = () => {
  let best = [];
  let fest = [];

  for (let num = 0;num < films.length - 1;num++ ){

    if(films[num].isWatched) {
      best = films[num].isWatched.slice();
      fest = fest.concat(best);
    }

  }
  return fest.length;
};

const getIsFavoritesNum = () => {
  let best = [];
  let fest = [];

  for (let num = 0;num < films.length - 1;num++ ){

    if(films[num].isFavorites) {
      best = films[num].isFavorites.slice();
      fest = fest.concat(best);
    }

  }
  return fest.length;
};

const getIsWatchListNum = () => {
  let best = [];
  let fest = [];

  for (let num = 0;num < films.length - 1;num++ ){

    if(films[num].isWatchList) {
      best = films[num].isWatchList.slice();
      fest = fest.concat(best);
    }

  }
  return fest.length;
};

export const generateFiltersMockInfo = () => ({
  numIsWatchList: getIsWatchListNum(),
  numIsWatched: getIsWatchedNum(),
  numIsFavorites: getIsFavoritesNum(),
});
