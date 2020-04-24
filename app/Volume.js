class VolumeFactory
{
    gallonToLitreConverter = (volume) => {
        let result = (volume * 3.78);
        return result
    }

    litreToMilliLitreConverter = (volume) => {
        let result = (volume * 1000);
        return result
    }

    millilitretoLitreConverter = (volume) => {
        let result = (volume / 1000);
        return result
    }
    returnSame = (volume) => volume;

    additionVolume = (volume1, volume2) => {
        let result = volume1 + volume2;
        return result
}
}
module.exports = new VolumeFactory;