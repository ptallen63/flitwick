import mocha from 'mocha';
import 'chai-jasmine';
import parseConfig from '../test-tmp/parseConfig';

describe('ParseConfig.js', () => {
  it('should be an definded', () => {
    expect(parseConfig).toBeDefined();
  })

  it('Should be an object', () => {
    expect(typeof parseConfig).toBe('object');
    expect(typeof parseConfig).not.toBe('string');
  })


})
