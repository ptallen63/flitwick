#!/usr/bin/env node
/* eslint-disable no-console */
const flitwick = require('../dist/index').default;
const pkg = require('../package.json');
const program = require('commander');

program
  .usage('flitwick <path/to/match_list> <path/to/match_to_list> <match_field>')
  .version(pkg.version)
  .description('put in the path to the list you want to match\n and the path to the list you are matching too.\n You must also put in the field you want to match on.')
  .parse(process.argv);


flitwick(program.args[0], program.args[1], program.args[2]);
