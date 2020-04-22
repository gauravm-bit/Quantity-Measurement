class VolumeFactory
{
    gallonToLitreConverter = (volume) => (volume * 3.78);

    litreToMilliLitreConverter = (volume) => (volume * 1000);

    millilitretoLitreConverter = (volume) => (volume / 1000);
    
    returnSame = (volume) => volume;

    additionVolume = (volume1, volume2) => volume1 + volume2;
}
module.exports = new VolumeFactory;