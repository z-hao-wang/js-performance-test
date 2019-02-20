module.exports = {
  complexArray: (size) => {
    const arr = new Array(size);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = {
        key: i,
        value: `item-${i}`,
        category: `${Math.floor(i / 100)}`,
      };
    }
    return arr;
  }
};
