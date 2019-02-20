const { comparePerf } = require('./util');

(() => {
  const TOTAL_COUNT = 3000;

  function spread() {
    let arr = [];
    for (let i = 0; i < TOTAL_COUNT; i++) {
      arr = [i, ...arr];
    }
  }

  function concat() {
    let arr = [];
    for (let i = 0; i < TOTAL_COUNT; i++) {
      arr = [i].concat(arr);
    }
  }
  // ========concat is 4 times faster
  comparePerf(spread, concat, 'spread', 'concat');
})();

(() => {
  const TOTAL_COUNT = 300000;

  function spread() {
    let arr = {};
    for (let i = 0; i < TOTAL_COUNT; i++) {
      const key = `key${5 %10}`;
      arr = {
        ...arr,
        [key]: (arr[key] || 0) + 1,
      };
    }
  }

  function assign() {
    let arr = {};
    for (let i = 0; i < TOTAL_COUNT; i++) {
      const key = `key${5 %10}`;
      arr = Object.assign({}, arr, { [key]: (arr[key] || 0) + 1 });
    }
  }
  // ========spread is 1 times faster
  comparePerf(spread, assign, 'spread', 'assign');
})();


// summary: spread object is okay, but spread array is bad.
