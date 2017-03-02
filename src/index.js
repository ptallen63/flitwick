/* eslint-disable no-console */
import Baby from 'babyparse';
import chalk from 'chalk';

// Functions
import outputToFile from './outputToFile';
import parseMatchListArray from './parseMatchListArray';
import parseMatchToArray from './parseMatchToArray';
import generateNewList from './generateNewList';
import parseConfig from './parseConfig';
import getMatchedTotal from './getMatchedTotal';
import displayArt from './displayArt';

const success = chalk.green;
// const error = chalk.red.bold;
// const info = chalk.blue.bold;

//  Get Files
const flitwick = (matchListPath, matchToListPath, matchField) => {
  // Show title
  displayArt();

  // Check
  if (!matchListPath) { throw new Error("Match list argument not found."); }
  if (!matchToListPath) { throw new Error("Match To list argument not found.");  }
  if (!matchField) { throw new Error("Match Field argument not found.");  }


  // parse files
  const matchListParse = Baby.parseFiles(matchListPath, [parseConfig]);
  const matchToListParse = Baby.parseFiles(matchToListPath, [parseConfig]);

  // parse data
  const matchArray = parseMatchListArray(matchListParse.data, matchField);
  const matchToObject = parseMatchToArray(matchToListParse.data, matchField);

  // Set matchTo data
  const matchToFields = matchToObject.fields;
  const matchToData = matchToObject.data;

  // Generate New List
  const newList = generateNewList(matchArray, matchToData, matchToFields, matchField);

  // Parse back to csv
  const csv = Baby.unparse(newList);

  // Write to File
  outputToFile(csv);


  // Wite some stats
  const matched = getMatchedTotal(newList);


  console.log(success(`   ${matched} records matched`));
  console.log(chalk.green('   Created output.csv file'));
  console.log(chalk.green('   \n Thank You for using FlitwickJS \n'));
};

export default flitwick;
