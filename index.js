'use strict'
import fs from 'fs';
import Baby from 'babyparse';
import stringify from 'csv-stringify';

//Get Files
const args = process.argv;
const matchListPath = args[2];
const matchToListPath = args[3];
const matchField = args[4];

//Check
if (!matchListPath) console.log('No match list argument');
if (!matchToListPath) console.log('No match to list argument');
if (!matchField) console.log('No match field argument');

const config = {
	delimiter: "",	// auto-detect
	newline: "",	// auto-detect
	quoteChar: '"',
	header: true,
	dynamicTyping: false,
	preview: 0,
	encoding: "",
	worker: false,
	comments: false,
	step: undefined,
	complete: undefined,
	error: undefined,
	download: false,
	skipEmptyLines: true,
	chunk: undefined,
	fastMode: undefined,
	beforeFirstChunk: undefined,
	withCredentials: undefined
}

let matchArray= []
let matchToObject = {}



const matchListParse = Baby.parseFiles(matchListPath, [config]);
const matchToListParse = Baby.parseFiles(matchToListPath, [config]);

const matchList = matchListParse.data;
const matchToList = matchToListParse.data;



matchList.forEach(record => {

    if (record[0] !== ''){
      matchArray.push(record[0]);

    }

});

let fields = [];

matchToList.forEach((record) => {
  if(record === matchToList[0]){
    matchToList[0].forEach(field => fields.push(field.trim()))
  }
  else {
    let obj = {}
    let count = 0
    record.forEach(f => {
      obj[fields[count]] = f;
      count++
    });

    const e = obj[matchField];
    if (e){

      matchToObject[e] = obj;
    }

  }

});

let fieldsObj = {}
fields.forEach(f => {
  fieldsObj[f] = null;
})
fieldsObj.matched = null;
let newList = [];
newList.push(fieldsObj);

//Check file 1 against file 2

matchArray.forEach(item => {

  const match = matchToObject[item]
  if (match){
    match.matched = true;
    newList.push(match);
  }
  else {
    newList.push({
      [matchField]:item,
      matched:false
    })
  }
})

console.log({newList});

const csv = Baby.unparse(newList);

console.log(newList[0]);



        fs.writeFile('./output.csv', csv, 'utf8', function(err) {
            if (err) {
                console.log(err);
                console.log('Some error occured - file either not saved or corrupted file saved.');
            } else {

                console.log('output created');

            }
        });

//if record matches then update record in list 1

//output list 1 to new file

//Print to screen results
