#!/usr/bin/env node
/* eslint-disable no-console */
const flitwick = require('../dist/index').default;
const pkg = require('../package.json');

const args = process.argv;
args.map((a) => {
  if (a === '-v' || a === '-version') {
    console.log(pkg.version);
    process.exit();
  }

  if (a === '-help' || a === '-h') {
    console.log('please refer to https://github.com/ptallen63/flitwick');
    process.exit();
  }
  return true;
});


flitwick(args[2], args[3], args[4]);
