function Prices() {
    function calculateFinalPrice(basePrice,passAdj,flightAdj) {
        var passPct = passAdj / 100;
        var flightPct = flightAdj / 100;
        var finalPrice = basePrice + (passPct * basePrice) + (flightPct * (basePrice + (basePrice * passPct)));
        return finalPrice;
    }
    return {calculateFinalPrice};
}
module.exports = Prices();

