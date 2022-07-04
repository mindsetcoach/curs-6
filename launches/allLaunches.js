launches.renderTable = function() {

    let launchItems = launches.data.allItems;

    for (let i = launchItems.length - 1; i >= 0; i--) {

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

        flightNo.innerHTML = launchItems[i].flight_number;
        name.innerHTML = launchItems[i].name;
        date.innerHTML = moment(launchItems[i].date_unix * 1000).format('LL');
        noOfCores.innerHTML = launchItems[i].cores.length;
        noOfCrew.innerHTML = launchItems[i].crew.length;

        container.appendChild(row);
    }
};