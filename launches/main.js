let launches = {

    data: {
        allItems: [],
        calendarPage: {
            year: null,
            month: null
        } 
    },

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

        launches.data.allItems = response.data;

        launches.renderTable();
        launches.renderChart();
        launches.calendar.init();
    },

    onAxiosError: function(error) {
        console.log(error);
    }
};

launches.initialize();
