'use strict'
import fs from 'fs';
import Baby from 'babyparse';
import stringify from 'csv-stringify';
import outputToFile from './outputToFile';
import parseMatchListArray from './parseMatchListArray';
import parseMatchToArray from './parseMatchToArray';
import generateNewList from './generateNewList';
import config from './parseConfig';

//Get Files
const args = process.argv;
const matchListPath = args[2];
const matchToListPath = args[3];
const matchField = args[4];

//Check
if (!matchListPath) {console.log('No match list argument'); process.exit();}
if (!matchToListPath) {console.log('No match to list argument'); process.exit();}
if (!matchField) {console.log('No match field argument'); process.exit();}


//parse files
const matchListParse = Baby.parseFiles(matchListPath, [config]);
const matchToListParse = Baby.parseFiles(matchToListPath, [config]);

//parse data
const matchArray = parseMatchListArray(matchListParse.data);
const matchToObject = parseMatchToArray(matchToListParse.data,matchField);

//Set matchTo data
const matchToFields = matchToObject.fields;
const matchToData = matchToObject.data;

//Generate New List
const newList = generateNewList(matchArray,matchToData,matchToFields,matchField);

//Parse back to csv
const csv = Baby.unparse(newList);

//Write to File
outputToFile(csv);




//if record matches then update record in list 1

//output list 1 to new file

//Print to screen results
