const getMatchedTotal = (list) => {
  if (typeof list !== 'object') { return -1; }
  const total = list.reduce((sum, item) => {
    if (item.matched) {
      return sum + 1;
    }
    return sum;
  }, 0);
  return total;
};

export default getMatchedTotal;
