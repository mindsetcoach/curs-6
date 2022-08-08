launches.renderChart = function() {

    let launchesPerMonth = launches.getLaunchesPerMonth(launches.data.allItems);

    let ctx = document.querySelector('canvas.si-launchesChartCanvas').getContext('2d');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'launches',
                data: launchesPerMonth
            }]
        }
    });

};

launches.getLaunchesPerMonth = function(items) {
    let launchesPerMonth = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < items.length; i++) {
        let itemMonth = items[i].date_utc.split('-')[1];

        launchesPerMonth[parseInt(itemMonth) - 1]++;
    }
    return launchesPerMonth;
}