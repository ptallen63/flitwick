import mocha from 'mocha';
import 'chai-jasmine';
import  getMatchedTotal from '../test-tmp/getMatchedTotal';

const list = [
  {item: 'a', matched: true},
  {item: 'a', matched: true},
  {item: 'a', matched: false},
  {item: 'a', matched: true},
  {item: 'a', },
  {item: 'a', matched: true},
  {item: 'a', matched: true},
]

describe('getMatchedTotal.js', () => {
  it('Should take an array Array', () => {
    const res = getMatchedTotal('green');
    expect(res).toBe(-1);
  })

  it('Should return an number', () => {
    const res = getMatchedTotal(list);
    expect(typeof res).toBe('number')
  })

  it('should return total matched', () => {
    const res = getMatchedTotal(list);
    expect(res).toBe(5);
  })
})
