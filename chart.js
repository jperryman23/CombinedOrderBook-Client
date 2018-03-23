var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar', //stepped

    // The data for our dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Bittrex",
                backgroundColor: 'rgb(57, 57, 57)',
                // borderColor: 'rgb(255, 99, 132)',
                data: [-60, 15, -10, -5, 25, -11, 50, 45],
            },
            {
                label: "Poloniex",
                backgroundColor: 'rgb(46, 140, 226)',
                // borderColor: 'rgb(255, 99, 132)',
                data: [-45,23, -10, -5, 20, 20, 30, 45],
            },
            {
                label: "GDAX",
                backgroundColor: 'rgb(105, 5, 113)',
                // borderColor: 'rgb(255, 99, 132)',
                data: [-50,30, -10, 10, 15, 20, -25, 55],
            }

    ]
    },

    // Configuration options go here
    options: {
        title: {
            display: true,
            text: 'BTC-ETH Volume-Price',
            fontSize: 15,
            fontStyle: 'bold'
        }
    }
});
