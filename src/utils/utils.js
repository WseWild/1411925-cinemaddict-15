export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomPositiveFloat = (int1, int2, digits = 1) => {
  const lower = Math.min(Math.abs(int1), Math.abs(int2));
  const upper = Math.max(Math.abs(int1), Math.abs(int2));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
};

export const generateFixDurationTime = () => {
  const hours =  getRandomInteger(0, 3);
  const mins =  getRandomInteger (1, 60);

  if (hours > 0) {
    return `${hours}h ${mins}m`;
  } return ` ${mins}m`;
};

export const generateRanromArrayElement = (array) => {
  const randomIndex = getRandomInteger(0, array.length - 1);
  return array[randomIndex];
};
