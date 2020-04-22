class ConverterFactory
{
     feetToInchConverter = (length) => length * 12;

     inchToFeetConverter = (length) => length / 12;

     yardToInchConverter = (length) => length * 36;

     returnSame = (length) => length;
}
module.exports = new ConverterFactory;