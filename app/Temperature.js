class TemperatureFactory
{

    farhanietToCelciusConverter = (temperature) => {
        let result = (temperature - 32) * 5/9;
        return result;
    }

    returnSame = (temperature) => temperature;

}
module.exports = new TemperatureFactory;