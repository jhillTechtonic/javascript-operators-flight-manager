"use strict";
function Prices() {
    function calculateFinalPrice(basePrice,passAdj,flightAdj) {
        var passPct = Number.parseFloat(passAdj) / 100;
        var flightPct = Number.parseFloat(flightAdj) / 100;
        basePrice = Number.parseFloat(basePrice);
        var finalPrice = basePrice + (passPct * basePrice) + (flightPct * (basePrice + (basePrice * passPct)));
        return Number.parseFloat(finalPrice).toFixed(2);
    }

    function calculateDefaultFinalPrice (basePrice, passenger, flight) {
        var regularAdjustment = -0.05;
        var vipAdjustment = 0.05;
        var economyAdjustment = -0.03;
        var businessAdjustment = 0.10;
        var passengerAdjustment = 0;
        var flightAdjustment = 0;
        basePrice = Number.parseFloat(basePrice);

        switch (passenger.toUpperCase()) {
            case "VIP":
                passengerAdjustment = vipAdjustment;
                break;
            case "REGULAR":
                passengerAdjustment = regularAdjustment;
                break;
            default:
                throw new Error('Not a valid passenger type');
        }

        switch(flight.toUpperCase()) {
            case "ECONOMY":
                flightAdjustment = economyAdjustment;
                break;
            case "BUSINESS":
                flightAdjustment = businessAdjustment;
                break;
            default:
                throw new Error('Not a valid flight type');
        }
        
        return Number(basePrice + (passengerAdjustment * basePrice)) + (flightAdjustment * (basePrice + (passengerAdjustment * basePrice)));
    }

    function calculateTotalFinalPrice(seatCount, passenger, flight, basePrice) {
        return Number.parseFloat(seatCount * calculateDefaultFinalPrice(basePrice, passenger, flight)).toFixed(2);
    }
    return {calculateFinalPrice, calculateDefaultFinalPrice, calculateTotalFinalPrice};
}
module.exports = Prices();

