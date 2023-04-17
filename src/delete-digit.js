const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = n.toString();
  let max = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < str.length; i++) {
    let numArr = str.split('');
    numArr.splice(i, 1);
    let newNum = Number(numArr.join(''));

    if (newNum > max) {
      max = newNum; // update the max value if the new number is greater
    }
  }

  return max;
}

module.exports = {
  deleteDigit
};
