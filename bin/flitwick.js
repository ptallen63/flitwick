#!/usr/bin/env node
/* eslint-disable no-console */
const flitwick = require('../dist/index').default;
const pkg = require('../package.json');
const program = require('commander');

let matchListPath = null;
let matchToListPath = null;
let matchField = null;

program
  .usage('flitwick <path/to/match_list> <path/to/match_to_list> <match_field>')
  .arguments('<matchList> <matchTolist> <match>')
  .action((matchList, matchTolist, match) => {
    matchListPath = matchList;
    matchToListPath = matchTolist;
    matchField = match;
  })
  .version(pkg.version)
  .description('put in the path to the list you want to match\n and the path to the list you are matching too.\n You must also put in the field you want to match on.')
  .parse(process.argv);


if (!matchListPath) {
  console.log('no match list provided');
  process.exit(1);
}
if (!matchToListPath) {
  console.log('no match to list provided');
  process.exit(1);
}
if (!matchField) {
  console.log('no match field provided');
  process.exit(1);
}

flitwick(matchListPath, matchToListPath, matchField);
