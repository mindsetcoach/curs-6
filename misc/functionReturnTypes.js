

let getMediumHeightPerson = function(theName) {
    return {
        name: theName,
        height: 168
    };
};

let firstPerson = getMediumHeightPerson('Ana');
let secondtPerson = getMediumHeightPerson('Mihai');

let getCar = function(theBrand) {
    return {
        brand: theBrand,
        color: 'red',
        getNoOfSeats: function() {
            return 7;
        }
    };
};

let noOfSeats = getCar('bmw').getNoOfSeats();