import getRandomNumber from "./getRandomNumber.js";

function updateStrength(lastStrength: number) {
  const min = 1;
  const max = 20;

  let newStrength = getRandomNumber(lastStrength - 3, lastStrength + 3);

  if (newStrength > max) {
    newStrength = max;
  } else if (newStrength < min) {
    newStrength = min;
  }
  return newStrength;
}

export default updateStrength;
