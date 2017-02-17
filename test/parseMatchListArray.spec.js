import mocha from 'mocha';
import 'chai-jasmine';
import parseMatchListArray from '../src/parseMatchListArray';

const testArray = [
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

const testArrayWithEmptySpace = [
  [ 'id', 'email' ],
  [ '1', 'ptallen1@gmail.com' ],
  [ '2', 'ptallen2@gmail.com' ],
  [ '3', 'ptallen3@gmail.com' ],
  [ '4', 'ptallen4@gmail.com' ],
  [ '5', 'ptallen5@gmail.com' ],
  [ '6', 'ptallen6@gmail.com' ],
  [ '7', 'ptallen7@gmail.com' ],
  [ '8', 'ptallen8@gmail.com' ],
  [ '9', 'ptallen9@gmail.com' ],
  [ '' ] ];


describe('parseMatchListArray()', () => {
  it('Should throw an error If not match fields array', () => {
      expect(function () {parseMatchListArray();}).toThrow(new Error('Match Field not Found'));
  });

  it('should not count empty space', () => {
    expect(parseMatchListArray(testArrayWithEmptySpace, 'email').length).toBe(10);
  })

  it('Should take an array', () => {
    expect(parseMatchListArray(0, 'email')).toBe(-1);
    expect(parseMatchListArray('string', 'email')).toBe(-1);
    expect(parseMatchListArray({TEST:'GER'}, 'email')).toBe(-1);

  })

  it('Should return an array with length', () => {
    const result = parseMatchListArray(testArray, 'email');
    expect(typeof result).toBe('object');
    expect(result.length).toBeGreaterThan(0);
  })

  it('Should not put filed in the array that do not match', () => {
    const result = parseMatchListArray(testArray, 'blue');
    expect(result.length).toBe(0);
  })
});
