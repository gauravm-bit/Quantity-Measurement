const Converter = require('./Converter.js')
const assert = require('assert')

//1.1
it('given 0 feet when compared should return 0', () => {
    assert.equal(Converter.feetConverter(0),0)
})
//1.2
it('given null feet when compared should return 0', () => {
    assert.equal(Converter.feetConverter(null),0)
})
//1.3
it('given input when compared should return equal reference', () => {
    assert.strictEqual(Converter.feetConverter(0),0)
})
//1.4
it('given input of string when compared should return not equal', () => {
    assert.notEqual(Converter.feetConverter('typewrong'),0)
})
//1.5
it('given input of 3 feet when compared should return 36 inch', () => {
    assert.equal(Converter.feetConverter(3),36)
})
//1.6
it('given 0 inch and 0 feet when compared should return equal length', () => {
    assert.equal(Converter.inchConverter(0),0)
})
//1.7
it('given 0 inch and null when compared should return equal length', () => {
    assert.equal(Converter.inchConverter(null),0)
})
//1.8
it('given input when compared should return equal reference', () => {
    assert.strictEqual(Converter.inchConverter(0),0)
})
//1.9
it('given input of string when compared should return not equal', () => {
    assert.notEqual(Converter.inchConverter('typewrong'),0)
})
//1.10
it('given input of 36 inches when compared should return 3 inch', () => {
    assert.equal(Converter.inchConverter(36),3)
})
