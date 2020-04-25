const Temperature = require('../app/Temperature')
const assert = require('chai').assert;

describe(`Testing for Temperature measurement`, () => {
//1.30 when compared with 212Farhaniet and 100 degree celcius should return equal
it('given input of 212 Farhaniet and 100 degree celcius should return equal', () => {
    assert.equal(Temperature.farhanietToCelciusConverter(212), Temperature.returnSame(100))
})

})