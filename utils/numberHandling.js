let numberHandling = {

    getNumberAsStringWithCommas: function(number) {

        let numberAsString = '' + number;
        let numberAsArray = numberAsString.split('');
        let numberAsArrayWithCommas = [];

        for (let i = numberAsArray.length - 1; i >= 0; i--) {
            numberAsArrayWithCommas.unshift(numberAsArray[i]);
            if ((numberAsArray.length - i) % 3 === 0 && i !== 0) {
                numberAsArrayWithCommas.unshift(',');
            }
        }

        let numberAsStringWithCommas = numberAsArrayWithCommas.join('');
        return numberAsStringWithCommas;
    }
    
}