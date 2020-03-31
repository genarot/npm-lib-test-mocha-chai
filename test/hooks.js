describe.only('Hooks', () => {
    before(() => {
        console.log('before - This method it is executed once, before all the it statements')
    });

    beforeEach(() => {
        console.log('beforeEach - It is executed before each "it" statement')
    });
    afterEach(() => {
        console.log('afterEach - It is executed after each "it" statement')
    });

    after(() => {
        console.log('after - It is executed after all the tests')
    })

    it('Test 1', () =>{
        console.log('TEST 1')
    })
    it('Test 2', () =>{
        console.log('TEST 2')
    })
});
