function Flights() {
    
    function calculateNumberOfFlights(passengers, capacity) {
    
        if (passengers < 1 || !(Number.isInteger(passengers))) {
            throw new Error('The number of passengers must be a positive integer value');
        } else if (capacity < 1 || !(Number.isInteger(capacity))) {
            throw new Error('The capacity of the flight must be a positive integer value');
        }
        
        var mod = passengers % capacity;
        
        var baseCount = Math.floor(passengers/capacity);
        
        if (mod == 0) {
            return baseCount;
        }else if (mod == passengers) {
            return 1;
        }else {
            return baseCount + 1;
        }
    
    }

    function checkAircraftRevision(limit, distances) {
        var totalDistance = distances.reduce(function(a,b){ return a + b; }, 0);
        var ratio = limit / totalDistance;
        if (ratio >= 2) {
            return "The revision should be done within the next 3 months";
        } else if (ratio >= 1.5 && ratio < 2) {
            return "The revision should be done within the next 2 months";
        } else if (ratio >= 1 && ratio < 1.5) {
            return "The revision should be done within the next month";
        } else if (ratio < 1) {
            throw new Error("Flight path exceeds total distance limit!")
        }
    }

    return {calculateNumberOfFlights, checkAircraftRevision};
}
module.exports = Flights();

