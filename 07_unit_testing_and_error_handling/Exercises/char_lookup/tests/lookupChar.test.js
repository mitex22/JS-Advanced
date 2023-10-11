const lookupChar = require('../lookUpChar');

const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should;

describe('lookupChar test cass', () => {
    it('arg1 is NaN, arg2 is valid => undefined', () => {
        let arg1 = NaN;

        let actual = lookupChar(arg1, 1);

        expect(actual).to.be.undefined;
    });

    it('arg1 is number, arg2 is valid => undefined', () => {
        let arg1 = 123;

        let actual = lookupChar(arg1, 1);

        expect(actual).to.be.undefined;
    });

    it('arg1 is valid, arg2 is string => undefined', () => {
        let arg2 = 'asd';

        let actual = lookupChar('qwerty', arg2);

        expect(actual).to.be.undefined;
    });

    it('arg1 is valid, arg2 is NaN => undefined', () => {
        let arg2 = NaN;

        let actual = lookupChar('qwerty', arg2);

        expect(actual).to.be.undefined;
    });

    it('arg1 is valid, arg2 is 2.3 => undefined', () => {
        let arg2 = 2.3;

        let actual = lookupChar('qwe', arg2);

        expect(actual).to.be.undefined;
    });

    it('arg1 is valid, arg2 is equal to str.length => "Incorrect index"', () => {
        let arg2 = 3;

        let actual = lookupChar('qwe', arg2);

        expect(actual).to.equal('Incorrect index');
    });

    it('arg1 is valid, arg2 is -2 => "Incorrect index"', () => {
        let arg2 = -2;

        let actual = lookupChar('qwe', arg2);

        expect(actual).to.equal('Incorrect index');
    });

    it('arg1 is valid, arg2 is bigger than str.length => "Incorrect index"', () => {
        let arg2 = 4;

        let actual = lookupChar('qwe', arg2);

        expect(actual).to.equal('Incorrect index');
    });

    it('arg1 is qwerty, arg2 2 => "e"', () => {
        let arg1 = 'qwerty';
        let arg2 = 2;

        let actual = lookupChar(arg1, arg2);

        expect(actual).to.equal('e');
    });

    it('arg1 is qwerty, arg2 5 => "y"', () => {
        let arg1 = 'qwerty';
        let arg2 = 5;

        let actual = lookupChar(arg1, arg2);

        expect(actual).to.equal('y');
    });
});