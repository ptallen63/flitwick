/* eslint-disable no-console */
const parseMatchListArray = (array, matchField) => {
  // Test Array
  if (array.constructor !== Array) {
    return -1;
  }

  // Get Fields position
  const matchFieldPosition = array[0].indexOf(matchField);
  try {
    if (matchFieldPosition === -1) throw new Error('Match Field not Found');
  } catch (err) {
    console.log(err);
  }

  const newArray = [];
  array.forEach((record) => {
    if (record[matchFieldPosition] && record[matchFieldPosition] !== '') {
      newArray.push(record[matchFieldPosition]);
    }
  });
  return newArray;
};

export default parseMatchListArray;
