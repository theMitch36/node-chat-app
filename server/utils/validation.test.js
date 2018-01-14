var expect = require('expect');

var {isRealString} = require('./validation');

describe('isRealString', () =>{
    it('Should reject non-string values', () => {
        var res = isRealString(98);
        expect(res).toBe(false);
    });

    it('Should reject string with only whitespace', () => {
        var res = isRealString('       ');
        expect(res).toBe(false);
    });

    it('Should allow string with non-space characterts', () => {
        var res = isRealString('   Mitchell     ');
        expect(res).toBe(true);
    });
});