/* eslint-disable no-console */
import ProgressBar from 'progress';
import chalk from 'chalk';

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

  // Setup Progress Bar
  const bar = new ProgressBar('   Parsing Match List [:bar] :percent',
    {
      complete: '=',
      incomplete: ' ',
      width: 30,
      total: array.length,
    });

  const newArray = [];
  array.forEach((record) => {
    if (record[matchFieldPosition] && record[matchFieldPosition] !== '') {
      newArray.push(record[matchFieldPosition]);
    }
    bar.tick();
  });

  if (bar.complete) console.log(chalk.green('   \u2713 Match list parsed... Lev- ooo -sah not Lev - o - saaah \n'));
  return newArray;
};

export default parseMatchListArray;
