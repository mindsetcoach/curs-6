let index = {

    data: {
        companyInfo: null
    },

    initialize: function() {

        axios
            .get('https://api.spacexdata.com/v4/company')
            .then(index.onAxiosFinished)
            .catch(function(error) {
                // handle error
                console.log(error);
            })
        ;

    },

    onAxiosFinished: function(response) {

        index.data.companyInfo = response.data;

        index.companyInfo.render();
    },
};

index.initialize();

