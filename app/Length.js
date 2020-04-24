class LengthFacotry
{
     feetToInchConverter = (length) => {
          let result = length * 12;
          return result
     }

     inchToFeetConverter = (length) => {
          let result = length / 12;
          return result
     }

     yardToInchConverter = (length) => {
          let result = length * 36;
          return result
     }

     returnSame = (length) => length;

     inchToCentimeterConverter = (length) => {
          let result = Math.floor(length * 2.54);
          return result
     }

     centimenterToInchConverter = (length) => {
          let result = Math.ceil(length / 2.54);
          return result
     }
     
     additionLength = (length1, length2) => {
          let result = length1 + length2;
          return result
     }
}
module.exports =  new LengthFacotry;