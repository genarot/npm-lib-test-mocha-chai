const {expect} = require('chai')

const myLyb = require('gtinoco-npm-lib-project-1a-math')
describe('Additions', () => {
    // Addition of + and + must be +
    describe('when you add two positive numbers the result', () => {
        it('should be positive', () => {
            expect(myLyb.addition(2, 4)).to.be.at.least(1)
        })
    })

    describe('when you add a positive number with a negative number', () => {
        describe('and the absolute value of the negative number is greater than positive the result', () => {
            it('should be negative', () => {
                expect(myLyb.addition(3,-34)).to.be.below(0)
            })
        })
        describe('and the positive number is greater than negative the result', () => {
            it('should be positive', () => {
                expect(myLyb.addition(-4,23)).to.be.at.least(0)

            })
        })
    })
})
