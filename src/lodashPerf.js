const { comparePerf } = require('./util');
const { complexArray } = require('./mock');
const _  = require('lodash');

(() => {
  const TOTAL_COUNT = 10000;
  const largeArr = _.shuffle(complexArray(TOTAL_COUNT));

  function sort() {
    return largeArr.sort((a, b) => {
      return a.key - b.key;
    });
  }

  function _sort() {
    return _.sortBy(largeArr, (item) => item.key);
  }
  // ========sort is 2 times faster
  comparePerf(sort, _sort, 'sort', '_.sort');
})();


(() => {
  const TOTAL_COUNT = 300000;
  const largeArr = _.shuffle(complexArray(TOTAL_COUNT));

  function filter() {
    return largeArr.filter((a, b) => {
      return a.category > 1000;
    });
  }

  function _filter() {
    return _.filter(largeArr, (item) => item.category > 1000);
  }
  // ========filter is 1 times faster
  comparePerf(filter, _filter, 'filter', '_.filter');
})();

(() => {
  const TOTAL_COUNT = 300000;
  const largeArr = _.shuffle(complexArray(TOTAL_COUNT));

  function each() {
    let total = 0;
    largeArr.forEach((a) => {
      total += a.key;
    });
  }

  function _each() {
    let total = 0;
    _.each(largeArr, (a) => {
      total += a.key;
    });
  }
  // ========each is 1 times faster
  comparePerf(each, _each, 'each', '_.each');
})();
