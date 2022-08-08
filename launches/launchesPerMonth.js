launches.renderChart = function() {

    let items = launches.data.allItems;

    for (let i = 0; i < items.length; i++) {

    }

    let ctx = document.querySelector('canvas.si-launchesChartCanvas').getContext('2d');

    let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'launches',
                data: [12, 3, 5, 2, 3, 3, 4, 5, 7, 3, 6, 6]
            }]
        }
    });

};