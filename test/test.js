const Converter = require('../app/Converter.js')
const assert = require('chai').assert;

//1.1 when compared with 0 feet as input and 0 inch as output should return equal
it('given 0 feet when compared should return 0', () => {
    assert.equal(Converter.feetToInchConverter(0),0)
})

//1.2 when compared with 0 feet as input and 1 inch as output should not return equal
it('given 0 feet when compared should not return 1', () => {
    assert.notEqual(Converter.feetToInchConverter(0),1)
})

//1.3 when compared with null feet as input and 0 inch as output should return equal
it('given null feet when compared should return 0', () => {
    assert.equal(Converter.feetToInchConverter(null),0)
})

//1.4 when compared with same object as input feet and output inch should return equal
it('given input when compared should return equal reference', () => {
    assert.strictEqual(Converter.feetToInchConverter(0),0)
})

//1.5 when compared with string input as input feet and output should not return equal
it('given input of string when compared should return not equal', () => {
    assert.notEqual(Converter.feetToInchConverter('typewrong'),0)
})

//1.6 when compared with 3 feet as input and output as 36 inch should return equal
it('given input of 3 feet when compared should return 36 inch', () => {
    assert.equal(Converter.feetToInchConverter(3),36)
})

//1.7 when compared with 0 inch as input and output as 0 feet should return equal
it('given 0 inch and 0 feet when compared should return equal', () => {
    assert.equal(Converter.inchToFeetConverter(0),0)
})

//1.8 when compared with 0 inch as input and output as 1 feet should not return equal
it('given 0 inch and 0 feet when compared should return not equal', () => {
    assert.notEqual(Converter.inchToFeetConverter(0),1)
})

//1.9 when compared with null as input and output as 0 feet should return equal
it('given 0 inch and null when compared should return equal length', () => {
    assert.equal(Converter.inchToFeetConverter(null),0)
})

//1.10 when compared with same object as input inch and same output should return equal
it('given input when compared should return equal reference', () => {
    assert.strictEqual(Converter.inchToFeetConverter(0),0)
})

//1.11 when compared with inch input as string and output should not return equal
it('given input of string when compared should return not equal', () => {
    assert.notEqual(Converter.inchToFeetConverter('typewrong'),0)
})

//1.12 when compared with 36 inch as input with 3 feet as input should return equal
it('given input of 36 inches when compared should return 3 inch', () => {
    assert.equal(Converter.inchToFeetConverter(36),3)
})

//1.13 when compared with 3 feet and 1 yard when converted should return equal values of inch
it('given input of 3 feet and 1 yard should return equal values of inch', () => {
    assert.equal(Converter.feetToInchConverter(3),Converter.yardToInchConverter(1))
})

//1.14 when compared with 1 feet and 1 yard when converted should not return equal values of inch
it('given input of 1 feet and 1 yard should not return equal values of inch', () => {
    assert.notEqual(Converter.feetToInchConverter(1),Converter.yardToInchConverter(1))
})

//1.15 when compared with 1 inch and 1 yard when compared should not return equal 
it('given input of 1 inch and 1 yard should not return equal values of inch', () => {
    assert.notEqual(Converter.returnSame(1),Converter.yardToInchConverter(1))
})

//1.16 when compared with 1 yard and 36 inch when converted should return equal
it('given input of 1 yard and 36 inch should return equal', () => {
    assert.equal(Converter.yardToInchConverter(1),Converter.returnSame(36))
})

//1.17 when compared with 36 inch and 1 yard when converted should return equal
it('given input of 36 inch and 1 yard should return equal', () => {
    assert.equal(Converter.returnSame(36),Converter.yardToInchConverter(1))
})

//1.18 when compared with 1 yard and 3 feet when converted should return equal values of inch
it('given input of 1 yard and 3 feet should return equal values of inch', () => {
    assert.equal(Converter.yardToInchConverter(1), Converter.feetToInchConverter(3))
})

//1.19 when compared with 2 inch and 5 cm when converted should return 
it('given input of 2 inch and 5 cm should return equal', () => {
    assert.equal(Converter.inchToCentimeterConverter(2), Converter.returnSame(5))
})








