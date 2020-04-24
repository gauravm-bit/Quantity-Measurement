class MasssFactory
{

    KilogramToGramConverter = (mass) => {
        let result = (mass * 1000);
        return result
    }

    tonneToKgConverter = (mass) => {
        let result = (mass * 1000);
        return result
    }

    gramToKgsConverter = (mass) => {  
        let result = (mass / 1000)
        return result
    }

    returnSame = (mass) => mass;

    additionMass = (Mass1, Mass2) => {
        let result = Mass1 + Mass2;
        return result
    }

}
module.exports = new MasssFactory;