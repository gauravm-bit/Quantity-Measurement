class ConverterFactory
{
     feetToInchConverter = (length) => length * 12;

     inchToFeetConverter = (length) => length / 12;

     yardToInchConverter = (length) => length * 36;

     returnSame = (length) => length;

     inchToCentimeterConverter = (length) =>  Math.floor(length * 2.54);
    
}
module.exports = new ConverterFactory;