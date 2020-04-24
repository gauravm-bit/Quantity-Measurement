const Volume = require('../app/Volume')
const assert = require('chai').assert;

describe(`Testing for Volume measurement`, () => {
//1.23 when compared with 1 gallon water and 3.78 liters should return equal
it('given input of 1 gallon water and 3.78 litres should return equal', () => {
    assert.equal(Volume.gallonToLitreConverter(1), Volume.returnSame(3.78))
})

//1.24 when compared with 1 litre water and 1000 milliliters should return equal
it('given input of 1 litre water and 1000 millilitres should return equal', () => {
    assert.equal(Volume.litreToMilliLitreConverter(1), Volume.returnSame(1000))
})

//1.25 when added with 1 gallon water and 3.78 litre should return 7.56 litres 
it('given input of 1 gallon water and 3.78 litre should return 7.56 litres', () => {
    var volume1 = Volume.gallonToLitreConverter(1)
    var volume2 = Volume.returnSame(3.78)
    var result = Volume.additionVolume(volume1, volume2)
    assert.equal(result, 7.56)
})

//1.26 when added with 1 litre water and 1000 ml should return 2 litres 
it('given input of 1 litre water and 1000 ml should return 2 litres', () => {
    var volume1 = Volume.returnSame(1)
    var volume2 = Volume.millilitretoLitreConverter(1000)
    var result = Volume.additionVolume(volume1, volume2)
    assert.equal(result, 2)
})

})