import {getRandomInteger} from '../utils/utils.js';

const MIN_FILTER_VALUE = 1;
const MAX_FILTER_VALUE = 10;

export const generateFiltersMockInfo = () => ({
  numIsWatchList: getRandomInteger(MIN_FILTER_VALUE, MAX_FILTER_VALUE),
  numIsWatched: getRandomInteger(MIN_FILTER_VALUE, MAX_FILTER_VALUE),
  numIsFavorites: getRandomInteger(MIN_FILTER_VALUE, MAX_FILTER_VALUE),
});

