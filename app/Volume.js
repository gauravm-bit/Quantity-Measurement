class VolumeFactory
{
    gallonToLitreConverter = (volume) => (volume * 3.78);
    
    returnSame = (volume) => volume;
}
module.exports = new VolumeFactory;