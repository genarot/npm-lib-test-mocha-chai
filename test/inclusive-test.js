const expect = require('chai').expect;

/**
 * INCLUSIVE TESTS
 This feature is the inverse of .only(). By appending .skip(), you may tell Mocha to simply ignore test case(s).
 Anything skipped will be marked as pending, and reported as such. Here's an example of skipping an individual test:
 */
/**
 * Podemos decir que la función skip() se comporta de forma opuesta a only().
 * Con skip podemos provocar que, durante una ejecución, no se ejecute un bloque o
 * incluso un test dentro del mismo. Es muy útil si en algún momento tenemos
 * un bloque de tests o un solo test que no queremos que se ejecute por algún motivo.
 */

describe.skip('Case 1', () => {
    it('Test 1', () => {
        expect(true).to.equal(true);
        expect(true).to.be.true;
    });
    it('Test 2', () => {
        expect(true).to.equal(true);
        expect(true).to.be.true;
    });
});

describe('Case 2 - Without Skip', () => {
    it.skip('Inclusive Test 1 - Skip', () => {
        expect(true).to.equal(true);
        expect(true).to.be.true;
    });
    it('Inclusive Test 2', () => {
        expect(true).to.equal(true);
        expect(true).to.be.true;
    });
});

