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

        // build table
        for (let i = launchData.length - 1; i >= 0; i--) {

            let container = document.querySelector('div.firstModal table > tbody');
    
            let row = document.createElement('tr');
    
            let flightNo = document.createElement('td');
            let name = document.createElement('td');
            let date = document.createElement('td');
            let noOfCores = document.createElement('td');
            let noOfCrew = document.createElement('td');
    
            row.appendChild(flightNo);
            row.appendChild(name);
            row.appendChild(date);
            row.appendChild(noOfCores);
            row.appendChild(noOfCrew);
    
            flightNo.innerHTML = launchData[i].flight_number;
            name.innerHTML = launchData[i].name;
            date.innerHTML = moment(launchData[i].date_unix * 1000).format('LL');
            noOfCores.innerHTML = launchData[i].cores.length;
            noOfCrew.innerHTML = launchData[i].crew.length;
    
            container.appendChild(row);
        }
    },

    onAxiosError: function(error) {
        console.log(error);
    }
};

launches.initialize();