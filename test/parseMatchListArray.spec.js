import mocha from 'mocha';
import 'chai-jasmine';
import parseMatchListArray from '../src/parseMatchListArray';

const testArray = [['item1'],['item2'],['item3']];
const testArrayWithEmptySpace = [[''],['item1'],['item2'],['item3']];

describe('parseMatchListArray()', () => {
  it('Should take array', () => {
      expect(parseMatchListArray(0)).toBe(-1);
      expect(parseMatchListArray('Hellow')).toBe(-1);
      expect(parseMatchListArray({gree:'gree'})).toBe(-1);
      expect(parseMatchListArray(testArray).length).toBe(3);
  });
  it('should not cound empty space', () => {
    expect(parseMatchListArray(testArrayWithEmptySpace).length).toBe(3);
  })
});
