import mocha from 'mocha';
import 'chai-jasmine';
import  displayArt from '../test-tmp/displayArt';


describe('displayArt.js', () => {
  it('should log art', () =>{
    spyOn(console, 'log');
    displayArt();
    expect(console.log).toHaveBeenCalledWith("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");



  })
})
