class ConverterFactory
{
     feetToInchConverter = (length) => length * 12;

     inchToFeetConverter = (length) => length / 12;

     yardToInchConverter = (length) => length * 36;

     returnSame = (length) => length;

     inchToCentimeterConverter = (length) =>  Math.floor(length * 2.54);

     centimenterToInchConverter = (length) => Math.ceil(length / 2.54);

     additionLength = (length1, length2) => length1 + length2;
    
}
module.exports = new ConverterFactory;