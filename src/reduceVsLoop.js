const { comparePerf } = require('./util');
const { complexArray } = require('./mock');
const _  = require('lodash');

(() => {
  const TOTAL_COUNT = 30000;
  const largeArr = complexArray(TOTAL_COUNT);

  function reduce() {
    const categoryMap = _.reduce(largeArr, (acc, item) => {
      return {
        ...acc,
        [`${item.category}`]: (acc[item.category] || 0) + 1,
      };
    }, {});
    return categoryMap;
  }

  function loop() {
    const categoryMap = {};
    for (let i = 0; i < largeArr.length; i++) {
      const item = largeArr[i];
      categoryMap[item.category] = (categoryMap[item.category] || 0) + 1;
    }
    return categoryMap;
  }
  // ========reduce time spend 881ms
  // ========loop time spend 6ms
  // ========loop is 246 times faster
  comparePerf(reduce, loop, 'reduce', 'loop');
})();
