class ConverterFactory
{
     feetConverter = (length) => length * 12;

     inchConverter = (length) => length / 12;
}
module.exports = new ConverterFactory;