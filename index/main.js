let index = {

    data: {
        companyInfo: null,
        launchpadsData: null,
        landpadsData: null
    },

    initialize: function() {

        axios
            .get('https://api.spacexdata.com/v4/company')
            .then(index.onCompanyInfoAvailable)
            .catch(function(error) {
                // handle error
                console.log(error);
            })
        ;
        axios
            .get('https://api.spacexdata.com/v4/launchpads')
            .then(index.onLaunchpadsDataAvailable)
            .catch(function(error) {
                // handle error
                console.log(error);
            })
        ;
        axios
            .get('https://api.spacexdata.com/v4/landpads')
            .then(index.onLandpadsDataAvailable)
            .catch(function(error) {
                // handle error
                console.log(error);
            })
        ;

    },

    onCompanyInfoAvailable: function(response) {

        index.data.companyInfo = response.data;

        index.companyInfo.render();
    },
    onLaunchpadsDataAvailable: function(response) {

        index.data.launchpadsData = response.data;

        index.companyMap.initialize();
        index.companyMap.render('launchpads');
    },
    onLandpadsDataAvailable: function(response) {

        index.data.landpadsData = response.data;

        index.companyMap.initialize();
        index.companyMap.render('landpads');
    }
};

index.initialize();

