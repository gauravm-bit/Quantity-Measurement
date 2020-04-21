const Converter = require('./Converter.js')
const assert = require('assert')

it('given 0 feet and 0 feet should return true', () => {
    assert.equal(Converter.feetConverter(0),0)
})

 