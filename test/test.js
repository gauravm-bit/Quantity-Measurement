const Converter = require('../app/Converter.js')
const assert = require('chai').assert;

//1.1 when compared with 0 feet as input and 0 inch as output should return equal
it('given 0 feet when compared should return 0', () => {
    assert.equal(Converter.feetConverter(0),0)
})

//1.2 when compared with 0 feet as input and 1 inch as output should not return equal
it('given 0 feet when compared should not return 1', () => {
    assert.notEqual(Converter.feetConverter(0),1)
})

//1.3 when compared with null feet as input and 0 inch as output should return equal
it('given null feet when compared should return 0', () => {
    assert.equal(Converter.feetConverter(null),0)
})

//1.4 when compared with same object as input feet and output inch should return equal
it('given input when compared should return equal reference', () => {
    assert.strictEqual(Converter.feetConverter(0),0)
})

//1.5 when compared with string input as input feet and output should not return equal
it('given input of string when compared should return not equal', () => {
    assert.notEqual(Converter.feetConverter('typewrong'),0)
})

//1.6 when compared with 3 feet as input and output as 36 inch should return equal
it('given input of 3 feet when compared should return 36 inch', () => {
    assert.equal(Converter.feetConverter(3),36)
})

//1.7 when compared with 0 inch as input and output as 0 feet should return equal
it('given 0 inch and 0 feet when compared should return equal', () => {
    assert.equal(Converter.inchConverter(0),0)
})

//1.8 when compared with 0 inch as input and output as 1 feet should not return equal
it('given 0 inch and 0 feet when compared should return not equal', () => {
    assert.notEqual(Converter.inchConverter(0),1)
})

//1.9 when compared with null as input and output as 0 feet should return equal
it('given 0 inch and null when compared should return equal length', () => {
    assert.equal(Converter.inchConverter(null),0)
})

//1.10 when compared with same object as input inch and same output should return equal
it('given input when compared should return equal reference', () => {
    assert.strictEqual(Converter.inchConverter(0),0)
})

//1.11 when compared with inch input as string and output should not return equal
it('given input of string when compared should return not equal', () => {
    assert.notEqual(Converter.inchConverter('typewrong'),0)
})
//1.12 when compared with 36 inch as input with 3 feet as input should return equal
it('given input of 36 inches when compared should return 3 inch', () => {
    assert.equal(Converter.inchConverter(36),3)
})
