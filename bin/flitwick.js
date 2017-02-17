const flitwick = require('../dist/index').default;

const args = process.argv;

flitwick(args[2], args[3], args[4]);

// TODO get -v flag
// TODO get -help flag
