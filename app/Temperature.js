class TemperatureFactory
{

    farhanietToCelciusConverter = (temperature) => (temperature - 32) * 5/9;

    returnSame = (temperature) => temperature;

}
module.exports = new TemperatureFactory;