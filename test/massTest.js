const Mass = require('../app/Mass')
const assert = require('chai').assert;

describe(`Testing for Mass measurement`, () => {

//1.27 when compared with 1 kg masss and 1000 grams should return equal
it('given input of 1 kg mass and 1000 grams should return equal', () => {
    assert.equal(Mass.KilogramToGramConverter(1), Mass.returnSame(1000))
})

//1.28 when compared with 1 tonne masss and 1000 kgs should return equal
it('given input of 1 tonne mass and 1000 kgs should return equal', () => {
    assert.equal(Mass.tonneToKgConverter(1), Mass.returnSame(1000))
})

//1.29 when added with 1 tonne mass and 1000 grams should return 1001 kgs 
it('given input of 1 tonne mass and 1000 grams should return 1001 kgs', () => {
    var Mass1 = Mass.tonneToKgConverter(1)
    var Mass2 = Mass.gramToKgsConverter(1000)
    var result = Mass.additionMass(Mass1, Mass2)
    assert.equal(result, 1001)
})

})