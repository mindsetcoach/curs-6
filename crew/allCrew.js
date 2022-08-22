crew.renderTable = function() {
    let items = crew.data.allItems;

    for (let i = items.length - 1; i >= 0; i--) {

        let container = document.querySelector('div.si-allCrew table > tbody');

        let row = document.createElement('tr');

        let name = document.createElement('td');
        let agency = document.createElement('td');
        let status = document.createElement('td');

        row.appendChild(name);
        row.appendChild(agency);
        row.appendChild(status);

        name.innerHTML = items[i].name;
        agency.innerHTML = items[i].agency;
        status.innerHTML = items[i].status;

        container.appendChild(row);
    }
};