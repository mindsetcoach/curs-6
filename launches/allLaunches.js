launches.renderTable = function() {

    let items = launches.data.allItems;

    for (let i = items.length - 1; i >= 0; i--) {

        let container = document.querySelector('div.firstModal table > tbody');

        let row = document.createElement('tr');

        let flightNo = document.createElement('th');
        flightNo.setAttribute('scope', 'row');
        let name = document.createElement('td');
        let date = document.createElement('td');
        let noOfCores = document.createElement('td');
        let noOfCrew = document.createElement('td');

        row.appendChild(flightNo);
        row.appendChild(name);
        row.appendChild(date);
        row.appendChild(noOfCores);
        row.appendChild(noOfCrew);

        flightNo.innerHTML = items[i].flight_number;
        name.innerHTML = items[i].name;
        date.innerHTML = moment(items[i].date_unix * 1000).format('LL');
        noOfCores.innerHTML = items[i].cores.length;
        noOfCrew.innerHTML = items[i].crew.length;

        container.appendChild(row);
    }
};