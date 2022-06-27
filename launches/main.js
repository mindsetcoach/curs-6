let launches = {

    initialize: function() {
        axios
            .get('https://api.spacexdata.com/v4/launches')
            .then(launches.onAxiosFinished)
            .catch(launches.onAxiosError)
        ;

        popupHandling.popupInit();
    },

    onNoOfLaunchesPressed: function() {
        alert('the no of launches was pressed');
    },

    onAxiosFinished: function(response) {
        let launchData = response.data;
        // TODO stuff here
    },

    onAxiosError: function(error) {
        console.log(error);
    }
};

launches.initialize();