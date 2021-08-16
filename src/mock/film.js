
import dayjs from 'dayjs';
import {getRandomInteger, getRandomPositiveFloat, generateFixDurationTime, generateRanromArrayElement} from '../utils/utils.js';

const generateDescription = () => {
  const descriptions = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.' ,
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  ];

  return generateRanromArrayElement(descriptions);

};

const generateFilmPoster = () => {
  const posters = [
    './images/posters/sagebrush-trail.jpg',
    './images/posters/the-man-with-the-golden-arm.jpg',
    './images/posters/the-dance-of-life.jpg',
    './images/posters/santa-claus-conquers-the-martians.jpg',
    './images/posters/popeye-meets-sinbad.png',
    './images/posters/the-man-with-the-golden-arm.jpg',
    './images/posters/the-great-flamarion.jpg',
  ];

  return generateRanromArrayElement(posters);
};

const generateFilmTitle = () => {
  const titles = [
    'The Dance of Life',
    'Burlesque comic',
    'Sagebrush Trail',
    'The Man with the Golden Arm',
    'Santa Claus Conquers the Martians',
    'Popeye the Sailor Meets Sindbad the Sailor',
    'The Great Flamarion',
    'Santa Claus Conquers the Martians',
    'Made for Each Other',
  ];

  return generateRanromArrayElement(titles);
};

export const generateGenre = () => {
  const genres = [
    'Action',
    'Comedy',
    'Drama',
    'Fantasy',
    'Horror',
    'Mystery',
    'Romance',
    'Thriller',
  ];

  return generateRanromArrayElement(genres);
};

const generateCardActiveModifier = () => {
  const modifierState = Boolean(getRandomInteger(0, 1));
  if (modifierState) {
    return 'film-card__controls-item--active';
  }
};

const generatePopupActiveModifier = () => {
  const modifierState = Boolean(getRandomInteger(0, 1));
  if (modifierState) {
    return 'film-details__control-button--active';
  }
};

const generateDirector = () => {
  const directors = [
    'David Fincher',
    'Paul Thomas Andersony',
    'Kathryn Bigelow',
    'Rian Johnson',
    'The Coen Brothers',
    'Harmony Korine',
    'David Cronenberg',
  ];

  return generateRanromArrayElement(directors);
};

const generateWriters = () => {
  const writers = [
    'Fyodor Dostoevsky',
    'William Shakespeare',
    'Charles Dickens',
    'George Orwell',
  ];
  return generateRanromArrayElement(writers);
};

const generateActors = () => {
  const actors = [
    'Fred Astaire, Humphrey Bogart',
    'Marlon Brando, Richard Burton',
    'Richard Burton, James Cagney',
  ];
  return generateRanromArrayElement(actors);
};

const generateCountry = () => {
  const countries = [
    'USA',
    'Russia',
    'Spain',
    'Italy',
    'Ireland',
  ];
  return generateRanromArrayElement(countries);
};

const ageRating = () => {
  const ratingParameters = [
    '0+',
    '6+',
    '12+',
    '18+',
  ];
  return generateRanromArrayElement(ratingParameters);
};


export const generateFilmMockInfo = () => ({
  poster: generateFilmPoster(),
  title:  generateFilmTitle(),
  director: generateDirector(),
  writers: generateWriters(),
  actors: generateActors(),
  age: ageRating(),
  alternativeTitle: generateFilmTitle(),
  rating: getRandomPositiveFloat(0, 10),
  productionYear: dayjs().year(getRandomInteger(1930, 2020)).format('YYYY'),
  duration: generateFixDurationTime(),
  genre: generateGenre(),
  description: generateDescription(),
  country: generateCountry(),
  numOfComments: getRandomInteger(0, 5),
  isWatchList: generateCardActiveModifier(),
  isWatched: generateCardActiveModifier(),
  isFavorites: generateCardActiveModifier(),
  popupIsWatchList: generatePopupActiveModifier(),
  popupIsWatched: generatePopupActiveModifier(),
  popupIsFavorites: generatePopupActiveModifier(),
  releaseDate: dayjs().year(getRandomInteger(1930, 2020)).day(getRandomInteger(1, 31)).format('DD MMM YYYY'),
});


