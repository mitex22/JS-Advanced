const PaymentPackage = require("../PaymentPackage");

const expect = require('chai').expect;
const assert = require('chai').assert;
const should = require('chai').should;

describe('PaymentPackage test cases', () => {

    describe('HAPPY PATHS', () => {

        it('pp("Dimitar", "123") => pp.Dimitar & pp.123 & pp.20 & pp.true', () => {
            let pp = new PaymentPackage('Dimitar', 123);

            expect(pp.name).to.equal('Dimitar');
            expect(pp.value).to.equal(123);
            expect(pp.VAT).to.equal(20);
            expect(pp.active).to.equal(true);
        });

        it('pp("Dimitar", 123, 23) => pp.Dimitar & pp.123 & pp.20 & pp.true', () => {
            let pp = new PaymentPackage('Dimitar', 123, 23);

            expect(pp.name).to.equal('Dimitar');
            expect(pp.value).to.equal(123);
            expect(pp.VAT).to.equal(20);
            expect(pp.active).to.equal(true);
        });

        it('pp("Dimitar", 123) => HAS PROPS and METHODS pp.name & pp.value & pp.VAT & pp.active & pp.toString', () => {
            let pp = new PaymentPackage('Dimitar', 123);
            
            expect(pp).to.haveOwnProperty('_name');
            expect(pp).to.haveOwnProperty('_value');
            expect(pp).to.haveOwnProperty('_VAT');
            expect(pp).to.haveOwnProperty('_active');
            expect(pp.toString).to.exist;
            expect(typeof pp.toString).to.equal('function');

            expect(pp).to.have.property('_name');
            expect(pp).to.have.property('_value');
            expect(pp).to.have.property('_VAT');
            expect(pp).to.have.property('_active');
            expect(pp).to.have.property('constructor');
            expect(pp).to.have.property('toString');
        });

        describe('getters and setters', () => {

            it('name getter and setter', () => {
                let pp = new PaymentPackage('Dimitar', 123);

                expect(pp.name).to.equal('Dimitar');
                pp.name = 'Vanko';
                expect(pp.name).to.equal('Vanko');
            });

            it('value getter and setter', () => {
                let pp = new PaymentPackage('Dimitar', 123);

                expect(pp.value).to.equal(123);
                pp.value = 321;
                expect(pp.value).to.equal(321);
            });

            it('vat getter and setter', () => {
                let pp = new PaymentPackage('Dimitar', 123);

                expect(pp.VAT).to.equal(20);
                pp.VAT = 22;
                expect(pp.VAT).to.equal(22);
            });

            it('active getter and setter', () => {
                let pp = new PaymentPackage('Dimitar', 123);

                expect(pp.active).to.equal(true);
                pp.active = false;
                expect(pp.active).to.equal(false);
            });

            it('toString() => returns output', () => {
                let pp = new PaymentPackage('Dimitar', 123);
                let expected = `Package: Dimitar\n- Value (excl. VAT): 123\n- Value (VAT 20%): 147.6`
                
                expect(pp.toString()).to.equal(expected);
            });

            it('toString() => returns output + (inactive)', () => {
                let pp = new PaymentPackage('Dimitar', 123);

                pp.active = false;
                let expected = `Package: Dimitar (inactive)\n- Value (excl. VAT): 123\n- Value (VAT 20%): 147.6`
                
                expect(pp.toString()).to.equal(expected);
            });
        });
    });

    describe('BAD PATHS', () => {

        it('no args => throws ("Name must be a non-empty string")', () => {
            expect(() => new PaymentPackage()).to.throw('Name must be a non-empty string');
        });

        it('name => throws ("Name must be a non-empty string")', () => {
            expect(() => new PaymentPackage(123, 123)).to.throw('Name must be a non-empty string');
            expect(() => new PaymentPackage([], 123)).to.throw('Name must be a non-empty string');
            expect(() => new PaymentPackage([1,2,3], 123)).to.throw('Name must be a non-empty string');
            expect(() => new PaymentPackage(['123'], 123)).to.throw('Name must be a non-empty string');
            expect(() => new PaymentPackage({}, 123)).to.throw('Name must be a non-empty string');
            expect(() => new PaymentPackage({name: 'Dimitar'}, 123)).to.throw('Name must be a non-empty string');
            expect(() => new PaymentPackage('', 123)).to.throw('Name must be a non-empty string');
            expect(() => new PaymentPackage(NaN, 123)).to.throw('Name must be a non-empty string');
            expect(() => new PaymentPackage(null, 123)).to.throw('Name must be a non-empty string');
            expect(() => new PaymentPackage(undefined, 123)).to.throw('Name must be a non-empty string');

            expect(() => new PaymentPackage("abc", 213)).not.to.throw("Name must be a non-empty string");
        });

        it('value => throws ("Value must be a non-negative number")', () => {
            expect(() => new PaymentPackage('Dimitar', '')).to.throw('Value must be a non-negative number');
            expect(() => new PaymentPackage('Dimitar', '123')).to.throw('Value must be a non-negative number');
            expect(() => new PaymentPackage('Dimitar', [])).to.throw('Value must be a non-negative number');
            expect(() => new PaymentPackage('Dimitar', [1,2,3])).to.throw('Value must be a non-negative number');
            expect(() => new PaymentPackage('Dimitar', [123])).to.throw('Value must be a non-negative number');
            expect(() => new PaymentPackage('Dimitar', {})).to.throw('Value must be a non-negative number');
            expect(() => new PaymentPackage('Dimitar', {value: 123})).to.throw('Value must be a non-negative number');
            expect(() => new PaymentPackage('Dimitar', -123)).to.throw('Value must be a non-negative number');
            expect(() => new PaymentPackage('Dimitar', null)).to.throw('Value must be a non-negative number');
            expect(() => new PaymentPackage('Dimitar', undefined)).to.throw('Value must be a non-negative number');

            expect(() => new PaymentPackage('Dimitar', 0)).to.not.throw('Value must be a non-negative number');
        });

        it('vat => throws ("VAT must be a non-negative number")', () => {
            let pp = new PaymentPackage('Dimitar', 123);

            expect(() => (pp.VAT = '')).to.throw('VAT must be a non-negative number');
            expect(() => (pp.VAT = '123')).to.throw('VAT must be a non-negative number');
            expect(() => (pp.VAT = [])).to.throw('VAT must be a non-negative number');
            expect(() => (pp.VAT = [1,2,3])).to.throw('VAT must be a non-negative number');
            expect(() => (pp.VAT = [123])).to.throw('VAT must be a non-negative number');
            expect(() => (pp.VAT = {})).to.throw('VAT must be a non-negative number');
            expect(() => (pp.VAT = {VAT: 123})).to.throw('VAT must be a non-negative number');
            expect(() => (pp.VAT = -123)).to.throw('VAT must be a non-negative number');
            expect(() => (pp.VAT = null)).to.throw('VAT must be a non-negative number');
            expect(() => (pp.VAT = undefined)).to.throw('VAT must be a non-negative number');

            expect(() => (pp.VAT = 0)).to.not.throw('VAT must be a non-negative number');
        });

        it('active => throws ("Active status must be a boolean")', () => {
            let pp = new PaymentPackage('Dimitar', 123);

            expect(() => (pp.active = '')).to.throw('Active status must be a boolean');
            expect(() => (pp.active = '123')).to.throw('Active status must be a boolean');
            expect(() => (pp.active = [])).to.throw('Active status must be a boolean');
            expect(() => (pp.active = [1,2,3])).to.throw('Active status must be a boolean');
            expect(() => (pp.active = [123])).to.throw('Active status must be a boolean');
            expect(() => (pp.active = {})).to.throw('Active status must be a boolean');
            expect(() => (pp.active = {active: 123})).to.throw('Active status must be a boolean');
            expect(() => (pp.active = -123)).to.throw('Active status must be a boolean');
            expect(() => (pp.active = NaN)).to.throw('Active status must be a boolean');
            expect(() => (pp.active = null)).to.throw('Active status must be a boolean');
            expect(() => (pp.active = undefined)).to.throw('Active status must be a boolean');

            expect(() => (pp.active = 0)).to.throw('Active status must be a boolean');
        });
    });
});