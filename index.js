'use strict';

/**
 * Generates a random okLAB color.
 *
 * @param {number} minL - The minimum value for the L channel (range: 0 to 1 or 0% to 100%).
 * @param {number} maxL - The maximum value for the L channel (range: 0 to 1 or 0% to 100%).
 * @param {number} minA - The minimum value for the A channel (range: -128 to 127).
 * @param {number} maxA - The maximum value for the A channel (range: -128 to 127).
 * @param {number} minB - The minimum value for the B channel (range: -128 to 127).
 * @param {number} maxB - The maximum value for the B channel (range: -128 to 127).
 * @param {number} minAlpha - The minimum value for the alpha channel (range: 0 to 1 or 0% to 100%).
 * @param {number} maxAlpha - The maximum value for the alpha channel (range: 0 to 1 or 0% to 100%).
 * @param {boolean} useObjectExport - Determines whether to return the color as an object.
 * @returns {string|Object} The random okLAB color string or object representation.
 */
module.exports = function randomOkLABColor(
  minL = 0,
  maxL = 1,
  minA = -128,
  maxA = 127,
  minB = -128,
  maxB = 127,
  minAlpha = 0,
  maxAlpha = 1,
  useObjectExport = false
) {
  const isPercentage = maxL > 1 || maxAlpha > 1;

  /**
   * Generates a random value within the specified range.
   *
   * @param {number} min - The minimum value.
   * @param {number} max - The maximum value.
   * @returns {number} The random value.
   */
  const randomValue = (min, max) => {
    if (isPercentage) {
      return Math.floor((Math.random() * (max - min + 1) + min) * 100) / 100;
    } else {
      return Number((Math.random() * (max - min) + min).toFixed(2));
    }
  };

  const formatPercentage = (value) => {
    if (value === 0) return '0%';
    return value.toFixed(2).replace(/\.?0+%?$/, '%');
  };

  const l = isPercentage ? formatPercentage(randomValue(minL, maxL)) : randomValue(minL, maxL);
  const a = randomValue(minA, maxA);
  const b = randomValue(minB, maxB);
  const alpha = isPercentage ? formatPercentage(randomValue(minAlpha, maxAlpha)) : randomValue(minAlpha, maxAlpha);

  if (useObjectExport) {
    return { l, a, b, alpha };
  }

  return `oklab(${l} ${a} ${b}${alpha ? ` / ${alpha}` : ''})`;
};
