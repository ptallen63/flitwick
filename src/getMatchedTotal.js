const getMatchedTotal = (list) => {
  const total = list.reduce((sum, item) => {
    if (item.matched) {
      return sum + 1;
    }
    return sum;
  }, 0);
  return total;
};

export default getMatchedTotal;
