"use strict";
function Passengers() {
    function checkFlightCapacity(capacity, passengers) {
        var totalPassengers = passengers.reduce(function(a,b) { return a + b; }, 0);
        if (totalPassengers <= capacity) {
            return totalPassengers;
        } else if (totalPassengers > capacity) {
            throw new Error('Total passengers exceeds flight capacity!');
        }
    }

    function distributeAllSeatsToAllPassengers(vipPassengers, regularPassengers, flights, businessSeats, economySeats) {

        var vipSeated = 0;
        var regularSeated = 0;
        businessSeats = businessSeats * flights;
        economySeats = economySeats * flights;
        var openBusinessSeats = businessSeats;
        var openEconomySeats = economySeats;
        var vipInBusiness = 0;
        var vipInEconomy = 0;
        var vipLeftover = 0;
        var regularInBusiness = 0;
        var regularInEconomy = 0;
        var regularLeftover = 0;

        for (var i=0;i<vipPassengers;i++) {
            if (openBusinessSeats > 0) {
                vipInBusiness++;
                vipSeated++;
                openBusinessSeats--;
            } else if (openBusinessSeats == 0 && openEconomySeats > 0) {
                vipInEconomy++;
                vipSeated++;
                openEconomySeats--;
            } else if (openBusinessSeats == 0 && openEconomySeats == 0) {
                vipLeftover++;
            }
        }

        // debug; confirming math is being done correctly
        // console.log("vipInBusiness is " + vipInBusiness);
        // console.log("openBusinessSeats is " + openBusinessSeats);

        for (var i=0;i<regularPassengers;i++) {
            if (openBusinessSeats > 0) {
                regularInBusiness++;
                regularSeated++;
                openBusinessSeats--;
            } else if (openBusinessSeats == 0 && openEconomySeats > 0) {
                regularInEconomy++;
                regularSeated++;
                openEconomySeats--;
            } else if (openBusinessSeats == 0 && openEconomySeats == 0) {
                regularLeftover++;
            }
        }

        // debug; confirming value is expected
        // console.log("regularInBusiness is " + regularInBusiness);

        var obj = {
            vipPassengersWithBusinessSeats: vipInBusiness,
            regularPassengersWithBusinessSeats: regularInBusiness,
            vipPassengersWithEconomySeats: vipInEconomy,
            regularPassengersWithEconomySeats: regularInEconomy
        }

        return obj;

    }

    return {checkFlightCapacity, distributeAllSeatsToAllPassengers};
}
module.exports = Passengers();

