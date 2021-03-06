let launches = {

    data: {
        allItems: []
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
    },

    onAxiosError: function(error) {
        console.log(error);
    }
};

launches.initialize();



let o1 = {
    p1: function() {},
    p2: 'test'
};

o1.p3 = function() {}