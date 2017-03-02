import mocha from 'mocha';
import 'chai-jasmine';
import generateNewList from '../test-tmp/generateNewList';

const matchTo = [
  ['id','email'],
  ['1','ptallen1@gmail.com'],
  ['2','ptallen2@gmail.com'],
  ['3','ptallen3@gmail.com'],
  ['4','ptallen4@gmail.com'],
  ['5','ptallen5@gmail.com'],
  ['6','ptallen6@gmail.com'],
  ['7','ptallen7@gmail.com'],
  ['8','ptallen8@gmail.com'],
  ['9','ptallen9@gmail.com'],
]

const match = [
  ['id','email'],
  ['1','ptallen1@gmail.com'],
  ['2','ptallen2@gmail.com'],
  ['3','ptallen3@gmail.com'],
  ['4','ptallen4@gmail.com'],
  ['5','ptallen5@gmail.com'],
  ['6','ptallen6@gmail.com'],
  ['7','ptallen7@gmail.com'],
  ['8','ptallen8@gmail.com'],
  ['10','ptallen10@gmail.com'],
]

const matchField = 'email';

const fields = ['id','email'];

describe('generateNewList.js', () => {
  it('should return object', () => {
    const res = generateNewList(match, matchTo, fields, matchField);
    expect(typeof res).toBe('object');
    
  })
})
