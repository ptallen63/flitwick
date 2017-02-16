/* eslint-disable no-console */
import fs from 'fs';

export default function (csv) {
  fs.writeFile('./output.csv', csv, 'utf8', (err) => {
    if (err) {
      console.log(err);
      console.log('Some error occured - file either not saved or corrupted file saved.');
    } else {
  // TODO output some length data,
      console.log('output created');
    }
  });
}
