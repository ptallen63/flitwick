const parseMatchListArray = (array) => {
  // Test Array
  if (array.constructor !== Array) {
    return -1;
  }
  const newArray = [];
  array.forEach((record) => {
    if (record[0] !== '') {
      newArray.push(record[0]);
    }
  });
  return newArray;
};

export default parseMatchListArray;
