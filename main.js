
axios
    .get('https://api.spacexdata.com/v4/crew')
    .then(function(response) {
        // handle success
        console.log(response);
    })
    .catch(function(error) {
        // handle error
        console.log(error);
    })
;