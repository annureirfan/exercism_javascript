// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let firstNumber = "";
  let secondNumber = "";
  for (let i in array1) {
    firstNumber += String(array1[i]);
  }
  for (let i in array2) {
    secondNumber += String(array2[i]);
  }
  return Number(firstNumber) + Number(secondNumber);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const stringNumber = String(value);
  const reversedString = stringNumber.split("").reverse().join("");
  return stringNumber === reversedString;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (!input) {
    return "Required field";
  } else if (Number(input) === 0 || isNaN(Number(input))) {
    return "Must be a number besides 0";
  } else {
    return "";
  }
}
