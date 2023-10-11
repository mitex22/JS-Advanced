const mathEnforcer = require('../mathEnforcer.js');

const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should;

describe('mathEnforcer test cases', () => {

    describe('addFive test cases', () => {
        it('num is qwerty => undefined', () => {
            let num = 'qwerty';

            let actual = mathEnforcer.addFive(num);

            expect(actual).to.be.undefined;
        });

        it('num is "5" => undefined', () => {
            let num = "5";

            let actual = mathEnforcer.addFive(num);

            expect(actual).to.be.undefined;
        });

        it('num is [1, 2, 3] => undefined', () => {
            let num = [1, 2, 3];

            let actual = mathEnforcer.addFive(num);

            expect(actual).to.be.undefined;
        });

        it('num is 1 => 6', () => {
            let num = 1;

            let actual = mathEnforcer.addFive(num);

            expect(actual).to.equal(6);
        });

        it('num is 0 => 5', () => {
            let num = 0;

            let actual = mathEnforcer.addFive(num);

            expect(actual).to.equal(5);
        });

        it('num is -1 => 4', () => {
            let num = -1;

            let actual = mathEnforcer.addFive(num);

            expect(actual).to.equal(4);
        });

        it('no param => undefined', () => {
            let actual = mathEnforcer.addFive();

            expect(actual).to.be.undefined;
        });

        it('num is 5.1 => approx 10.1', () => {
            let num = 5.1;

            let actual = mathEnforcer.addFive(num);

            expect(actual).to.be.approximately(10.1, 0.01);
        });

        it('num is 10.5 => 15.5', () => {
            let num = 10.5;

            let actual = mathEnforcer.addFive(num);

            expect(actual).to.equal(15.5);
        });

        it('num is -10.5 => -5.5', () => {
            let num = -10.5;

            let actual = mathEnforcer.addFive(num);

            expect(actual).to.equal(-5.5);
        });
    });

    describe('subtractTen test cases', () => {
        it('num is qwerty => undefined', () => {
            let num = 'qwerty';

            let actual = mathEnforcer.subtractTen(num);

            expect(actual).to.be.undefined;
        });

        it('num is "5" => undefined', () => {
            let num = "5";

            let actual = mathEnforcer.subtractTen(num);

            expect(actual).to.be.undefined;
        });

        it('num is [1, 2, 3] => undefined', () => {
            let num = [1, 2, 3];

            let actual = mathEnforcer.subtractTen(num);

            expect(actual).to.be.undefined;
        });

        it('num is 11 => 1', () => {
            let num = 11;

            let actual = mathEnforcer.subtractTen(num);

            expect(actual).to.equal(1);
        });

        it('num is 9 => -1', () => {
            let num = 9;

            let actual = mathEnforcer.subtractTen(num);

            expect(actual).to.equal(-1);
        });

        it('num is 10 => 0', () => {
            let num = 10;

            let actual = mathEnforcer.subtractTen(num);

            expect(actual).to.equal(0);
        });

        it('no param => undefined', () => {
            let actual = mathEnforcer.subtractTen();

            expect(actual).to.be.undefined;
        });

        it('num is floating => approx 1.1', () => {
            let num = 11.1;

            let actual = mathEnforcer.subtractTen(num);

            expect(actual).to.be.approximately(1.1, 0.01);
        });

        it('num is 10.5 => 0.5', () => {
            let num = 10.5;

            let actual = mathEnforcer.subtractTen(num);

            expect(actual).to.equal(0.5);
        });

        it('num is -10.5 => -20.5', () => {
            let num = -10.5;

            let actual = mathEnforcer.subtractTen(num);

            expect(actual).to.equal(-20.5);
        });
    });

    describe('sum test cases', () => {
        it('num1 is qwerty => undefined', () => {
            let num1 = 'qwerty';

            let actual = mathEnforcer.sum(num1, 2);

            expect(actual).to.be.undefined;
        });

        it('num1 is "5" => undefined', () => {
            let num1 = "5";

            let actual = mathEnforcer.sum(num1, 2);

            expect(actual).to.be.undefined;
        });

        it('num1 is [1, 2, 3] => undefined', () => {
            let num1 = [1, 2, 3];

            let actual = mathEnforcer.sum(num1, 2);

            expect(actual).to.be.undefined;
        });

        it('num1 is 1 => 3', () => {
            let num1 = 1;

            let actual = mathEnforcer.sum(num1, 2);

            expect(actual).to.equal(3);
        });

        it('num1 is -2 => 0', () => {
            let num1 = -2;

            let actual = mathEnforcer.sum(num1, 2);

            expect(actual).to.equal(0);
        });

        it('num1 is -3 => -1', () => {
            let num1 = -3;

            let actual = mathEnforcer.sum(num1, 2);

            expect(actual).to.equal(-1);
        });

        it('no num1 => undefined', () => {
            let actual = mathEnforcer.sum(2);

            expect(actual).to.be.undefined;
        });

        it('num1 is 2 and no num2 => undefined', () => {
            let num1 = 2;

            let actual = mathEnforcer.sum(2);

            expect(actual).to.be.undefined;
        });

        it('num1 is float and num2 is int => 3.2', () => {
            let num1 = 2.2;
            let num2 = 1;

            let actual = mathEnforcer.sum(num1, num2);

            expect(actual).to.equal(3.2);
        });

        it('num1 is floating and num2 is floating => approx 3.3', () => {
            let num1 = 1.1;
            let num2 = 2.2;

            let actual = mathEnforcer.sum(num1, num2);

            expect(actual).to.approximately(3.3, 0.01);
        });

        it('num1 is floating and num2 is floating => approx -3.3', () => {
            let num1 = -1.1;
            let num2 = -2.2;

            let actual = mathEnforcer.sum(num1, num2);

            expect(actual).to.approximately(-3.3, 0.01);
        });
    });

    describe('sum test cases', () => {
        it('num2 is qwerty => undefined', () => {
            let num2 = 'qwerty';

            let actual = mathEnforcer.sum(2, num2);

            expect(actual).to.be.undefined;
        });

        it('num2 is "5" => undefined', () => {
            let num2 = "5";

            let actual = mathEnforcer.sum(2, num2);

            expect(actual).to.be.undefined;
        });

        it('num2 is [1, 2, 3] => undefined', () => {
            let num2 = [1, 2, 3];

            let actual = mathEnforcer.sum(2, num2);

            expect(actual).to.be.undefined;
        });

        it('num2 is 1 => 3', () => {
            let num2 = 1;

            let actual = mathEnforcer.sum(2, num2);

            expect(actual).to.equal(3);
        });

        it('num2 is -2 => 0', () => {
            let num2 = -2;

            let actual = mathEnforcer.sum(2, num2);

            expect(actual).to.equal(0);
        });

        it('num2 is -3 => -1', () => {
            let num2 = -3;

            let actual = mathEnforcer.sum(2, num2);

            expect(actual).to.equal(-1);
        });

        it('no num2 => undefined', () => {
            let actual = mathEnforcer.sum(2);

            expect(actual).to.be.undefined;
        });

        it('num1 is 2 and no num2 => undefined', () => {
            let num1 = 2;

            let actual = mathEnforcer.sum(2);

            expect(actual).to.be.undefined;
        });

        it('num1 is int and num2 is floating => 3.2', () => {
            let num1 = 1;
            let num2 = 2.2;

            let actual = mathEnforcer.sum(num1, num2);

            expect(actual).to.equal(3.2);
        });

        it('num1 is floating and num2 is floating => approx 3.3', () => {
            let num1 = 1.1;
            let num2 = 2.2;

            let actual = mathEnforcer.sum(num1, num2);

            expect(actual).to.approximately(3.3, 0.01);
        });

        it('num1 is floating and num2 is floating => approx -3.3', () => {
            let num1 = -1.1;
            let num2 = -2.2;

            let actual = mathEnforcer.sum(num1, num2);

            expect(actual).to.approximately(-3.3, 0.01);
        });
    });
});