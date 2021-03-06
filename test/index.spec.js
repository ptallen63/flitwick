import mocha from 'mocha';
import 'chai-jasmine';
import  flitwick from '../test-tmp/index';

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
  ['9','ptallen9@gmail.com'],
]

const matchField = 'email';

describe('indexs.js', () => {
  it('should have matchlist', () => {
    expect(function () {flitwick()}).toThrow(new Error('Match list argument not found'));
  })

  it('should have matchTo List', () => {
    expect(function () {flitwick(match)}).toThrow(new Error('Match To list argument not found.'));
  })

  it('should have matchField List', () => {
    expect(function () {flitwick(match,matchTo)}).toThrow(new Error('Match Field argument not found.'));
  })


})
