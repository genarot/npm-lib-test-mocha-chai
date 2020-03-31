var expect = require('chai').expect;
describe.only('Boolean test', () => {
    const numero = 2;
    it('El valor true es verdadero', () => {
        expect(true).to.be.true
        expect(true).to.be.equal(true)
        expect(1 + 2 > 0).to.be.equal(true)
    });
    it('El valor false es falso', () => {
        expect(false).to.be.false
        expect(false).to.be.equal(false)
        expect(1 + 2 === 0).to.be.equal(false)
    })
    it('1 es de tipo número', () => {
        expect(typeof 1 === 'number').to.be.true
        expect(typeof 1 === 'number').to.be.equal(true)
    });
    it('1 NO es de tipo string', () => {
        expect(typeof 1 === 'string').to.be.false
        expect(typeof 1 === 'string').to.be.equal(false)

    });
    it('1 NO es de tipo booleano', () => {
        expect(typeof 1 === 'boolean').to.be.false
        expect(typeof 1 === 'boolean').to.be.equal(false)
        expect(1).to.not.be.a('boolean')
    });

});

