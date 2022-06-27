let crew = {
    initialize: function() {

        axios
            .get('https://api.spacexdata.com/v4/crew')
            .then(crew.onAxiosFinished)
            .catch(function(error) {
                // handle error
                console.log(error);
            })
        ;

        popupHandling.popupInit();

    },

    onAxiosFinished: function(response) {
        let launchData = response.data;
        // TODO stuff here
    },
};

crew.initialize();

