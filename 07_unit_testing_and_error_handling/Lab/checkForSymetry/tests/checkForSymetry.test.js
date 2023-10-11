const isSymmetric = require('../checkForSymetry.js');

const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should;

describe('isSymmetric functions tests', () => {
    it('takes Array as argument 1', () => {
        expect(isSymmetric('1, 2, 3')).equals(false);
    });

    it('takes Array as argument 2', () => {
        expect(isSymmetric(123)).equals(false);
    });

    it('takes Array as argument 3', () => {
        expect(isSymmetric({})).equals(false);
    });

    it('takes Array as argument 4', () => {
        expect(isSymmetric({name: 'Dima'})).equals(false);
    });

    it('Array is symetric with numbers', () => {
        // arrange
        let nonArray = [1, 2, 3, 2, 1];

        // act
        let actual = isSymmetric(nonArray);

        // assert
        expect(actual).equals(true);;

    });

    it('Array is symetric with strings', () => {
        // arrange
        let nonArray = ['asd', 'dsa', 'dsa', 'asd'];

        // act
        let actual = isSymmetric(nonArray);

        // assert
        expect(actual).equals(true);

    });

    it('Array is symetric with one element', () => {
        // arrange
        let nonArray = ['asd'];

        // act
        let actual = isSymmetric(nonArray);

        // assert
        expect(actual).equals(true);

    });

    it('Array is empty', () => {
        // arrange
        let emptyArr = [];

        // act
        let actual = isSymmetric(emptyArr);

        // assert
        expect(actual).equals(true);

    });

    it('Array is NOT symetric', () => {
        // arrange
        let nonArray = [1, 3, 3, 2, 1];

        // act
        let actual = isSymmetric(nonArray);

        // assert
        expect(actual).equals(false);

    });

    it('mixed arr', () => {
        // arrange
        let nonArray = [1, 'a', 'a', 1];

        // act
        let actual = isSymmetric(nonArray);

        // assert
        expect(actual).equals(true);

    });
});