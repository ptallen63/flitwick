/* eslint-disable no-console */
import ProgressBar from 'progress';
import chalk from 'chalk';

const generateNewList = (matchArray, matchToData, fieldsObj, matchField) => {
  const newList = [];
  newList.push(fieldsObj);

// Set up progress Bar
  const bar = new ProgressBar('   Mathcing up items [:bar] :percent',
    {
      complete: '=',
      incomplete: ' ',
      width: 30,
      total: matchArray.length,
    });


  // Check file 1 against file 2
  matchArray.forEach((item) => {
    const match = matchToData[item];
    if (match) {
      match.matched = true;
      newList.push(match);
    } else {
      newList.push({
        [matchField]: item,
        matched: false,
      });
    }
    bar.tick();
  });
  if (bar.complete) { console.log(chalk.green('   \u2713 Matching Complete!... Ravenclaw > Gryffindor \n')); }
  return newList;
};

export default generateNewList;
