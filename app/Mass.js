class MasssFactory
{

    KilogramToGramConverter = (mass) => (mass * 1000)

    tonneToKgConverter = (mass) => (mass * 1000)

    gramToKgsConverter = (mass) => (mass / 1000)

    returnSame = (mass) => mass;

    additionMass = (Mass1, Mass2) => Mass1 + Mass2;

}
module.exports = new MasssFactory;