const { comparePerf } = require('./util');

(() => {
  const TOTAL_COUNT = 3000000;
  const maxArrLen = 100;

  function arrayLocate() {
    let arr = [];
    for (let i = 0; i < TOTAL_COUNT; i++) {
      arr.push(i);
      if (arr.length > maxArrLen) {
        arr = arr.slice(arr.length - maxArrLen);
      }
    }
  }

  function arrayNoLocate() {
    const arr = new Array(maxArrLen);
    for (let i = 0; i < TOTAL_COUNT; i++) {
      arr[i % maxArrLen] = i;
    }
  }
  // ========locate once is 52 times faster
  comparePerf(arrayLocate, arrayNoLocate, 'push to array', 'locate once');
})();
