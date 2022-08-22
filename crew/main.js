let crew = {

    data: {
        allItems: []
    },

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

        crew.data.allItems = response.data;

        crew.renderTable();
        crew.gallery.render();
    },
};

crew.initialize();

