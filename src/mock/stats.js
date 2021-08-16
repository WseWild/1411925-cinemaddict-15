import {getRandomInteger} from '../utils/utils.js';
import { generateGenre } from './film.js';

export const generateStatsMockInfo = () => ({
  watchedFilms: getRandomInteger(1,100),
  totalDurationHours: getRandomInteger(10,300),
  totalDurationMins: getRandomInteger(0,60),
  topGenre: generateGenre(),
  totalMovies: `${getRandomInteger(60,160)} ${getRandomInteger(100,999)}`,
});
