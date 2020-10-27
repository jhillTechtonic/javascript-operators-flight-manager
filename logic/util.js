function Util() {
    function calculateTotalDistributedPassengers(distributedPassengers) {
        var totalPassengers = 0;
        for (quantity in distributedPassengers) {
            if (distributedPassengers.hasOwnProperty(quantity)) {
                totalPassengers += parseFloat(distributedPassengers[quantity]);
            }
        }
        return totalPassengers;
    }

    function calculateTotalNumberOfPassengers(passengerArray) {
        return passengerArray.reduce(function(a,b) { return a + b; }, 0);
    }
    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers};
}

module.exports = Util();

