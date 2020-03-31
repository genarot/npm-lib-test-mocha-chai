var expect = require('chai').expect;

/**
 * Suma de los elementos que tienen que ser números
 * @param {*} arr Lista de números a sumar
 */
function sum(arr) {
    let sum = 0;
    for (let i of arr) {
        sum += Number(i);
    }
    return sum;
}

describe.only('Numbers test', () => {
    const numero = 2;
    it('Devolver resultado 0 con array vacio de números', () => {
    });

    it ('El número es igual ', () => {
        
    });
    it('El número es mayor que 0', () => {
        
    })
    it('La suma es de tipo númerico', () => {
        
    });
    it('No es número', () => {
        
    });

    it('Comprobar el número resultante con un elemento en el array de la suma', () => {
                    
    });

    it('Comprobar el número (que está en formato string) resultante con un elemento en el array de la suma', () => {
                   
    });

    it('Array numérico con números negativos', () => {
                  
    });

    it('Array numérico con números negativos y strings con valor numérico', () => {
                  
    });

});
