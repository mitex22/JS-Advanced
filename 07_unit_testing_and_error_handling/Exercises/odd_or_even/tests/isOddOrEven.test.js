const isOddOrEven = require("../isOddOrEven")

const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should;

describe('isOddOrEven test casess', () => {
    it('if arg is number => return undefined', () => {
        
        let input = 123;

        let actual = isOddOrEven(input);

        expect(actual).to.be.undefined;
    });

    it('if arg is NaN => return undefined', () => {
        
        let input = NaN;

        let actual = isOddOrEven(input);

        expect(actual).to.be.undefined;
    });

    it('if arg is "qwerty" => return even', () => {
        
        let input = 'qwerty';

        let actual = isOddOrEven(input);

        expect(actual).to.equal('even');
    });

    it('if arg is "qwe" => return odd', () => {
        
        let input = 'qwe';

        let actual = isOddOrEven(input);

        expect(actual).to.equal('odd');
    });

    it('if arg is "qwe qwe " => return even', () => {
        
        let input = 'qwe qwe ';

        let actual = isOddOrEven(input);

        expect(actual).to.equal('even');
    });

    it('if arg is "qwe qwe" => return odd', () => {
        
        let input = 'qwe qwe';

        let actual = isOddOrEven(input);

        expect(actual).to.equal('odd');
    });
});