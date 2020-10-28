"use strict";
function Util() {
    function calculateTotalDistributedPassengers(distributedPassengers) {
        var totalPassengers = 0;
        for (var quantity in distributedPassengers) {
            if (distributedPassengers.hasOwnProperty(quantity)) {
                totalPassengers += parseFloat(distributedPassengers[quantity]);
            }
        }
        return totalPassengers;
    }

    function calculateTotalNumberOfPassengers(passengerArray) {
        return passengerArray.reduce(function(a,b) { return a + b; }, 0);
    }
    
    function checkInput(input) {
        if (Math.number(input) === NaN) {
            throw new Error('The input should be a number');
        }
        if (!(input)) {
            throw new Error('The input should not be empty')
        }
    }

    function calculateTotalDistance(distances) {
        var totalDistance = 0;
        for (var i in distances) {
            if (Math.sign(distances[i]) >= 0) {
                totalDistance += distances[i];
            }
        }
        return totalDistance;
    }

    function calculateBonusPoints(businessDistances, economyDistances, businessBonus, economyBonus) {
        var businessPct = businessBonus / 100;
        var economyPct = economyBonus / 100;
        var totalBusinessDistance = calculateTotalDistance(businessDistances);
        var totalEconomyDistance = calculateTotalDistance(economyDistances);
        var totalBonusPoints = (totalBusinessDistance * businessPct) + (totalEconomyDistance * economyPct);
        return totalBonusPoints;
    }
    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers, checkInput, calculateTotalDistance, calculateBonusPoints};
}

module.exports = Util();

