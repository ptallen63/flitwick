/* eslint-disable no-console */
import Baby from 'babyparse';
import outputToFile from './outputToFile';
import parseMatchListArray from './parseMatchListArray';
import parseMatchToArray from './parseMatchToArray';
import generateNewList from './generateNewList';
import parseConfig from './parseConfig';
//  Get Files
const flitwick = (matchListPath, matchToListPath, matchField) => {
  // Check
  if (!matchListPath) { console.log('No match list argument'); process.exit(); }
  if (!matchToListPath) { console.log('No match to list argument'); process.exit(); }
  if (!matchField) { console.log('No match field argument'); process.exit(); }


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
};

export default flitwick;
