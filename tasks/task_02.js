function filterArray(arr) {
  return arr.filter((item, index) => index % 2 === 0);
}

module.exports = filterArray;
