const sum = require('../sum.js');

const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should;

describe('sum tests', () => {
    it('argument is of type array', () => {
        let actual = sum('str1');

        expect(actual).is.NaN;
    });

    it('sum elements', () => {
        let array = [1, 2];

        let actual = sum(array);

        expect(actual).is.eq(3);
    });

    it('sum elements', () => {
        let array = [1, 5];

        let actual = sum(array);

        expect(actual).is.eq(6);
    });
});