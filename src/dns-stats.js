const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats (domains) {
  let dnsCount = {};
  
  domains.forEach(domain => {
    let splitDomain = domain.split('.').reverse();
    let currentDns = '';
    
    splitDomain.forEach(newDomain => {
      currentDns += '.' + newDomain;
      dnsCount[currentDns] = (dnsCount[currentDns] || 0) + 1;
    })
  })
  
  return dnsCount;
}

module.exports = {
  getDNSStats
};
