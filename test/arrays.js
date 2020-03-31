describe.only('Arrays test', () => {
    const array = [1, 2, 4, 6, 8];
    // Una prueba
    it('Los valores del array son iguales', () => {
        expect(String(array)).to.be.equal('1,2,4,6,8');
        expect(array).to.have.ordered.members([1, 2, 4, 6, 8]);
        expect(array).to.eql([1, 2, 4, 6, 8]);
        expect(array).to.deep.equal([1, 2, 4, 6, 8])
    });

    it('Contiene el valor "2" el array', () => {
        expect(String(array)).to.include('2');
        expect(array).to.include.members([2]);
        expect(array).to.an('array').that.includes(2);
        expect(array).to.include(2)
    });
    it('Incluye todos los números o alguno de ellos', () => {
        // Incluye esos números con duplicados (no tienen que estar todos)
        expect(array).to.include.members([1, 4]);
        expect(array).to.include.members([1, 8, 1, 4, 2, 4, 6, 8])
    });
    it('Contiene los valores independientemente del orden', () => {
        expect(array).to.have.members([8, 1, 2, 4, 6]);
        expect(array).to.have.members([1, 8, 4, 6, 2]);
        expect(array).to.have.members([1, 4, 2, 6, 8]);
    });
    it('Tiene una longitud de 5 carácteres', () => {
        expect(array).to.have.lengthOf(5);
        expect(array.length).to.be.equal(5);

    });
});

var expect = require('chai').expect;
