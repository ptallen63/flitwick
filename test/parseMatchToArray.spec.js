import mocha from 'mocha';
import 'chai-jasmine';
import parseMatchToArray from '../src/parseMatchToArray';

  const matchField = 'email';
  const testArray = [
    ['id', 'email', 'other'],
    ['1','ptallen1@gmail.com', 'blue1'],
    ['2','ptallen2@gmail.com', 'blue2'],
    ['3','ptallen3@gmail.com', 'blue3'],
    ['4','ptallen4@gmail.com', 'blue4'],
    ['5','ptallen5@gmail.com', 'blue5'],
    ['6','ptallen6@gmail.com', 'blue6'],
    ['7','ptallen7@gmail.com', 'blue7'],
    ['8','ptallen8@gmail.com', 'blue8'],
    ['9','ptallen9@gmail.com', 'blue9'],
  ]

describe('parseMatchToArray()', () => {
  it('Should return an Object', () =>{
    const res = parseMatchToArray(testArray,matchField);
    expect(typeof res).toBe('object');
  })
})
