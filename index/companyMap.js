index.companyMap = {

    map: null,

    initialize: function() {

        if (index.companyMap.map === null) {
            index.companyMap.map = L
                .map('map')
                .setView(
                    [40, 0],
                    2
                )
            ;

            L
                .tileLayer(
                    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    {
                        maxZoom: 19,
                        attribution: '© OpenStreetMap'
                    }
                )
                .addTo(index.companyMap.map)
            ;
        }
    },

    render: function(type) {

        if (type === 'launchpads') {
            let launchpadsData = index.data.launchpadsData;
            for (let i = 0; i < launchpadsData.length; i++) {
                L
                    .marker([launchpadsData[i].latitude, launchpadsData[i].longitude])
                    .addTo(index.companyMap.map)
                ;
            }
        }
        // if (type === 'landpads') {
        //     let landpadsData = index.data.landpadsData;
        //     for (let i = 0; i < landpadsData.length; i++) {
        //         L
        //             .circle(
        //                 [landpadsData[i].latitude, landpadsData[i].longitude],
        //                 {
        //                     color: 'red',
        //                     fillColor: '#f03',
        //                     fillOpacity: 0,
        //                     radius: 200000
        //                 }
        //             )
        //             .addTo(index.companyMap.map)
        //         ;
        //     }
        // }

    }

};
