import {getRandomInteger} from '../utils/utils.js';
import { generateGenre } from './film.js';
import { formatNumberWithSpaces } from '../utils/utils.js';

const MIN_WATCHED_FILMS_VALUE = 3;
const MAX_WATCHED_FILMS_VALUE = 100;
const MIN_TOTAL_DURATION_HOURS_VALUE = 10;
const MAX_TOTAL_DURATION_HOURS_VALUE = 300;
const MIN_TOTAL_MOVIES_VALUE = 160000;
const MAX_TOTAL_MOVIES_VALUE = 260000;

const getTotalMoviesNumber = (min, max) => {
  const generateNumber = getRandomInteger(min, max);
  return formatNumberWithSpaces(generateNumber);
};

export const generateStatsMockInfo = () => ({
  watchedFilms: getRandomInteger(MIN_WATCHED_FILMS_VALUE,MAX_WATCHED_FILMS_VALUE),
  totalDurationHours: getRandomInteger(MIN_TOTAL_DURATION_HOURS_VALUE,MAX_TOTAL_DURATION_HOURS_VALUE ),
  totalDurationMins: getRandomInteger(0,60),
  topGenre: generateGenre(),
  totalMovies: getTotalMoviesNumber(MIN_TOTAL_MOVIES_VALUE, MAX_TOTAL_MOVIES_VALUE) ,
});
